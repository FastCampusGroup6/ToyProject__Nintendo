import React, { useState, useEffect, ChangeEvent } from 'react'
import styles from './index.module.scss'
import { editedUserInfo } from '@/apis/user/editedUserInfo'
import { passwordRegex } from '@/utils/constants'

export default function PasswordChangeForm() {
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [accessToken, setAccessToken] = useState('')

  useEffect(() => {
    const AccessToken = localStorage.getItem('token')
    if (AccessToken) {
      setAccessToken(AccessToken)
    }
  }, [])

  const handleOldPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setOldPassword(event.target.value)
  }

  const handleNewPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewPassword(event.target.value)
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    try {
      // API 호출
      await editedUserInfo({ oldPassword, newPassword }, accessToken)

      // 비밀번호 변경 성공 시 처리
      setOldPassword('')
      setNewPassword('')
      alert('비밀번호가 변경되었습니다.')
    } catch (error) {
      // 비밀번호 변경 실패 시 처리
      alert('비밀번호 변경에 실패했습니다. 다시 시도해주세요.')
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles['subTitle']}>닌텐도 어카운트</h1>
      <div className={styles['password-group']}>
        <h1 className={styles['subTitle']}>비밀번호 재설정</h1>
        <form className={styles['password-form']} onSubmit={handleSubmit}>
          <div className={styles['input-group']}>
            <input
              className={styles['input-text']}
              type="password"
              name="password"
              placeholder="기존 비밀번호"
              value={oldPassword}
              onChange={handleOldPasswordChange}
            />
          </div>

          <div className={styles['input-group']}>
            <input
              className={styles['input-text']}
              type="password"
              name="password"
              placeholder="새로운 비밀번호: 영문과 숫자를 혼합한 8자 이상 20자 미만"
              value={newPassword}
              onChange={handleNewPasswordChange}
            />
          </div>

          <div>
            <div className={styles['submit-group']}>
              <button
                className={styles['submit-btn']}
                onClick={handleSubmit}
                disabled={!passwordRegex.test(oldPassword) || !passwordRegex.test(newPassword)}
              >
                확인
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
