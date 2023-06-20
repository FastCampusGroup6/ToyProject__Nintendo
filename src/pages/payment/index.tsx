import React from 'react'
import styles from './index.module.scss'
import PayProcessFlow from '@/components/payment/PayProcessFlow'
import ShoppingCart from '@/components/payment/ShoppingCart'
import Btn from '@/components/payment/Btn'
import dummyUser from '@/pages/payment/dummyUser.json'
import dummyGoods1 from '@/pages/payment/dummyGoods1.json'
import dummyGoods2 from '@/pages/payment/dummyGoods2.json'

export default function Payment() {
  //dummyLoginedUser
  //여기서 api 인증확인 한번 후 props로 데이터전달?
  const username = dummyUser.user.displayName
  localStorage.setItem('accessToken', dummyUser.accessToken)
  localStorage.setItem('cart', JSON.stringify([dummyGoods1, dummyGoods2]))

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <PayProcessFlow />
        <div className={styles.inner}>
          <ShoppingCart />
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
          <Btn text="확인" targetURL={`/payment/${username}/agreement`} />
        </div>
      </div>
    </div>
  )
}
