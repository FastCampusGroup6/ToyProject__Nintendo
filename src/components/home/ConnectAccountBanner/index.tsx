import React from 'react'
import styles from './index.module.scss'
import useUserInfo from '@/hooks/useUserInfo'

export default function ConnectAccountBanner() {
  const [userInfo] = useUserInfo()
  return (
    <div className={styles.container}>
      <p className={styles.title}>Sumtendo Switch</p>
      <a className={styles.link} href={`/user/${userInfo.displayName}/account/addAccount`}>
        <p>{'숨텐도 계좌 연결하기 >'}</p>
      </a>
    </div>
  )
}
