import api from '@/apis'
import { EditedUserInfoRequest, EditedUserInfoResponse } from '@/types/user'

//사용자 정보 수정
export async function editedUserInfo(
  data: EditedUserInfoRequest,
  accessToken: string
): Promise<EditedUserInfoResponse> {
  const response = await api({
    method: 'PUT',
    url: 'api/auth/user',
    data, //요청 데이터
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })
  return response.data //응답 데이터
}
