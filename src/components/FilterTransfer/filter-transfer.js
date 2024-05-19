import CheckboxWithLabel from '../../UI/CheckboxWithLabel'

import styles from './filter-transfer.module.scss'

export default function FilterTransfer() {
  return (
    <section className={styles.filterTransfer}>
      <h2 className={styles.title}>количество пересадок</h2>
      <CheckboxWithLabel
        className={styles.filter}
        id="CheckboxAll"
        onChange={() => {}}
        label="Все"
      />
      <CheckboxWithLabel
        className={styles.filter}
        id="CheckboxZero"
        onChange={() => {}}
        label="Без пересадок"
      />
      <CheckboxWithLabel
        className={styles.filter}
        id="CheckboxOne"
        onChange={() => {}}
        label="1 пересадка"
      />
      <CheckboxWithLabel
        className={styles.filter}
        id="CheckboxTwo"
        onChange={() => {}}
        label="2 пересадки"
      />
      <CheckboxWithLabel
        className={styles.filter}
        id="CheckboxThree"
        onChange={() => {}}
        label="3 пересадки"
      />
    </section>
  )
}
