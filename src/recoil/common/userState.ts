import { User } from '@/types/user'
import { atom } from 'recoil'
import { v1 } from 'uuid'

export const userState = atom<User>({
  key: 'userState' + v1(),
  default: {} as User
})
