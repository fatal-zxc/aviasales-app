import styles from './checkbox-with-label.module.scss'

export default function CheckboxWithLabel({ id, label, onChange, className }) {
  return (
    <div className={className}>
      <input
        className={styles.checkbox}
        id={id}
        type="checkbox"
        onChange={onChange}
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
