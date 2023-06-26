import React from 'react'
import styles from './ConnectedBank.module.scss'
import getBankLogo from '@/utils/getBankLogo'

interface BankProps {
  bankName: string
  accountNumber: string
  balance: number
  handleOnClick: () => void
  isActive: boolean
}

export default function Bank({ bankName, accountNumber, balance, handleOnClick, isActive }: BankProps) {
  const bankLogo = getBankLogo(bankName)

  return (
    <button className={`${styles.container} ${isActive ? styles.active : ''}`} onClick={handleOnClick}>
      <div className={styles.bank}>
        <div className={styles.bankLogo}>
          <img src={bankLogo} alt="logo" />
        </div>
        <div className={styles.bankInfo}>
          <div className={styles.bankName}>
            <span>{bankName}</span>
          </div>
          <div className={styles.accountNumber}>{accountNumber}</div>
          <div className={styles.changes}>
            <div className={styles.title}>잔액</div>
            <div className={styles.change}>{balance}</div>
          </div>
        </div>
      </div>
    </button>
  )
}
