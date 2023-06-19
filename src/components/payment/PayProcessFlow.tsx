import React from 'react'
import { useLocation } from 'react-router-dom'
import styles from './PayProcessFlow.module.scss'

export default function PayProcessFlow() {
  const location = useLocation()
  const path = location.pathname
  const paymentPathRegex = /^\/payment\/[^/]+$/
  const agreementPathRegex = /^\/payment\/[^/]+\/agreement$/
  const checkInfoPathRegex = /^\/payment\/[^/]+\/checkInfo$/
  const payMethodPathRegex = /^\/payment\/[^/]+\/payMethod$/
  const orderCompletePathRegex = /^\/payment\/[^/]+\/orderComplete$/

  return (
    <div className={styles.container}>
      <ul className={styles.lists}>
        <li className={`${styles.process} ${paymentPathRegex.test(path) ? styles.isActive : ''}`}>
          <h3 className={styles.content}>장바구니</h3>
        </li>
        <li className={`${styles.process} ${agreementPathRegex.test(path) ? styles.isActive : ''}`}>
          <h3 className={styles.content}>약관 동의</h3>
        </li>
        <li className={`${styles.process} ${checkInfoPathRegex.test(path) ? styles.isActive : ''}`}>
          <h3 className={styles.content}>구매</h3>
        </li>
        <li className={`${styles.process} ${payMethodPathRegex.test(path) ? styles.isActive : ''}`}>
          <h3 className={styles.content}>결제</h3>
        </li>
        <li className={`${styles.process} ${orderCompletePathRegex.test(path) ? styles.isActive : ''}`}>
          <h3 className={styles.content}>주문 완료</h3>
        </li>
      </ul>
    </div>
  )
}
