import api from '@/apis'
import { SignUpRequest, SignUpResponse } from '@/types/auth'

export async function signUp(query: SignUpRequest): Promise<SignUpResponse> {
  const response = await api({
    method: 'POST',
    url: '/api/auth/signup',
    data: query
  })
  const accessToken = response.data.accessToken
  localStorage.setItem('token', accessToken)
  return response.data
}
