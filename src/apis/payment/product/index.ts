import api from '@/apis'
import { TransactionReservationRequest } from '@/types/product'

export const postBuyProduct = async (accessToken: string, requestBody: TransactionReservationRequest) => {
  const response = await api({
    method: 'POST',
    url: '/api/products/buy',
    headers: {
      Authorization: `Bearer ${accessToken}`
    },
    data: requestBody
  })
  return response.data
}
