import React, { useEffect } from 'react'
import styles from './ShoppingCart.module.scss'
import CartItem from './CartItem'
import dummyGoods1 from '@/pages/payment/dummyGoods1.json'
import dummyGoods2 from '@/pages/payment/dummyGoods2.json'
import { Products, Product } from '@/types/product'
import { useLocation } from 'react-router-dom'

interface Props {
  getTotalValue?: (value: number) => void
}

export default function ShoppingCart({ getTotalValue }: Props) {
  localStorage.setItem('cart', JSON.stringify([dummyGoods1, dummyGoods2]))
  const cart = JSON.parse(localStorage.getItem('cart') || '[]') as Products
  const currentLocation = useLocation()

  useEffect(() => {
    if (getTotalValue && currentLocation.pathname === '/payment/:username/checkInfo') {
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
            <CartItem key={index} item={item} />
          ))}
        </ul>
      </div>
    </div>
  )
}
