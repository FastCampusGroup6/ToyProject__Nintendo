import React, { useEffect } from 'react'
import styles from './index.module.scss'
import PayProcessFlow from '@/components/payment/PayProcessFlow'
import Btn from '@/components/payment/Btn'
import { Product, UserTransactionDetail } from '@/types/product'
import dummyTransactionDetails from '@/pages/payment/dummyTransactionDetails.json'

export default function OrderComplete() {
  //1. 장바구니에 있던 제품을 받아와야하나?
  //2. 제품 전체 거래(구매) 내역 api 호출
  //3. 장바구니에 있는 제품이랑 비교
  //4. productId가 일치하는 제품 찾기
  //5. 그 제품의 detailId, title 가져오기(string)
  //이후 장바구니에 담겨있던 제품들을 삭제해야함.
  //버튼 누르면 마이페이지 주문내역으로 이동하기.

  const cartItems: Product[] = JSON.parse(localStorage.getItem('cart') || '[]')

  useEffect(() => {
    // 장바구니에 담겨있던 제품들을 삭제
    localStorage.setItem('cart', JSON.stringify([]))
  }, [])

  const matchedTransactionDetails = (): UserTransactionDetail[] => {
    // 제품 전체 거래(구매) 내역 API 호출 또는 dummy 데이터 사용
    const transactionDetails: UserTransactionDetail[] = dummyTransactionDetails

    // 장바구니에 있는 제품과 비교하여 매칭된 거래 내역 필터링
    const matchedDetails = transactionDetails.filter((detail) =>
      cartItems.some((item) => item.id === detail.product.productId)
    )

    return matchedDetails
  }

  return (
    <>
      <PayProcessFlow />
      <div className={styles.orderer}>
        <div className={styles.orderInfo}>주문 완료</div>
        {matchedTransactionDetails().map((detail, index) => (
          <div key={index} className={styles.info}>
            <div className={styles.titleContainer}>
              <div className={styles.title}>
                <span>주문 번호</span>
              </div>
              <div className={styles.title}>
                <span>상품명</span>
              </div>
            </div>
            <div className={styles.contentContainer}>
              <div className={styles.content}>
                <span>{detail.detailId}</span>
              </div>
              <div className={styles.content}>
                <span>{detail.product.title}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.btnContainer}>
        <Btn text="계속 쇼핑하기" targetURL="/" />
        <Btn text="주문내역 확인하기" targetURL="/user/:username" />
      </div>
    </>
  )
}
