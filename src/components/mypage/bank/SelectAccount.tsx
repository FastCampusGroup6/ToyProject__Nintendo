import React from 'react'
import styles from './SelectAccount.module.scss'
import getBankLogo from '@/utils/getBankLogo'
// import AccountBtn from '@/components/common/AccountBtn'

// 이 파일에 버튼 클릭 이벤트 사용 + 모달창 띄우기
interface BankProps {
  bankName: string
  accountNumber: string
  balance: number
}
export default function SelectAccount({ bankName, accountNumber, balance }: BankProps) {
  const bankLogo = getBankLogo(bankName)
  return (
    <div className={styles.container}>
      <div className={styles.bank}>
        <div className={styles.bankLogo}>
          <img src={bankLogo} alt="logo" />
        </div>
        <div className={styles.bankInfo}>
          <div className={styles.bankNames}>
            <span className={styles.bankName}>{bankName}</span>
            <hr className={styles.line} />
          </div>
          <div className={styles.accountNumber}>{accountNumber}</div>
          <div className={styles.changes}>
            <div className={styles.title}>잔액</div>
            <div className={styles.change}>{balance}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
