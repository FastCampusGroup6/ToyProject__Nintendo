import api from '@/apis'
import { User, Users } from '@/types/user'

//사용자 정보 조회
export async function userList(data: Users): Promise<User[]> {
  const response = await api({
    method: 'GET',
    url: 'api/auth/users',
    data: data,
    headers: {
      masterKey: 'true'
    }
  })
  return response.data
}
