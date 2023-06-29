import api from '@/apis'
import { EditedUserInfoRequest, EditedUserInfoResponse } from '@/types/user'

//사용자 정보 수정
export async function editedUserInfo(requestBody: EditedUserInfoRequest, accessToken: string) {
  try {
    await api({
      method: 'PUT',
      url: '/api/auth/user',
      data: requestBody, //요청 데이터
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    return true
  } catch (error) {
    console.error(error)
    return false
  }
}
