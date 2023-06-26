import React from 'react'
import styles from './PossibleBank.module.scss'
import getBankLogo from '@/utils/getBankLogo'

interface Props {
  bankName: string
  onClick: () => void
}

export default function PossibleBank({ bankName, onClick }: Props) {
  const bankLogo = getBankLogo(bankName)

  return (
    <button className={styles.container} onClick={onClick}>
      <div className={styles.bankLogo}>
        <img className={styles.img} src={bankLogo} alt="로고" />
      </div>
      <div className={styles.bankName}>{bankName}</div>
    </button>
  )
}
