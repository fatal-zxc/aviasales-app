import { Progress } from 'antd'
import { useSelector } from 'react-redux'

import styles from './ProgressBar.module.scss'

export default function ProgressBar() {
  const dataLength = useSelector((state) => state.aviasales.tickets).length
  const done = useSelector((state) => state.aviasales.stop)
  const errorCounter = useSelector((state) => state.aviasales.errorCounter)

  const progressPercent = done ? 100 : ((dataLength / 15000) * 100).toFixed(1)
  const status = errorCounter >= 3 ? 'exception' : 'active'

  return (
    <Progress
      className={styles.progress}
      percent={progressPercent}
      status={done ? '' : status}
    />
  )
}
