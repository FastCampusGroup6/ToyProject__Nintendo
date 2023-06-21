import React, { useEffect, useState } from 'react'
import styles from './ShoppingCart.module.scss'
import CartItem from './CartItem'
import { Products, Product } from '@/types/product'
import { useLocation } from 'react-router-dom'
import { User } from '@/types/user'

interface Props {
  getTotalValue?: (value: number) => void
  user?: User
}
// localStorage에
// 'cart' : [{},{}, {}, {}]' 이런 형태로 들어간다.
// 추가로 객체 중 하나는 User 객체다.
export default function ShoppingCart({ getTotalValue, user }: Props) {
  const [cart, setCart] = useState<Products>([])
  const currentLocation = useLocation()
  const userName = user?.displayName

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
      const total = cart.reduce((acc: number, item: Product) => acc + item.price, 0)
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
          {cart.length > 0 &&
            cart.map((item: Product, index: number) => (
              <CartItem key={index} item={item} onRemove={() => handleRemoveCartItem(index)} />
            ))}
        </ul>
      </div>
    </div>
  )
}
