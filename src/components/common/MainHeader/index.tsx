import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import HeaderSearchBar from '../HeaderSearchBar'
import styles from './index.module.scss'
import useUserInfo from '@/hooks/useUserInfo'

export default function MainHeader() {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const [userInfo, isLoggedIn, logout] = useUserInfo()

  function handleSearchBtn() {
    setIsOpen(!isOpen)
  }
  function navigateSearchPage(searchText: string) {
    navigate(`/search?search=${searchText}`)
    setIsOpen(false)
  }

  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <Link to="/">Sumtendo</Link>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.productMenu}>
          <li>
            <Link to="/search">
              <div className={styles.item}>
                <img src="/images/home/store_icon.svg" alt="home icon" />
                <p>전체 상품 보기</p>
              </div>
            </Link>
          </li>
        </ul>
        <ul className={styles.userMenu}>
          {isLoggedIn && (
            <li className={styles.mypage}>
              <Link to="/user/test/">
                <div className={styles.item}>
                  <img src="/images/home/mypage_icon.svg" alt="mypage icon" />
                  <p>마이 페이지</p>
                </div>
              </Link>
            </li>
          )}
          <li className={styles.login}>
            {isLoggedIn ? (
              <div className={styles.item} onClick={logout}>
                <img src="/images/home/hardware.svg" alt="hardware icon" />
                <p>로그 아웃</p>
              </div>
            ) : (
              <Link to="/access/login">
                <div className={styles.item}>
                  <img src="/images/home/hardware.svg" alt="hardware icon" />
                  <p>로그인</p>
                </div>
              </Link>
            )}
          </li>
          <li className={`${styles.search} ${isOpen ? styles.focus : ''}`}>
            <div className={styles.item} onClick={handleSearchBtn}>
              <img src="/images/search/search_icon.svg" alt="search icon" />
              <p>검색하기</p>
            </div>
          </li>
        </ul>
      </nav>
      <HeaderSearchBar isOpen={isOpen} onSearch={navigateSearchPage} />
    </header>
  )
}
