import React, { useState, ChangeEvent } from 'react'
import styles from './index.module.scss'
import { signUp } from '@/apis/access/signUp'
import Validate from '@/components/access/validate'
import { displayNameRegex, passwordRegex, emailRegex } from '@/utils/constants'
import { SignUpRequest } from '@/types/auth'
import { useNavigate } from 'react-router-dom'

export default function SignUpForm() {
  const [email, setEmail] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [profileImage, setProfileImage] = useState('')
  const [isChecked, setIsChecked] = useState(false)
  const [isEmailValid, setIsEmailValid] = useState(false)
  const [isDisplayNameValid, setIsDisplayNameValid] = useState(false)
  const navigate = useNavigate()

  //체크박스 눌러야 화원가입버튼 활성화
  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.checked
    setIsChecked(value)
  }

  // 유효성 검사기능 및 중복체크 전부 통과해야 폼 제출성공
  const validateForm = () => {
    // 이메일 유효성 검사
    if (!emailRegex.test(email)) {
      return false
    }

    // 닉네임 유효성 검사
    if (!displayNameRegex.test(displayName)) {
      return false
    }

    // 비밀번호 유효성 검사
    if (!passwordRegex.test(password)) {
      alert('비밀번호를 확인해주세요.')
      return false
    }

    // 비밀번호 일치 여부 검사
    if (password !== confirmPassword) {
      alert('비밀번호를 확인해주세요.')
      return false
    }

    if (!isEmailValid || !isDisplayNameValid) {
      alert('중복 체크를 수행해주세요.')
      return false
    }

    // 모든 유효성 검사 통과
    return true
  }

  const handleEmailSubmitValid = (valid: boolean) => {
    setIsEmailValid(valid)
  }

  const handleDisplayNameSubmitValid = (valid: boolean) => {
    setIsDisplayNameValid(valid)
  }

  // 회원가입 폼제출 및 회원가입 요청

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (validateForm()) {
      const data: SignUpRequest = {
        email,
        password,
        displayName,
        profileImgBase64: profileImage
      }

      try {
        await signUp(data)
        alert('회원가입 성공')
        navigate('/')
      } catch (error) {
        alert('회원가입에 실패했습니다.')
      }
    } else {
      alert('회원가입에 실패했습니다.')
    }
  }

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setEmail(value)
  }

  const handleDisplayNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setDisplayName(value)
  }

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setPassword(value)
  }

  const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setConfirmPassword(value)
  }

  //이미지 미리보기
  const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files && files.length > 0) {
      const file = files[0]
      const reader = new FileReader()
      reader.onloadend = () => {
        const base64 = reader.result
        if (base64) {
          const str = base64?.toString()
          if (str && str.length > 1048576) {
            alert('이미지는 1MB이하여야합니다!')
            return
          }
          setProfileImage(base64.toString())
        }
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles['subTitle']}>닌텐도 어카운트 작성</h1>
      <div className={styles['form-signup-page']}>
        <p className={styles['signup-info']}>회원가입을 위해 아래 정보를 입력해 주십시오.</p>
        <form className={styles['form-main']} onSubmit={handleSubmit}>
          <Validate
            onChangeEmail={handleEmailChange}
            onChangeDisplayName={handleDisplayNameChange}
            onChangePassword={handlePasswordChange}
            onChangeConfirmPassword={handleConfirmPasswordChange}
            handleEmailSubmitValid={handleEmailSubmitValid}
            handleDisplayNameSubmitValid={handleDisplayNameSubmitValid}
          />
          <div className={styles['image-form']}>
            <div className={styles['image-input']}>
              <span className={styles['image-title']}>프로필 이미지</span>
              <div className={styles['image-box']}>
                <div className={styles['image-upload']}>
                  {profileImage ? (
                    <img className={styles['preview-image']} src={profileImage} alt="" />
                  ) : (
                    <img className={styles['preview-image']} src="/images/search/image-not-found.png" />
                  )}
                </div>
                <input
                  className={styles['image-img']}
                  type="file"
                  onChange={handleChangeFile}
                  accept="image/jpeg, image/png, image/gif, image/svg+xml"
                />
              </div>
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
              <label className={styles['checkbox-container']} htmlFor="checkboxId">
                <input
                  type="checkbox"
                  id="checkboxId"
                  className={styles['checkBox-input']}
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <span>닌텐도 어카운트의 이용약관 및 개인정보처리방침에 동의합니다.</span>
              </label>
            </div>
            <div className={styles['continue-group']}>
              <button
                className={`${styles['continue-button']} ${isChecked ? styles['continue-button-checked'] : ''}`}
                type="submit"
                value="sign up"
                disabled={!isChecked}
              >
                완료
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
