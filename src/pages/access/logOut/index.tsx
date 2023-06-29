import React from 'react'
import styles from './index.module.scss'

import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import useUserInfo from '@/hooks/useUserInfo'

export default function LogOut() {
  const navigate = useNavigate()
  const [_, isLoggedIn, logout] = useUserInfo()

  const handleLogout = async () => {
    if (!isLoggedIn) {
      return
    }

    await logout()

    navigate('/')
  }

  return (
    <div className={styles.container}>
      <h1 className={styles['subTitle']}>로그아웃</h1>
      <div>
        <h2 className={styles['info']}>다시 로그인하려면 메일 주소 또는 로그인 ID, 암호가 필요합니다.</h2>
        <span className={styles['logout-info']}>
          메일 주소의 수신확인이 완료되지 않은 경우, 암호를 잊어버리면 닌텐도 어카운트의 암호를 재발행할 수 없습니다.
          <br />
          메일 주소의 수신확인을 완료한 후에 로그아웃해 주십시오.
        </span>
        <br />
        <div className={styles['passwordChange']}>
          <Link to="/access/passwordcheck" className={styles['passwordChangeLink']}>
            비밀번호 변경
          </Link>
        </div>

        <div className={styles['btn-group']}>
          <Link to="/">
            <button className={styles['cancel-btn']}>취소</button>
          </Link>
          <button onClick={handleLogout} className={styles['logout-btn']}>
            로그아웃
          </button>
        </div>
      </div>
    </div>
  )
}
