import React, { useState } from 'react'
import styles from './index.module.scss'
import { SignUpRequest } from '@/types/auth'

export default function SignUpForm() {
  const [email, setEmail] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [profileImage, setProfileImage] = useState('')
  const [errorMessages, setErrorMessages] = useState({
    email: '',
    displayName: '',
    password: '',
    confirmPassword: ''
  })
  // email & 비밀번호 정규식
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/

  const dummySignUpRequest: SignUpRequest = {
    email: 'example@example.com',
    password: 'password123',
    displayName: 'John Doe',
    profileImgBase64: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/...'
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (validateForm()) {
      console.log('회원가입 요청:', {
        email,
        password,
        displayName,
        profileImgBase64: dummySignUpRequest.profileImgBase64
      })
    }
  }
  //이미지 업로드
  const uploadImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files as FileList
    for (const file of files) {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.addEventListener('load', async (ev: ProgressEvent<FileReader>) => {
        setProfileImage(ev.target?.result as string)
      })
    }
  }

  //회원가입 양식 유효성 검사
  const validateForm = (): boolean => {
    const { email, password, displayName } = dummySignUpRequest
    let isValid = true
    const updatedErrorMessages = {
      email: '',
      displayName: '',
      password: '',
      confirmPassword: ''
    }

    // 이메일 유효성 검사

    if (!emailRegex.test(email)) {
      updatedErrorMessages.email = '메일 주소가 올바르지 않습니다.'
      isValid = false
    }

    // 닉네임 길이 확인
    if (displayName.length > 10) {
      updatedErrorMessages.displayName = '닉네임이 올바르지 않습니다.'
      isValid = false
    }

    // 비밀번호 길이 및 숫자와 영문 혼합 확인

    if (!passwordRegex.test(password)) {
      updatedErrorMessages.password = '비밀번호가 올바르지 않습니다.'
      isValid = false
    }

    // 비밀번호 일치 여부 확인
    if (password !== confirmPassword) {
      updatedErrorMessages.confirmPassword = '비밀번호가 일치하지 않습니다.'
      isValid = false
    }
    // 에러 메시지 업데이트
    setErrorMessages(updatedErrorMessages)
    return isValid
  }

  return (
    <div className={styles.container}>
      <h1 className={styles['subTitle']}>닌텐도 어카운트 작성</h1>
      <div className={styles['form-signup']}>
        <p className={styles['signup-info']}>회원가입을 위해 아래 정보를 입력해 주십시오.</p>
        <form onSubmit={handleSubmit}>
          <div className={styles['signup-input-group']}>
            <div className={styles['input-text']}>닉네임</div>
            <div className={styles['input-form']}>
              <input
                className={styles['input-info']}
                type="text"
                value={displayName}
                name="displayName"
                onChange={(event) => setDisplayName(event.target.value)}
                onBlur={validateForm}
                placeholder="10자 이내"
                required
              />
              {errorMessages.displayName && <div className={styles.error}>{errorMessages.displayName}</div>}
            </div>
            <button className={styles['duplicate-check']}>중복확인</button>
          </div>

          <div className={styles['signup-input-group']}>
            <div className={styles['input-text']}>메일 주소</div>
            <div className={styles['input-form']}>
              <input
                className={styles['input-info']}
                type="email"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                onBlur={validateForm}
                placeholder="메일 주소"
                required
              />
              {errorMessages.email && <div className={styles.error}>{errorMessages.email}</div>}
            </div>
          </div>

          <div className={styles['signup-input-group']}>
            <div className={styles['input-text']}>암호</div>
            <div className={styles['input-form']}>
              <input
                className={styles['input-info']}
                type="password"
                name="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                onBlur={validateForm}
                placeholder="영문과 숫자를 혼합한 8자 이상 20자 미만"
                autoComplete="off"
                required
              />
              {errorMessages.password && <div className={styles.error}>{errorMessages.password}</div>}
            </div>
          </div>

          <div className={styles['signup-input-group']}>
            <div className={styles['input-text']}>암호 재입력</div>
            <div className={styles['input-form']}>
              <input
                className={styles['input-info']}
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                onBlur={validateForm}
                placeholder="영문과 숫자를 혼합한 8자 이상 20자 미만"
                autoComplete="off"
                required
              />
              {errorMessages.confirmPassword && <div className={styles.error}>{errorMessages.confirmPassword}</div>}
            </div>
          </div>

          <div className={styles['image-form']}>
            <div className={styles['image-input']}>
              <input type="file" onChange={uploadImage} accept="image/jpeg, image/png, image/gif, image/svg+xml" />
              <div>이미지넣을곳</div>
              <span>프로필 이미지</span>
            </div>
            <div className={styles['image-info']}>
              <span>
                프로필 이미지는 1MB 이하여야 합니다.
                <br />
                사용자 프로필 이미지(base64) - jpg, jpeg,
                <br /> webp, png, gif, svg
              </span>
            </div>
          </div>
          <div className={styles['form-submit']}>
            <div className={styles['info']}>
              <input type="checkbox" />
              <span>닌텐도 어카운트의 이용약관 및 개인정보처리방침에 동의합니다.</span>
            </div>
            <div className={styles['continue-group']}>
              <button className={styles['continue-button']} type="submit" onClick={handleSubmit}>
                계속
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
