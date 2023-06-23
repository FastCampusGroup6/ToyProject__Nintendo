import React, { useState } from 'react'
import styles from './index.module.scss'
import Nav from '@/components/mypage/nav/Nav'
import GetList from '@/components/mypage/productList/GetList'
import JjimList from '@/components/mypage/productList/JjimList'
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { userState } from '@/recoil/common/userState'

// userInfo는 제가 맘대로 지정해놓은 것이고, 원하는 변수명으로 사용하시면 됩니다!

export default function MyPage() {
  const [userInfo, setUserInfo] = useRecoilState(userState)
  const [visible, setVisible] = useState(true)
  const handleVisible = () => {
    setVisible(!visible)
  }

  return (
    <>
      <div className={styles.container}>
        <Nav />
        <section className={styles.section}>
          {visible && (
            <div className={styles.inner}>
              <ul className={styles.mainLists}>
                <li className={`${styles.listTitle} ${styles.account}`}>
                  계좌
                  <div className={styles.listText}>
                    <Link className={`${styles.aTag} ${styles.listLink}`} to={`/user/:username/account`}>
                      계좌조회
                    </Link>
                    <Link className={`${styles.aTag} ${styles.listLink}`} to={`/user/:username/account/addAccount`}>
                      계좌추가
                    </Link>
                  </div>
                </li>
                <li className={`${styles.listTitle} ${styles.checkInfo}`}>
                  장바구니
                  <button className={`${styles.btn} ${styles.listText}`}>
                    <Link className={`${styles.aTag} ${styles.listLink}`} to={'/payment/:username/checkInfo'}>
                      🛒 장바구니
                    </Link>
                  </button>
                </li>
                <li className={`${styles.listTitle} ${styles.Items}`}>
                  {visible ? '찜한 상품' : '구매 내역'}
                  <div className={styles.listText}>
                    <button
                      className={`${styles.aTag} ${styles.btn} ${styles.listLink} ${styles.visible}`}
                      onClick={handleVisible}
                    >
                      {visible ? '❤️ 찜한 상품 ' : '💰 구매 내역 '}
                    </button>
                  </div>
                </li>
              </ul>
              <hr className={styles.line} />
              <GetList />
            </div>
          )}
          {!visible && (
            <div className={styles.inner}>
              <ul className={styles.mainLists}>
                <li className={`${styles.listTitle} ${styles.account}`}>
                  계좌
                  <div className={styles.listText}>
                    <Link className={`${styles.aTag} ${styles.listLink}`} to={`/user/:username/account`}>
                      계좌조회
                    </Link>
                    <Link className={`${styles.aTag} ${styles.listLink}`} to={`/user/:username/account/addAccount`}>
                      계좌추가
                    </Link>
                  </div>
                </li>
                <li className={`${styles.listTitle} ${styles.checkInfo}`}>
                  장바구니
                  <button className={`${styles.btn} ${styles.listText}`}>
                    <Link className={`${styles.aTag} ${styles.listLink}`} to={'/payment/:username/checkInfo'}>
                      🛒 장바구니
                    </Link>
                  </button>
                </li>
                <li className={`${styles.listTitle} ${styles.Items}`}>
                  {visible ? '찜한 상품' : '구매 내역'}
                  <div className={styles.listText}>
                    <button className={`${styles.aTag} ${styles.btn} ${styles.listLink}`} onClick={handleVisible}>
                      {visible ? '❤️ 찜한 상품 ' : '💰 구매 내역 '}
                    </button>
                  </div>
                </li>
              </ul>
              <hr className={styles.line} />
              <JjimList />
            </div>
          )}
        </section>
      </div>
    </>
  )
}
