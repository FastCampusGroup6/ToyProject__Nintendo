import React, { useState } from 'react'
import styles from './index.module.scss'
import PayProcessFlow from '@/components/payment/PayProcessFlow'
import ShoppingCart from '@/components/payment/ShoppingCart'
import Btn from '@/components/payment/Btn'
import { useRecoilValue } from 'recoil'
import { userState } from '@/recoil/common/userState'

export default function CheckInfo() {
  const [totalValue, setTotalValue] = useState(0)
  const user = useRecoilValue(userState)
  //recoilState로 대체하기 ✔
  // localStorage에 저장된 accessToken으로 User정보 fetch? (types : User) ✔
  // Recoil로 상태관리가 되고 있으면 헤더에서 fetch된 state를 갖다쓰면 되는가?! ✔

  const getTotalValue = (value: number) => {
    setTotalValue(value)
  }

  return (
    <>
      <PayProcessFlow />
      <div className={styles.orderer}>
        <div className={styles.orderInfo}>주문자 정보</div>
        <div className={styles.info}>
          <div>
            <div className={styles.title}>
              <span>주문자</span>
            </div>
            <div className={styles.title}>
              <span>이메일</span>
            </div>
          </div>
          <div>
            <div className={styles.content}>
              <span>{user.displayName}</span>
            </div>
            <div className={styles.content}>
              <span>{user.email}</span>
            </div>
          </div>
        </div>
      </div>
      <ShoppingCart getTotalValue={getTotalValue} user={user} />
      <div className={styles.totals}>
        <div className={styles.mark}>
          <span>합계</span>
        </div>
        <div className={styles.price}>
          <span>{`₩ ${totalValue.toLocaleString()}`}</span>
        </div>
      </div>
      <Btn text="확인" targetURL={`/payment/${user.displayName}/payMethod`} />
    </>
  )
}
