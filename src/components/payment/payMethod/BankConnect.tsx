import React, { useState } from 'react'
import styles from './BankConnect.module.scss'
import { getBankLogo } from './PossibleBank'

interface Props {
  bankName: string
  bankCode: string
  bankDigits: number[]
}

export default function BankConnection({ bankName, bankCode, bankDigits }: Props) {
  const bankLogo = getBankLogo(bankName)

  const [accountNumber, setAccountNumber] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

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

  const handleAccountNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    // 입력된 숫자만 추출하여 문자열 생성
    const inputDigits = value.replace(/[^0-9]/g, '')
    let formattedValue = ''
    let currentIndex = 0

    for (let i = 0; i < bankDigits.length; i++) {
      const digitCount = bankDigits[i]
      const part = inputDigits.slice(currentIndex, currentIndex + digitCount)
      if (part.length > 0) {
        formattedValue += part

        if (i < bankDigits.length - 1) {
          formattedValue += '-'
        }

        currentIndex += digitCount
      }
    }
    setAccountNumber(formattedValue)
  }

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    // 입력된 숫자만 추출하여 문자열 생성
    const inputDigits = value.replace(/[^0-9]/g, '')
    // 정규표현식을 사용하여 포맷팅
    const formattedValue = inputDigits.slice(0, 11).replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')
    setPhoneNumber(formattedValue)
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>계좌 등록</div>
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
              <form>
                <input
                  className={styles.input}
                  type="text"
                  value={accountNumber}
                  onChange={handleAccountNumberChange}
                  placeholder="계좌번호를 입력해주세요!"
                />
              </form>
            </div>
          </div>
          <div className={styles.subContainer}>
            <div className={styles.subTitle}>전화번호</div>
            <div className={styles.inputContainer}>
              <form>
                <input
                  className={styles.input}
                  type="text"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  placeholder="전화번호를 입력해주세요!"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
