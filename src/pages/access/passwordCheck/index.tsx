import React, { useState } from 'react'
import styles from './index.module.scss'
import { SignInResponse } from '@/types/auth'

export default function PasswordCheck() {
  const [email, setEmail] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [isMatched, setIsMatched] = useState(false)

  const dummyEmailRequest: SignInResponse = {
    user: {
      email: 'example@example.com',
      displayName: 'John Doe',
      profileImg: null
    },
    accessToken: 'dummyAccessToken'
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    if (email === dummyEmailRequest.user.email && displayName === dummyEmailRequest.user.displayName) {
      setIsMatched(true)
      window.location.href = '/access/passwordchangeform'
    } else {
      setIsMatched(false)
      console.log('입력한 값이 틀렸습니다.')
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles['subTitle']}>닌텐도 어카운트</h1>
      <div className={styles['passwordChange-group']}>
        <h1 className={styles['subTitle']}>비밀번호 재설정</h1>
        <form className={styles['passwordForm']} onSubmit={handleSubmit}>
          <div className={styles['inputForm']}>
            <input
              className={styles['input-text']}
              type="email"
              name="email"
              value={email}
              placeholder="메일 주소/로그인 ID"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={styles['inputForm']}>
            <input
              className={styles['input-text']}
              type="text"
              name="displayName"
              value={displayName}
              placeholder="닉네임"
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </div>

          <div>
            <div className={styles['changeCheck-btn']}>
              <button type="submit" className={styles['submit-btn']}>
                확인
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
