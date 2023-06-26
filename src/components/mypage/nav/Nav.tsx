import React, { useState, useEffect } from 'react'
import styles from './Nav.module.scss'
// import { User } from '@/types/user'
import { Link } from 'react-router-dom'
import { getAuthenticatedUser } from '@/apis/payment/access'
import { useRecoilState } from 'recoil'
import { userState } from '@/recoil/common/userState'

export default function Nav() {
  // const [isLogined, setIsLogined] = useState(false)
  const [userInfo, setUserInfo] = useRecoilState(userState)
  const [modify, setModify] = useState(true)

  
  const navConvert = () => {
    setModify((prevModify) => !prevModify)
  }

  return (
    <nav className={styles.sideNav}>
      <div className={`${styles.nav} ${styles.container}`}>
        <img className={styles.profileImg} src={userInfo.profileImg} alt="" />
        <div className={styles.textBox}>
          <h3 className={styles.displayName}>{userInfo.displayName}</h3>
          <span>{userInfo.email}</span>
        </div>
        <Link
          className={styles.aTag}
          to={modify ? '/user/:username/certProfile' : '/user/:username'}
          onClick={navConvert}
        >
          {modify ? '정보 수정' : '수정 완료'}
        </Link>
      </div>
    </nav>
  )
}
