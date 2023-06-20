import { ProductDetail } from '@/types/product'
import { atom, selector } from 'recoil'
import { dummyProduct } from '@/pages/detail/dummyProduct'
import { v1 } from 'uuid'

export const productState = atom<ProductDetail>({
  key: 'productState' + v1(),
  default: {} as ProductDetail
})
