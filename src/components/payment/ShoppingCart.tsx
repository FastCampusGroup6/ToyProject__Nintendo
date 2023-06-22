import React, { useEffect, useState } from 'react'
import styles from './ShoppingCart.module.scss'
import CartItem from './CartItem'
import { useLocation } from 'react-router-dom'
import { User } from '@/types/user'
import { UserCart, UserCartItem } from '@/types/usercart'

interface Props {
  getTotalValue?: (value: number) => void
  user?: User
}
// localStorage에
// 'cart' : [{},{}, {}, {}]' 이런 형태로 들어간다.
// 각 객체에는 User + Product 타입이 들어간다.
// 따라서 카트에 들어가는 객체는 Products타입이 아니라, User & Product의 유니온 타입이다.
// 이 객체 타입을 지정해야함.
export default function ShoppingCart({ getTotalValue, user }: Props) {
  const [cart, setCart] = useState<UserCart>([])
  const currentLocation = useLocation()
  const userName = user?.displayName
  const userEmail = user?.email

  //카트아이템 지우기
  const handleRemoveCartItem = (index: number) => {
    const updatedCart = [...cart]
    updatedCart.splice(index, 1)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
    setCart(updatedCart)
  }

  //랜딩 시 장바구니 저장
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart') || '[]'))
  }, [])

  useEffect(() => {
    if (getTotalValue && currentLocation.pathname === `/payment/${userName}/checkInfo`) {
      const total = cart.reduce((acc: number, item: UserCartItem) => acc + item.price, 0)
      getTotalValue(total)
    }
  }, [cart, currentLocation.pathname, getTotalValue])

  return (
    <div className={styles.container}>
      <div className={styles.cart_header}>
        <span className={styles.title}>상품</span>
        <span className={styles.qty}>수량</span>
        <span className={styles.price}>가격</span>
      </div>
      <div className="cart-container">
        <ul className={styles.cartList}>
          {/* 만약 userCart의 email과, 리코일의 user.email(props로 받아옴)이 다르다면? user.email과 일치하는 userCartItem을 출력한다. */}
          {cart.length > 0 ? (
            cart
              .filter((item: UserCartItem) => item.email === userEmail)
              .map((item: UserCartItem, index: number) => (
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
