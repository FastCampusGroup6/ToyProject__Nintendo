import { ProductDetail } from '@/types/product'
import { atom } from 'recoil'
import { v1 } from 'uuid'

export const productState = atom<ProductDetail>({
  key: 'productState' + v1(),
  default: {} as ProductDetail
})
