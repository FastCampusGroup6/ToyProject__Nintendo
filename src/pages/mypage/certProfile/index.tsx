import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import Nav from '@/components/mypage/nav/Nav'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { userState } from '@/recoil/common/userState'
import { emailRegex } from '@/utils/constants'

export default function CertProfile() {
  // 이메일 주소가 일치하는지 여부를 추적하는 상태값
  const [confirmMsg, setConfirmMsg] = useState('')
  const [email, setEmail] = useState('')
  const navigate = useNavigate()
  const user = useRecoilValue(userState)

  // 현재 입력값에 따른 이메일 주소 일치 여부 / 유효성 확인 메세지
  const confirmEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputEmail = event.target.value
    setEmail(inputEmail)

    if (inputEmail == null) {
      setConfirmMsg('')
      return false
    } else if (!emailRegex.test(inputEmail)) {
      setConfirmMsg('이메일 주소가 올바르지 않습니다.')
      return false
    } else if (inputEmail !== user.email) {
      setConfirmMsg('이메일 주소가 일치하지 않습니다.')
      return false
    } else if (inputEmail === user.email) {
      setConfirmMsg('이메일 주소 확인')
      // 모든 유효성 검사 통과
    } else {
      setConfirmMsg('이메일 주소를 다시 확인해 주세요.')
      return false
    }
  }

  // 본인인증 확인 폼제출
  const handleSubmit = (event: React.FormEvent) => {
    console.log('폼 제출 성공:', email)
    if (email !== user.email) {
      setConfirmMsg('이메일 주소가 일치하지 않습니다.')
      return false
    }
    event.preventDefault()
    console.log('이메일 주소 확인:', email)
    navigate('/user/${user.username}/certProfile/editProfile')
  }

  return (
    <>
      <div className={styles.container}>
        <Nav />
        <section className={styles.section}>
          <div className={styles.inner}>
            <div className={styles.content}>
              <h1 className={styles.title}>개인 정보 수정</h1>
              <hr className={styles.line} />
              <label className={styles.label} htmlFor="email">
                이메일 주소 재확인
              </label>

              <div className={styles.text}>본인 확인을 위해 이메일 주소를 입력해 주세요.</div>
            </div>
            <form className={styles.inputForm} onSubmit={(event) => handleSubmit(event)}>
              <input
                id="email"
                className={`${styles.inputTag} ${styles.email}`}
                type="email"
                name="email"
                value={email}
                onChange={confirmEmail}
                placeholder="회원가입 시 사용한 이메일 주소를 입력하세요"
                autoComplete="off"
                required
              />
              {confirmMsg && (
                <div className={confirmMsg === '이메일 주소 확인' ? styles.msg : styles.error}>{confirmMsg}</div>
              )}
              <button className={`${styles.btnTag} ${styles.checkBtn}`} type="submit" value="Sign up">
                확인
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  )
}
