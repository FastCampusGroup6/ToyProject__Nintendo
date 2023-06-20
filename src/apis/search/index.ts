import api from '@/apis'
import { SearchProductsRequest } from '@/types/product'
export async function searchProducts(query: SearchProductsRequest) {
  const response = await api({
    method: 'POST',
    url: '/api/products/search',
    data: query
  })

  return response.data
}
