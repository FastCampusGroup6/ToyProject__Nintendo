import React, { useEffect } from 'react'
import styles from './ShoppingCart.module.scss'
import CartItem from './CartItem'
import { useLocation } from 'react-router-dom'
import { User } from '@/types/user'
import { UserCartItem } from '@/types/usercart'
import { matchedUserCartState } from '@/recoil/common/matchedUserCartState'
import { useRecoilState } from 'recoil'

interface Props {
  getTotalValue?: (value: number) => void
  user: User
}
// localStorage에
// 'cart' : [{},{}, {}, {}]' 이런 형태로 들어간다.
// 각 객체에는 User + Product 타입이 들어간다.
// 따라서 카트에 들어가는 객체는 Products타입이 아니라, User & Product의 유니온 타입이다.
// 이 객체 타입을 지정해야함.
export default function ShoppingCart({ getTotalValue, user }: Props) {
  const currentLocation = useLocation()
  const userName = user.displayName
  const [matchedUserCart, setMatchedUserCart] = useRecoilState(matchedUserCartState)
  const cart = JSON.parse(localStorage.getItem('cart') || '[]')

  //카트아이템 지우기
  const handleRemoveCartItem = (index: number) => {
    const updatedCart = [...cart]
    updatedCart.splice(index, 1)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
    setMatchedUserCart(updatedCart.filter((item: UserCartItem) => item.email === user.email))
  }

  useEffect(() => {
    const encodedUserName = encodeURIComponent(userName)
    const targetPathname = `/payment/${encodedUserName}/checkInfo`

    if (getTotalValue && currentLocation.pathname === targetPathname) {
      const total = matchedUserCart.reduce((acc: number, item: UserCartItem) => acc + item.price, 0)
      getTotalValue(total)
    }
  }, [matchedUserCart, currentLocation.pathname, userName])

  return (
    <div className={styles.container}>
      <div className={styles.cart_header}>
        <span className={styles.title}>상품</span>
        <span className={styles.qty}>수량</span>
        <span className={styles.price}>가격</span>
      </div>
      <div className="cart-container">
        <ul className={styles.cartList}>
          {matchedUserCart.length > 0 ? (
            matchedUserCart.map((item: UserCartItem, index: number) => (
              <CartItem key={index} item={item} onRemove={() => handleRemoveCartItem(index)} />
            ))
          ) : (
            <div> 장바구니에 담긴 물건이 없습니다! </div>
          )}
        </ul>
      </div>
    </div>
  )
}
