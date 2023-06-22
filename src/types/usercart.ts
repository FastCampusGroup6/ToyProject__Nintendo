//장바구니 타입
//Product + User가 각 객체로 들어가는 타입임.
import { Product } from './product'
import { User } from './user'

export type UserCart = UserCartItem[]

export type UserCartItem = Product & User
