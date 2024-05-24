import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Spin, Alert } from 'antd'

import Ticket from '../Ticket/ticket'
import { fetchSearchId, fetchTickets } from '../../store/aviasales'

import styles from './tickets-list.module.scss'

export default function TicketsList() {
  const ticketsData = useSelector((state) => state.aviasales.tickets)
  const id = useSelector((state) => state.aviasales.searchId)
  const stop = useSelector((state) => state.aviasales.stop)
  const errorCounter = useSelector((state) => state.aviasales.errorCounter)
  const firstLoaded = useSelector((state) => state.aviasales.firstLoaded)
  const priceSort = useSelector((state) => state.sort.value)
  const transfersFilters = useSelector((state) => state.transfers)

  const dispatch = useDispatch()

  const [ticketsLength, setTicketsLength] = useState(5)

  let ticketIdCounter = 0
  let ticketsDataSort = JSON.parse(JSON.stringify(ticketsData))

  if (!transfersFilters.zero) {
    ticketsDataSort = ticketsDataSort.filter((ticket) => ticket.segments[0].stops.length !== 0)
  }
  if (!transfersFilters.one) {
    ticketsDataSort = ticketsDataSort.filter((ticket) => ticket.segments[0].stops.length !== 1)
  }
  if (!transfersFilters.two) {
    ticketsDataSort = ticketsDataSort.filter((ticket) => ticket.segments[0].stops.length !== 2)
  }
  if (!transfersFilters.three) {
    ticketsDataSort = ticketsDataSort.filter((ticket) => ticket.segments[0].stops.length !== 3)
  }

  if (priceSort === 'cheap' && ticketsData.length !== 0) {
    ticketsDataSort.sort((a, b) => a.price - b.price)
  } else if (priceSort === 'fastest' && ticketsData.length !== 0) {
    ticketsDataSort.sort((a, b) => a.segments[0].duration - b.segments[0].duration)
  }

  const tickets = ticketsDataSort.slice(0, ticketsLength).map((ticket) => {
    ticketIdCounter += 1
    return (
      <Ticket
        price={ticket.price}
        carrier={ticket.carrier}
        there={ticket.segments[0]}
        back={ticket.segments[1]}
        key={ticketIdCounter}
      />
    )
  })

  useEffect(() => {
    dispatch(fetchSearchId())
  }, [])

  useEffect(() => {
    if (id === '' || stop || errorCounter >= 3) return
    dispatch(fetchTickets(id))
  }, [id, ticketsData, errorCounter])

  useEffect(() => {
    setTicketsLength(5)
  }, [priceSort, transfersFilters])

  const loader = !firstLoaded && !(errorCounter >= 3) ? <Spin className={styles.spiner} /> : null

  const main = firstLoaded ? (
    <div>
      {tickets}
      {ticketsDataSort.length >= ticketsLength ? (
        <button
          className={styles.show}
          type="button"
          onClick={() => setTicketsLength(ticketsLength + 5)}
        >
          показать еще 5 билетов!
        </button>
      ) : null}
    </div>
  ) : null

  const errorMessage =
    errorCounter >= 3 && !firstLoaded ? (
      <Alert
        type="error"
        message="smth went wrong"
        className={styles.message}
      />
    ) : null

  const emptyMessage =
    !ticketsDataSort.length && firstLoaded ? (
      <Alert
        message="Рейсов, подходящих под заданные фильтры, не найдено"
        className={styles.message}
      />
    ) : null

  return (
    <>
      {loader}
      {main}
      {errorMessage}
      {emptyMessage}
    </>
  )
}
