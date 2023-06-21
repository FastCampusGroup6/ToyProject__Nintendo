import React, { useState } from 'react'
import styles from './index.module.scss'
import { ProductDetail } from '@/types/product'
import api from '@/apis'
import { useNavigate } from 'react-router-dom'
import { User } from '@/types/user'

type Props = {
  product: ProductDetail
}
export default function Infomation({ product }: Props) {
  const navigate = useNavigate()
  const [checked, setChecked] = useState(false)
  const price = product.price?.toLocaleString('ko-KR', { style: 'currency', currency: 'KRW' })

  function setCheck() {
    setChecked(!checked)
  }

  async function buyProduct() {
    const accessToken = localStorage.getItem('token')
    if (!accessToken) {
      alert('로그인이 필요합니다.')
      return
    }
    const response = await api('https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/me', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    const user: User = response.data

    if (!user) {
      alert('유저 정보를 찾을 수 없습니다.')
      return
    }
    const userCart = {
      ...user,
      ...product
    }
    const cartItems = localStorage.getItem('cart')
    const prevUserCart = cartItems ? JSON.parse(cartItems) : null
    if (!prevUserCart) {
      localStorage.setItem('cart', JSON.stringify([userCart]))
    } else {
      localStorage.setItem('cart', JSON.stringify([userCart, ...prevUserCart]))
    }
    navigate(`/payment/${encodeURIComponent(user.displayName)}`)
  }

  return (
    <div className={styles.container}>
      <div className={styles.priceCover}>
        <div className={styles.price}>{price}</div>
      </div>
      <div className={styles.contactCover}>
        <input
          className={styles.checkbox}
          type="checkbox"
          defaultChecked={checked}
          checked={checked}
          onClick={setCheck}
        />
        <ul onClick={setCheck}>
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
