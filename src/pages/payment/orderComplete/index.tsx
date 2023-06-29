import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import PayProcessFlow from '@/components/payment/PayProcessFlow'
import Btn from '@/components/payment/Btn'
import { UserTransactionDetails } from '@/types/product'
import { getTransactionDetails } from '@/apis/payment/product'
import Loading from '@/components/payment/Loading'
import useUserInfo from '@/hooks/useUserInfo'
import useCartItems from '@/hooks/useCartItems'

export default function OrderComplete() {
  const [transactionDetails, setTransactionDetails] = useState<UserTransactionDetails>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const accessToken = localStorage.getItem('token') || ''
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [userInfo, _isLoggedIn, _logout] = useUserInfo()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cartItems, _addcartItems, removeCartItemsByUser, _removeOneCartItemByUser] = useCartItems(userInfo)

  useEffect(() => {
    // 랜딩 시 details 저장
    matchedTransactionDetails().then(() => {
      removeCartItemsByUser(userInfo)
    })
  }, [userInfo])

  const matchedTransactionDetails = async (): Promise<void> => {
    // 제품 전체 거래(구매) 내역 API 호출
    try {
      setIsLoading(true)
      const transactionDetails: UserTransactionDetails = await getTransactionDetails(accessToken)
      // 장바구니에 있는 제품과 비교하여 매칭된 거래 내역 필터링
      const matchedDetails: UserTransactionDetails = []
      // const matchedDetails = transactionDetails.filter((detail) =>
      //   cartItems.some((item) => item.id === detail.product.productId)
      // )
      cartItems.forEach((item) => {
        const matchingDetail = transactionDetails.filter((detail) => item.id === detail.product.productId).shift()
        if (matchingDetail) {
          matchedDetails.push(matchingDetail)
        }
      })
      setTransactionDetails(matchedDetails)
      setIsLoading(false)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <PayProcessFlow />
      {isLoading ? (
        <Loading color={'#666666'} />
      ) : (
        <div className={styles.orderer}>
          <div className={styles.orderInfo}>주문 완료</div>
          {transactionDetails.map((detail, index) => (
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
      )}
      <div className={styles.btnContainer}>
        <Btn text="계속 쇼핑하기" targetURL="/" />
        <Btn text="주문내역 확인하기" targetURL={`/user/${userInfo.displayName}/getItemAll`} />
      </div>
    </>
  )
}
