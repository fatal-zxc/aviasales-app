import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Spin, Alert } from 'antd'

import Ticket from '../Ticket/ticket'
import { fetchSearchId, fetchTickets } from '../../store/aviasales'

import styles from './tickets-list.module.scss'

export default function TicketsList() {
  const ticketsData = useSelector((state) => state.aviasales.tickets)
  const id = useSelector((state) => state.aviasales.searchId)
  const stop = useSelector((state) => state.aviasales.stop)
  const error = useSelector((state) => state.aviasales.error)
  const firstLoaded = useSelector((state) => state.aviasales.firstLoaded)
  const dispatch = useDispatch()
  let ticketIdCounter = 0

  const tickets = ticketsData.slice(0, 5).map((ticket) => {
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
    if (id === '' || stop || error) return
    dispatch(fetchTickets(id))
  }, [id, tickets, error])

  const loader = !firstLoaded && !error ? <Spin className={styles.spiner} /> : null
  const main = firstLoaded ? (
    <div>
      {tickets}
      <button
        className={styles.show}
        type="button"
      >
        показать еще 5 билетов!
      </button>
    </div>
  ) : null
  const errorMessage =
    error && !firstLoaded ? (
      <Alert
        type="error"
        message="smth went wrong"
        className={styles.error}
      />
    ) : null

  return (
    <>
      {loader}
      {main}
      {errorMessage}
    </>
  )
}
