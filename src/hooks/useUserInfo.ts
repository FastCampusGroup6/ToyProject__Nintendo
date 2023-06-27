import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { userState } from '@/recoil/common/userState'
import { getAuthenticatedUser } from '@/apis/payment/access'
import { User } from '@/types/user'
import { signOut } from '@/apis/access/signOut'

type UserInfoHooks = [UserInfoHooks: User, isLoggedIn: boolean, logout: () => Promise<boolean>]

const useUserInfo = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userInfo, setUserInfo] = useRecoilState(userState)
  const location = useLocation()

  const logout = async () => {
    let isLoggedOut = !isLoggedIn
    const accessToken = localStorage.getItem('token')
    if (accessToken) isLoggedOut = await signOut(accessToken)
    localStorage.removeItem('token')
    setIsLoggedIn(false)
    setUserInfo({} as User)
    return isLoggedOut
  }

  useEffect(() => {
    const accessToken = localStorage.getItem('token')
    if (!accessToken) {
      setIsLoggedIn(false)
      setUserInfo({} as User)
      return
    }
    getAuthenticatedUser(accessToken).then((userData) => {
      setUserInfo(userData)
      setIsLoggedIn(true)
    })
  }, [location.pathname])

  const useInfoHooks: UserInfoHooks = [userInfo, isLoggedIn, logout]
  return useInfoHooks
}

export default useUserInfo
