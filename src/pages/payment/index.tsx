import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import PayProcessFlow from '@/components/payment/PayProcessFlow'
import ShoppingCart from '@/components/payment/ShoppingCart'
import Btn from '@/components/payment/Btn'
import { userState } from '@/recoil/common/userState'
import { useRecoilValue } from 'recoil'
import { UserCart, UserCartItem } from '@/types/usercart'

export default function Payment() {
  const [btnActive, setBtnActive] = useState(false)

  const user = useRecoilValue(userState)
  const username = user.displayName
  const userCart: UserCart = JSON.parse(localStorage.getItem('cart') || '[]')
  const matchedUserCart = userCart.filter((item: UserCartItem) => item.email === user.email)
  useEffect(() => {
    if (matchedUserCart.length === 0) {
      setBtnActive(true)
    }
  }, [matchedUserCart])

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <PayProcessFlow />
        <div className={styles.inner}>
          <ShoppingCart user={user} />
          <div className={styles.notice}>
            <p className={styles.noticeP}>
              <span className={styles.strong}>구매하신 닌텐도 어카운트</span>로 귀속되며 즉시 다운로드 받으십쇼
            </p>
            <p className={styles.noticeP}>
              다운로드 번호는 전송되지 않으며
              <span className={styles.strong}>[지금 다운로드] 후에는 환불이 가능해야하는데</span> 왜 안될까요?
            </p>
            <p className={styles.noticeP}>
              <span className={styles.strong}>실물 상품의 경우</span> 우리 집으로 배송 보내주셨으면 좋겠습니다.
            </p>
            <p className={styles.noticeP}>🙌 예&#41; 서울특별시 강남구 지하벙커 305호 탐정사무소</p>
          </div>
          <Btn text="확인" targetURL={`/payment/${username}/agreement`} active={btnActive} />
        </div>
      </div>
    </div>
  )
}
