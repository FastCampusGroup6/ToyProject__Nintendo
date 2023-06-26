import React, { useState } from 'react'
import styles from './index.module.scss'
import { SignInRequest } from '@/types/auth'
import { signIn } from '@/apis/access/signIn'
import { useNavigate } from 'react-router-dom'
import { emailRegex, passwordRegex } from '@/utils/constants'

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailMsg, setEmailMsg] = useState('')
  const [pwdMsg, setPwdMsg] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (emailRegex.test(email) && passwordRegex.test(password)) {
      try {
        const data: SignInRequest = {
          email,
          password
        }
        const response = await signIn(data)
        navigate('/')

        console.log('로그인 성공:', response)
      } catch (error) {
        console.error('로그인 실패:', error)
        setEmailMsg('로그인에 실패하였습니다. 다시 확인해주세요.')
        setPwdMsg('로그인에 실패하였습니다. 다시 확인해주세요.')
      }
    } else {
      setEmailMsg('로그인에 실패하였습니다. 다시 확인해주세요.')
      setPwdMsg('로그인에 실패하였습니다. 다시 확인해주세요.')
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles['subTitle']}>닌텐도 어카운트</h1>
      <div className={styles['login-group']}>
        <form onSubmit={handleSubmit} className={styles['login-form']}>
          <div className={styles['input-group']}>
            <input
              className={styles['input-info']}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              placeholder="메일 주소"
            />
            {
              <div className={emailMsg === '로그인에 실패하였습니다. 다시 확인해주세요.' ? styles.error : ''}>
                {emailMsg}
              </div>
            }
          </div>

          <div className={styles['input-group']}>
            <input
              className={styles['input-info']}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              placeholder="암호"
            />
            {
              <div className={pwdMsg === '로그인에 실패하였습니다. 다시 확인해주세요.' ? styles.error : ''}>
                {pwdMsg}
              </div>
            }
          </div>

          <div className={styles['submit-group']}>
            <p className={styles['forgetLink']}>
              <a className={styles['loginLink']} href="/access/passwordcheck">
                <span>비밀번호 변경</span>
              </a>
            </p>
            <div className={styles['login-btn-group']}>
              <button
                type="submit"
                value="SignIn"
                className={styles['login-btn']}
                disabled={!emailRegex.test(email) || !passwordRegex.test(password)}
              >
                로그인
              </button>
            </div>
          </div>
        </form>
        <div className={styles['signup']}>
          <p className={styles['noneLink']}>어카운트가 없는 분은</p>
          <a className={styles['loginLink']} href="/access/agesignup">
            <button className={styles['signup-btn']}>신규 작성</button>
          </a>
        </div>
      </div>
    </div>
  )
}
