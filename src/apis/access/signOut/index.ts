import api from '@/apis'

export async function signOut(accessToken: string): Promise<boolean> {
  try {
    const response = await api({
      method: 'POST',
      url: '/api/auth/logout',
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    return response.data as boolean
  } catch (error) {
    console.error(error)
    return false
  }
}
