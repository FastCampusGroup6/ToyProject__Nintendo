import api from '@/apis'
import { AccountConnectionRequest } from '@/types/account'

// 선택가능한 계좌목록 조회(계좌연결 전에)
export const getSelectableAccounts = async (accessToken: string) => {
  const response = await api({
    method: 'GET',
    url: '/api/account/banks',
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })
  return response.data
}

// 연결된 계좌 조회
export const getConnectedAccounts = async (accessToken: string) => {
  const response = await api({
    method: 'GET',
    url: '/api/account',
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })
  return response.data
}

// 계좌 연결하기
export const postConnectAccount = async (accessToken: string, requestBody: AccountConnectionRequest) => {
  const response = await api({
    method: 'POST',
    url: '/api/account',
    headers: {
      Authorization: `Bearer ${accessToken}`
    },
    data: requestBody
  })
  return response.data
}
