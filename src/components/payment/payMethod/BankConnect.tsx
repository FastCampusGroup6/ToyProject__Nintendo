import React, { useState, useEffect } from 'react'
import styles from './BankConnect.module.scss'
import getBankLogo from '@/utils/getBankLogo'
import { AccountConnectionRequest } from '@/types/account'
import Loading from '@/components/payment/Loading'
import { ACCOUNT_NUMBER_REGEX, PHONE_NUMBER_REGEX, PHONE_NUMBER_FORMAT_REGEX } from '@/utils/constants'

interface Props {
  bankName: string
  bankCode: string
  bankDigits: number[]
  handleBankConnectData: (data: AccountConnectionRequest) => void
  isLoading: boolean
}

export default function BankConnection({ bankName, bankCode, bankDigits, handleBankConnectData, isLoading }: Props) {
  const bankLogo = getBankLogo(bankName)

  const [accountNumber, setAccountNumber] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  const handleAccountNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    // 입력된 숫자만 추출하여 문자열 생성
    const inputDigits = value.replace(ACCOUNT_NUMBER_REGEX, '')
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
    const inputDigits = value.replace(PHONE_NUMBER_REGEX, '')
    // 정규표현식을 사용하여 포맷팅
    const formattedValue = inputDigits.slice(0, 11).replace(PHONE_NUMBER_FORMAT_REGEX, '$1-$2-$3')
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
      {isLoading ? (
        <Loading color={'#666666'} />
      ) : (
        <>
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
        </>
      )}
    </div>
  )
}
