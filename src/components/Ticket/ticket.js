import { format } from 'date-fns'

import styles from './ticket.module.scss'

export default function Ticket({ price, carrier, there, back }) {
  const thereDate = new Date(there.date)
  const thereDateArrival = new Date(thereDate.getTime() + there.duration * 1000 * 60)
  const backDate = new Date(back.date)
  const backDateArrival = new Date(backDate.getTime() + back.duration * 1000 * 60)

  return (
    <div className={styles.ticket}>
      <header className={styles.header}>
        <p className={styles.price}>{price} Р</p>
        <img
          className={styles.company}
          src={`//pics.avs.io/99/36/${carrier}.png`}
          alt="avia-company"
        />
      </header>
      <div className={styles.segment}>
        <div className={styles.info}>
          <p className={styles.top}>{`${there.origin} - ${there.destination}`}</p>
          <p
            className={styles.bottom}
          >{`${format(thereDate, 'HH')}:${format(thereDate, 'mm')} - ${format(thereDateArrival, 'HH')}:${format(thereDateArrival, 'mm')}`}</p>
        </div>
        <div className={styles.info}>
          <p className={styles.top}>в пути</p>
          <p className={styles.bottom}>{`${Math.floor(there.duration / 60)}ч ${there.duration % 60}м`}</p>
        </div>
        <div className={styles.info}>
          <p className={styles.top}>{`${there.stops.length} пересадки`}</p>
          <p className={styles.bottom}>{there.stops.join(', ')}</p>
        </div>
      </div>
      <div className={styles.segment}>
        <div className={styles.info}>
          <p className={styles.top}>{`${back.origin} - ${back.destination}`}</p>
          <p
            className={styles.bottom}
          >{`${format(backDate, 'HH')}:${format(backDate, 'mm')} - ${format(backDateArrival, 'HH')}:${format(backDateArrival, 'mm')}`}</p>
        </div>
        <div className={styles.info}>
          <p className={styles.top}>в пути</p>
          <p className={styles.bottom}>{`${Math.floor(back.duration / 60)}ч ${back.duration % 60}м`}</p>
        </div>
        <div className={styles.info}>
          <p className={styles.top}>{`${back.stops.length} пересадки`}</p>
          <p className={styles.bottom}>{back.stops.join(', ')}</p>
        </div>
      </div>
    </div>
  )
}
