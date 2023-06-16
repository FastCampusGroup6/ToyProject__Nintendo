import React from 'react'
import styles from './PossibleBank.module.scss'

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

export const getBankLogo = (bankName: string) => {
  let bankLogo = ''
  switch (bankName) {
    case 'KB국민은행':
      bankLogo = `${process.env.PUBLIC_URL}/images/banklogos/kbbank.svg`
      break
    case '신한은행':
      bankLogo = `${process.env.PUBLIC_URL}/images/banklogos/shbank.svg`
      break
    case '우리은행':
      bankLogo = `${process.env.PUBLIC_URL}/images/banklogos/wooribank.svg`
      break
    case '하나은행':
      bankLogo = `${process.env.PUBLIC_URL}/images/banklogos/hanabank.svg`
      break
    case '케이뱅크':
      bankLogo = `${process.env.PUBLIC_URL}/images/banklogos/kbank.svg`
      break
    case 'NH농협은행':
      bankLogo = `${process.env.PUBLIC_URL}/images/banklogos/nhbank.svg`
      break
    case '카카오뱅크':
      bankLogo = `${process.env.PUBLIC_URL}/images/banklogos/kakaobank.svg`
      break
  }
  return bankLogo
}
