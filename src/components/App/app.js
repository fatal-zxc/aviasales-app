import logo from '../../logo.svg'
import ProgressBar from '../ProgressBar'
import FilterPrice from '../FilterPrice'
import FilterTransfer from '../FilterTransfer'
import TicketsList from '../TicketsList'

import styles from './app.module.scss'

export default function App() {
  return (
    <section className={styles.app}>
      <header className={styles.header}>
        <img
          className={styles.logo}
          src={logo}
          alt="logo"
        />
        <ProgressBar />
      </header>
      <main className={styles.main}>
        <FilterTransfer />
        <div className={styles.right}>
          <FilterPrice />
          <TicketsList />
        </div>
      </main>
    </section>
  )
}
