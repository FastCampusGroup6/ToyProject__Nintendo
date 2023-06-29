import React, { useState } from 'react'
import styles from './index.module.scss'
import { Product, ProductDetail } from '@/types/product'
import { useNavigate } from 'react-router-dom'

import useUserInfo from '@/hooks/useUserInfo'
import useCartItems from '@/hooks/useCartItems'

type Props = {
  product: ProductDetail
}
export default function Infomation({ product }: Props) {
  const navigate = useNavigate()
  const [checked, setChecked] = useState(false)
  const [userInfo, isLoggedIn] = useUserInfo()
  const [_cartItems, addCartItems, _remoteCartItemsByUser] = useCartItems(userInfo)
  const price = product.price?.toLocaleString('ko-KR', { style: 'currency', currency: 'KRW' })

  function setCheckBox() {
    setChecked(!checked)
  }

  async function buyProduct() {
    if (!isLoggedIn) {
      alert('로그인이 필요합니다.')
      navigate('/access')
      return
    }

    if (!userInfo) {
      alert('잘못된 접근입니다.')
      navigate('/')
      return
    }

    const { reservations, ...restPropduct } = product
    addCartItems([
      {
        ...userInfo,
        ...restPropduct
      }
    ])
    navigate(`/payment/${encodeURIComponent(userInfo.displayName)}`)
  }

  return (
    <div className={styles.container}>
      <div className={styles.priceCover}>
        <div className={styles.price}>{price}</div>
      </div>
      <div className={styles.contactCover}>
        <input className={styles.checkbox} type="checkbox" checked={checked} onChange={setCheckBox} />
        <ul onClick={setCheckBox}>
          <li>
            <span>
              <span className={styles.underline}>다운로드 구입</span>에 관한 주의 사항을 확인했습니다. (다운로드 상품은
              실물로 배송되지 않는 상품입니다.
            </span>
          </li>
          <li>
            Nintendo Switch 소프트웨어를 다운로드하기 위해서는 국가/지역이 <strong>대한민국인 18세 이상</strong>의
            [닌텐도 어카운트] 가 필요합니다.
          </li>
          <li>
            <strong>다운로드 상품의 경우 구매하신 닌텐도 어카운트</strong>로 [지금 다운로드]를 클릭하면 해당 콘텐츠가
            구매하신 닌텐도 어카운트로 다운로드됩니다.
            <strong>다운로드 번호로는 전송되지 않으며, [지금 다운로드] 후에는 환불이 불가능합니다.</strong>
          </li>
          <li>
            <strong>
              해당 페이지에서 구입하신 다운로드 상품은 <span className={styles.underline}>양도가 불가</span>하며,
              구입하신 계정에서만 사용이 가능합니다.
            </strong>
          </li>
        </ul>
        <div className={styles.btnCover}>
          <button type="button" className={styles.downloadBtn} disabled={!checked} onClick={buyProduct}>
            다운로드 상품 구매
          </button>
        </div>
      </div>
    </div>
  )
}
1
