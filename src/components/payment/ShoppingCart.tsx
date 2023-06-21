import React, { useEffect, useState } from 'react'
import styles from './ShoppingCart.module.scss'
import CartItem from './CartItem'
import { Products, Product } from '@/types/product'
import { useLocation } from 'react-router-dom'

interface Props {
  getTotalValue?: (value: number) => void
}

export default function ShoppingCart({ getTotalValue }: Props) {
  const [cart, setCart] = useState<Products>([])

  const currentLocation = useLocation()
  const userName = useLocation().pathname.split('/')[2]

  //카트아이템 지우기
  const handleRemoveCartItem = (index: number) => {
    const updatedCart = [...cart]
    updatedCart.splice(index, 1)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
    setCart(updatedCart)
  }

  //랜딩 시 장바구니 저장
  //dummy라서 현재 라우터위치에서 저장함.
  //실제 api연동 후에는, 제품상세페이지에서 장바구니 담기 시 setItem 실행, getItem으로 받아오기만 할 것.
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
          {cart.map((item: Product, index: number) => (
            <CartItem key={index} item={item} onRemove={() => handleRemoveCartItem(index)} />
          ))}
        </ul>
      </div>
    </div>
  )
}
