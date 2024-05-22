import { useSelector, useDispatch } from 'react-redux'

import { change } from '../../store/sort'

import styles from './filter-price.module.scss'

export default function FilterPrice() {
  const sort = useSelector((state) => state.sort.value)
  const dispatch = useDispatch()

  return (
    <section className={styles.filters}>
      <button
        className={sort === 'cheap' ? `${styles.filter} ${styles.selected}` : styles.filter}
        type="button"
        onClick={() => dispatch(change('cheap'))}
      >
        самый дешевый
      </button>
      <button
        className={sort === 'fastest' ? `${styles.filter} ${styles.selected}` : styles.filter}
        type="button"
        onClick={() => dispatch(change('fastest'))}
      >
        самый быстрый
      </button>
      <button
        className={sort === 'optimal' ? `${styles.filter} ${styles.selected}` : styles.filter}
        type="button"
        onClick={() => dispatch(change('optimal'))}
      >
        оптимальный
      </button>
    </section>
  )
}
