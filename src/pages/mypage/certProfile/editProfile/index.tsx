import React from 'react'
import styles from './index.module.scss'
import Nav from '@/components/maypage/Nav'

export default function EditProfile() {
  return (
    <>
      <div className={styles.container}>
        <Nav />
        <section className={styles.container__section}>
          <div className={styles.section__inner}>
            <div className={styles.inner__context}>
              <h1 className={styles.inner__title}>프로필 수정</h1>
              <hr className={styles.inner__line} />
            </div>
            <div className={styles.inner__content}>
              <ol className={styles.inner__content__lists}>
                <li className={styles.content__list}>
                  <label className={styles.content__label} htmlFor="displayName">
                    닉네임
                  </label>
                  <form className={styles.content__form}>
                    <input
                      id="displayName"
                      className={`${styles.inputTag} ${styles.displayName}`}
                      type="text"
                      name="displayName"
                      placeholder="displayName"
                      required
                    />
                  </form>
                </li>
                <li className={styles.content__list}>
                  <label className={styles.content__label} htmlFor="email">
                    이메일
                  </label>
                  <form className={styles.content__form}>
                    <input
                      id="email"
                      className={`${styles.inputTag} ${styles.email}`}
                      type="email"
                      name="email"
                      placeholder="{고객 이메일 데이터}"
                      disabled
                      required
                    />
                  </form>
                </li>
                <li className={styles.content__list}>
                  <label className={styles.content__label} htmlFor="password">
                    비밀 번호
                  </label>
                  <form className={styles.content__form}>
                    <input
                      id="password"
                      className={`${styles.inputTag} ${styles.password}`}
                      type="password"
                      name="password"
                      placeholder="password"
                      required
                    />
                    <div className={`${styles.spanTag} ${styles.input__error}`}>비밀번호가 올바르지 않습니다.</div>
                  </form>
                </li>
                <li className={`${styles.content__list} ${styles.uploade}`}>
                  <label className={styles.content__label} htmlFor="uploade">
                    프로필
                    <br />
                    이미지
                  </label>
                  <div className={styles.content__uploade_form}>
                    <img className={styles.content__uploade__file} src="" alt="" />
                    <div className={styles.content__upload_info}>
                      <span className={styles.upload_text}>프로필 이미지</span>
                      <div className={styles.upload_subtext}>
                        - 파일 사이즈 최대 1MB 이하
                        <br /> - 사용자 프로필 이미지(Base64) : jpg/ jpeg/ webp/ png/ gif/ svg
                        <div className={styles.input__error}>비밀번호가 올바르지 않습니다.</div>
                      </div>
                      <form className={styles.content__uploade_form}>
                        <input
                          className={`${styles.inputTag} ${styles.uploade__form}`}
                          id="uploade"
                          type="file"
                          name="file"
                          accept="image/jpeg, image/png, image/gif, image/svg+xml"
                          required
                        />
                      </form>
                    </div>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
