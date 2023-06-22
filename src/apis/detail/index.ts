import api from '@/apis'
import { ProductDetail } from '@/types/product'

export async function getProduct(productId: ProductDetail['id']) {
  const response = await api({
    method: 'GET',
    url: `/api/products/${productId}`
  })
  return response.data
}
