import api from '@/apis'
import { SignInRequest, SignInResponse } from '@/types/auth'

export async function signIn(query: SignInRequest): Promise<SignInResponse> {
  const response = await api({
    method: 'POST',
    url: '/api/auth/login',
    data: query
  })
  const accessToken = response.data.accessToken
  localStorage.setItem('token', accessToken)

  console.log('로그인 성공:', response.data)
  return response.data
}
