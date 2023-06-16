import React from 'react'
import styles from './index.module.scss'
import { Link } from 'react-router-dom'

export default function MainHeader() {
  // todo : user정보를 localstorage에서 가져와서 recoil로 관리해야 링크를 만들 수 있음
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
                <img src="/images/home/hardware.svg" alt="hardware icon" />
                <p>베스트 상품 보기</p>
              </div>
            </Link>
          </li>
          <li>베스트 상품 보기</li>
        </ul>
        <ul className={styles.userMenu}>
          <li className={styles.mypage}>
            <Link to="/user/test/">
              <div className={styles.item}>
                <img src="/images/home/hardware.svg" alt="hardware icon" />
                <p>마이 페이지</p>
              </div>
            </Link>
          </li>
          <li className={styles.login}>
            <Link to="/access/login">
              <div className={styles.item}>
                <img src="/images/home/hardware.svg" alt="hardware icon" />
                <p>로그인 하기</p>
              </div>
            </Link>
          </li>
          <li className={styles.search}>
            <Link to="/search">
              <div className={styles.item}>
                <img src="/images/search/search_icon.svg" alt="search icon" />
                <p>검색하기</p>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
