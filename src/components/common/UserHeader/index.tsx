import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import { Link, useLocation } from 'react-router-dom'
import { getAuthenticatedUser } from '@/apis/payment/access'
import { useRecoilState } from 'recoil'
import { userState } from '@/recoil/common/userState'

export default function UserHeader() {
  const [currentTitle, setCurrentTitle] = useState('')
  const currentLocation = useLocation().pathname
  const [cartItemCount, setCartItemCount] = useState(0)
  const [isUserClicked, setIsUserClicked] = useState(false)
  const [isLogined, setIsLogined] = useState(false)
  const [userInfo, setUserInfo] = useRecoilState(userState)

  // 1. localStorage에서 token 받아오기
  const accessToken = localStorage.getItem('token') || ''

  useEffect(() => {
    if (accessToken) {
      setIsLogined(true)
    } else {
      setIsLogined(false)
    }
  }, [accessToken])

  const fetchUserInfo = async () => {
    if (!isLogined) return
    // api 호출함수 authenticate(accessToken) 호출
    if (isLogined) {
      try {
        console.log('로딩중..')
        const userData = await getAuthenticatedUser(accessToken)
        console.log(userData)
        return setUserInfo(userData)
      } catch (error) {
        console.error(error, 'fetchUserInfo 오류1')
      }
    }
  }

  // currentLocation == 라우터 주소. 변경 시 마다 발생할 일들
  useEffect(() => {
    if (currentLocation.includes('payment')) setCurrentTitle('결제')
    if (currentLocation.includes('user')) setCurrentTitle('마이페이지')
    if (currentLocation.includes('access')) setCurrentTitle('인증')
    setCartItemCount(JSON.parse(localStorage.getItem('cart') || '[]').length)
    setIsUserClicked(false)
    if (isLogined) {
      fetchUserInfo()
    }
  }, [isLogined, currentLocation])

  const handleUserClick = () => {
    setIsUserClicked(!isUserClicked)
  }

  return (
    <div className={styles.container}>
      <div className={styles.header_Logo}>
        <Link to="/search">
          <span className={styles.header_Logo_img}>
            <img className={styles.logoImg} src={`${process.env.PUBLIC_URL}/images/Logo.svg`} alt="" />
          </span>
        </Link>
      </div>
      <div className={styles.header}>
        <div className={styles.titles}>
          <div className={styles.mainTitle}>숨텐도</div>
          <div className={styles.subTitle}>{currentTitle}</div>
          {isLogined && (
            <div className={styles.userInfo}>
              <div className={styles.userPage} onClick={handleUserClick}>
                <div className={styles.userImg}>
                  <img
                    className={styles.img}
                    src={
                      userInfo.profileImg ? userInfo.profileImg : `${process.env.PUBLIC_URL}/images/person-circle.svg`
                    }
                    alt="profileImg"
                  />
                </div>
                <div className={styles.userName}>{userInfo.displayName}</div>
                <ul className={styles.userNavList} style={{ display: isUserClicked ? 'block' : 'none' }}>
                  <Link to={`/user/${userInfo.displayName}`} style={{ textDecoration: 'none' }}>
                    <li className={styles.userNav}>
                      <span className={styles.userNavSpan}>마이페이지</span>
                    </li>
                  </Link>
                  <Link to={'/access/logout'} style={{ textDecoration: 'none' }}>
                    <li className={styles.userNav}>
                      <span className={styles.userNavSpan}>로그아웃</span>
                    </li>
                  </Link>
                </ul>
              </div>
              <div
                className={styles.shoppingCart}
                style={cartItemCount === 0 ? { display: 'none' } : { display: 'block' }}
              >
                <Link className={styles.link} to={`/payment/${userInfo.displayName}`}>
                  <span className={styles.icon}>
                    <img
                      className={styles.iconImg}
                      src={`${process.env.PUBLIC_URL}/images/shopping_cart_icon.svg`}
                      alt=""
                    />
                  </span>
                  <span className={styles.count}>{`(${cartItemCount})`}</span>
                </Link>
              </div>
            </div>
          )}
          {!isLogined && (
            <div>
              <Link to="/access/login" className={styles.logInLink}>
                <span>로그인하기</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
