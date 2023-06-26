import { useState, useEffect } from 'react'
import { User } from '@/types/user'
import { UserCart, UserCartItem } from '@/types/usercart'

type CartItemsHook = [
  userCartItems: UserCart,
  addCartItems: (cartItem: UserCart) => void,
  removeCartItemsByUser: (user: User) => void
]
type Nullable<T extends object> = { [K in keyof T]: T[K] | null }

const useCartItems = (userInfo: Nullable<User>) => {
  const [cartItems, setCartItems] = useState([] as UserCart)

  useEffect(() => {
    if (!userInfo.email || !userInfo.displayName) {
      setCartItems([] as UserCart)
      return
    }
    const carts: UserCart = JSON.parse(localStorage.getItem('cart') || '[]')
    const matchedUserCart = carts.filter((item: UserCartItem) => {
      if (item.email === userInfo.email && item.displayName === userInfo.displayName) {
        return true
      }
      return false
    })
    setCartItems(matchedUserCart)
  }, [])

  const addCartItems = (freshCartItems: UserCart) => {
    localStorage.setItem('cart', JSON.stringify([...freshCartItems, ...cartItems]))
    setCartItems([...freshCartItems, ...cartItems])
  }
  const removeCartItemsByUser = (user: User) => {
    const carts: UserCart = JSON.parse(localStorage.getItem('cart') || '[]')
    carts.forEach((cart) => {
      if (cart.email === user.email && cart.displayName === user.displayName) {
        const index = carts.indexOf(cart)
        carts.splice(index, 1)
      }
    })
    localStorage.setItem('cart', JSON.stringify(carts))
    setCartItems(carts)
  }
  const cartItemsHook: CartItemsHook = [cartItems, addCartItems, removeCartItemsByUser]
  return cartItemsHook
}

export default useCartItems
