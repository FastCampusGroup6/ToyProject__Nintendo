import React, { useState, useEffect } from 'react'
import styles from './BankConnect.module.scss'
import { getBankLogo } from './PossibleBank'
import { AccountConnectionRequest } from '@/types/account'

interface Props {
  bankName: string
  bankCode: string
  bankDigits: number[]
  handleBankConnectData: (data: AccountConnectionRequest) => void
}

export default function BankConnection({ bankName, bankCode, bankDigits, handleBankConnectData }: Props) {
  const bankLogo = getBankLogo(bankName)

  const [accountNumber, setAccountNumber] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

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

  // api 사용에 필요한 requestbody 부모컴포넌트(payMethod 로 전달)
  useEffect(() => {
    handleBankConnectData({
      bankCode: bankCode, // 연결할 은행 코드 (필수!)
      accountNumber: accountNumber.replace(/-/g, ''), // 연결할 계좌번호 (필수!)
      phoneNumber: phoneNumber.replace(/-/g, ''), // 사용자 전화번호 (필수!)
      signature: true // 사용자 서명 (필수!)
    })
  }, [phoneNumber, accountNumber])

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

// 2. 계좌 연결
/*
### 계좌 연결

- 연결된 계좌 잔액에는 자동으로 기본 '3백만원'이 추가됩니다.
- 요청하는 계좌번호와 전화번호에는``구분이 없어야 합니다.

`curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/account 
  \ -X 'POST'
  \ -H 'Authorization: Bearer <accessToken>'`

요청 데이터 타입 및 예시:

`interface RequestBody {
  bankCode: string // 연결할 은행 코드 (필수!)
  accountNumber: string // 연결할 계좌번호 (필수!)
  phoneNumber: string // 사용자 전화번호 (필수!)
  signature: boolean // 사용자 서명 (필수!)
}`

`{
  "bankCode": "088",
  "accountNumber": "123456789012",
  "phoneNumber": "01012345678",
  "signature": true
}`

응답 데이터 타입 및 예시:

`interface ResponseValue { // 연결된 계좌 정보
  id: string // 계좌 ID
  bankName: string // 은행 이름
  bankCode: string // 은행 코드
  accountNumber: string // 계좌 번호
  balance: number // 계좌 잔액
}`
  */
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
