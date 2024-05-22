import styles from './checkbox-with-label.module.scss'

export default function CheckboxWithLabel({ id, label, onChange, className, checkedState = false }) {
  return (
    <div className={className}>
      <input
        className={styles.checkbox}
        id={id}
        type="checkbox"
        onChange={onChange}
        checked={checkedState}
      />
      <label
        className={styles.text}
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  )
}
