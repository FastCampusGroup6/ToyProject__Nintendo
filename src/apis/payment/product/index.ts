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

export const getTransactionDetails = async (accessToken: string) => {
  const response = await api({
    method: 'GET',
    url: '/api/products/transactions/details',
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })
  return response.data
}
