import Ticket from '../Ticket/ticket'

import styles from './tickets-list.module.scss'

export default function TicketsList() {
  const data = {
    price: 64580,
    carrier: 'FV',
    segments: [
      {
        origin: 'MOW',
        destination: 'HKT',
        date: '2024-02-12T19:52:35.150Z',
        duration: 994,
        stops: ['HKG'],
      },
      {
        origin: 'HKT',
        destination: 'MOW',
        date: '2024-02-13T03:32:21.229Z',
        duration: 906,
        stops: ['DOH', 'HKG'],
      },
    ],
  }

  const tickets = (
    <>
      <Ticket
        price={data.price}
        carrier={data.carrier}
        there={data.segments[0]}
        back={data.segments[1]}
      />
      <Ticket
        price={data.price}
        carrier={data.carrier}
        there={data.segments[0]}
        back={data.segments[1]}
      />
      <Ticket
        price={data.price}
        carrier={data.carrier}
        there={data.segments[0]}
        back={data.segments[1]}
      />
      <Ticket
        price={data.price}
        carrier={data.carrier}
        there={data.segments[0]}
        back={data.segments[1]}
      />
    </>
  )

  return (
    <div>
      {tickets}
      <button
        className={styles.show}
        type="button"
      >
        показать еще 5 билетов!
      </button>
    </div>
  )
}
