import React from 'react'
import styles from './index.module.scss'
import Nav from '@/components/maypage/Nav'
import { Link } from 'react-router-dom'

export default function CertProfile() {
  return (
    <>
      <div className={styles.container}>
        <Nav />
        <section className={styles.container__section}>
          <div className={styles.section__inner}>
            <div className={styles.inner__context}>
              <h1 className={styles.inner__title}>개인 정보 수정</h1>
              <hr className={styles.inner__line} />
              <label className={styles.inner__label} htmlFor="password">
                비밀번호 재확인
              </label>
              <div className={styles.inner__text}>
                회원님의 정보를 안전하게 보호하기 위해 비밀번호를 다시 한번 확인해주세요.
              </div>
            </div>
            <form className={styles.inner__content}>
              <input
                id="password"
                className={`${styles.inputTag} ${styles.inner__input}`}
                type="password"
                name="password"
                max="19"
                placeholder="비밀번호를 입력하세요"
                required
              />
              <span className={`${styles.spanTag} ${styles.input__error}`}>비밀번호가 올바르지 않습니다.</span>
              <Link to="/user/:username/certProfile/editProfile">
                <button className={`${styles.btnTag} ${styles.input__accept}`}>확인</button>
              </Link>
            </form>
          </div>
        </section>
      </div>
    </>
  )
}
