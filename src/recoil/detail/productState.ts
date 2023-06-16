import { ProductDetail } from '@/types/product'
import { atom, selector } from 'recoil'
import { dummyProduct } from '@/pages/detail/dummyProduct'
import { v1 } from 'uuid'

export const productState = atom<ProductDetail>({
  key: 'productState' + v1(),
  default: selector({
    key: 'productState/Default' + v1(),
    get: async () => {
      await new Promise((res) => setTimeout(res, 1000))
      return dummyProduct
    }
  })
})
