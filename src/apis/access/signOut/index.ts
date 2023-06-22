import api from '@/apis'

export async function signOut(accessToken: string) {
  const response = await api({
    method: 'POST',
    url: '/api/auth/logout',
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })

  localStorage.removeItem('token')

  return response.data
}
