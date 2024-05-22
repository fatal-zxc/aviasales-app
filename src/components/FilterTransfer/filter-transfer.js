import { useSelector, useDispatch } from 'react-redux'

import CheckboxWithLabel from '../../UI/CheckboxWithLabel'
import { toggle, all, noone } from '../../store/transfers'

import styles from './filter-transfer.module.scss'

export default function FilterTransfer() {
  const filters = useSelector((state) => state.transfers)
  const { zero, one, two, three } = filters
  const dispatch = useDispatch()

  return (
    <section className={styles.filterTransfer}>
      <h2 className={styles.title}>количество пересадок</h2>
      <CheckboxWithLabel
        className={styles.filter}
        id="CheckboxAll"
        onChange={() => (zero && one && two && three ? dispatch(noone()) : dispatch(all()))}
        label="Все"
        checkedState={zero && one && two && three}
      />
      <CheckboxWithLabel
        className={styles.filter}
        id="CheckboxZero"
        onChange={() => dispatch(toggle('zero'))}
        label="Без пересадок"
        checkedState={zero}
      />
      <CheckboxWithLabel
        className={styles.filter}
        id="CheckboxOne"
        onChange={() => dispatch(toggle('one'))}
        label="1 пересадка"
        checkedState={one}
      />
      <CheckboxWithLabel
        className={styles.filter}
        id="CheckboxTwo"
        onChange={() => dispatch(toggle('two'))}
        label="2 пересадки"
        checkedState={two}
      />
      <CheckboxWithLabel
        className={styles.filter}
        id="CheckboxThree"
        onChange={() => dispatch(toggle('three'))}
        label="3 пересадки"
        checkedState={three}
      />
    </section>
  )
}
