import styles from './filter-price.module.scss'

export default function FilterPrice() {
  return (
    <section className={styles.filters}>
      <button
        className={styles.filter}
        type="button"
      >
        самый дешевый
      </button>
      <button
        className={styles.filter}
        type="button"
      >
        самый быстрый
      </button>
      <button
        className={styles.filter}
        type="button"
      >
        оптимальный
      </button>
    </section>
  )
}
