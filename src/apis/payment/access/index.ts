import api from '@/apis'

export const getAuthenticatedUser = async (accessToken: string) => {
  const response = await api({
    method: 'POST',
    url: '/api/auth/me',
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })
  return response.data
}
