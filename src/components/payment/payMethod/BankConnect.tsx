import React from 'react'
import styles from './BankConnect.module.scss'
import { getBankLogo } from './PossibleBank'

interface Props {
  bankName: string
  bankCode: string
  bankDigits: number[]
}
/*
  {
    "name": "KB국민은행",
    "code": "004",
    "digits": [3, 2, 4, 3],
    "disabled": false
  },
*/
/*
  bankCode: string // 연결할 은행 코드 (필수!)
  accountNumber: string // 연결할 계좌번호 (필수!)
  phoneNumber: string // 사용자 전화번호 (필수!)
  signature: boolean // 사용자 서명 (필수!)
  */

export default function BankConnection({ bankName, bankCode, bankDigits }: Props) {
  const bankLogo = getBankLogo(bankName)

  return (
    <div className={styles.container}>
      <div className={styles.title}> 계좌 등록</div>
      <div className={styles.mainContainer}>
        <div className={styles.bankTitle}>
          <div className={styles.bankLogo}>
            <img className={styles.bankLogoImage} src={bankLogo} alt="로고" />
          </div>
          <div className={styles.bankName}>{bankName}</div>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.subContainer}>
            <div className={styles.subTitle}>계좌번호</div>
            <div className={styles.inputContainer}>
              <input className={styles.input} type="text" />
            </div>
          </div>
          <div className={styles.subContainer}>
            <div className={styles.subTitle}>전화번호</div>
            <div className={styles.inputContainer}>
              <input className={styles.input} type="text" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
