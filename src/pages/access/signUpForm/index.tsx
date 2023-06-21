import React, { useState, useCallback, ChangeEvent } from 'react'
import styles from './index.module.scss'
import { SignUpRequest } from '@/types/auth'

export default function SignUpForm() {
  const [email, setEmail] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [profileImage, setProfileImage] = useState('')
  const [previewImage, setPreviewImage] = useState('')
  const [isChecked, setIsChecked] = useState(false)

  // 메세지 상태 저장
  const [emailMsg, setEmailMsg] = useState('')
  const [pwdMsg, setPwdMsg] = useState('')
  const [confirmPwdMsg, setConfirmPwdMsg] = useState('')
  const [displayNameMsg, setDisplayNameMsg] = useState('')
  const [displayNameCheckMsg, setDisplayNameCheckMsg] = useState('')

  // 중복체크
  const [isDisplayNameChecked, setIsDisplayNameChecked] = useState(false)
  const [isDisplayNameDuplicate, setIsDisplayNameDuplicate] = useState(false)

  // email & 닉네임 & 비밀번호 정규식
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/
  const displayNameRegex = /^[a-zA-Z가-힣0-9\s]{1,10}$/

  // 더미데이터

  const dummySignUpRequest: SignUpRequest = {
    email: 'example@example.com',
    password: 'password123',
    displayName: 'John Doe',
    profileImgBase64: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/...'
  }

  // 중복닉네임 실험용 더미데이터

  const dummyData = ['John', 'Jane', 'Alice']

  // 중복체크 기능

  const onIsDisplayNameChecked = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    const isDuplicate = dummyData.includes(displayName)

    // 중복체크 메세지

    if (isDuplicate) {
      setDisplayNameCheckMsg('이미 사용 중인 닉네임입니다.')
    } else {
      setDisplayNameCheckMsg('사용 가능한 닉네임입니다.')
    }

    setIsDisplayNameDuplicate(isDuplicate)
    setIsDisplayNameChecked(true)
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

    // 중복 체크 확인 여부 검사
    if (!isDisplayNameChecked || isDisplayNameDuplicate) {
      return false
    }

    // 비밀번호 유효성 검사
    if (!passwordRegex.test(password)) {
      return false
    }

    // 비밀번호 일치 여부 검사
    if (password !== confirmPassword) {
      return false
    }

    // 모든 유효성 검사 통과
    return true
  }
  //체크박스 기능
  const handleCheckboxChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    console.log('체크박스 확인')
    setIsChecked(e.target.checked)
  }, [])

  // 회원가입 폼제출 및 회원가입 요청

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (validateForm()) {
      console.log('폼 제출 성공')
      console.log('회원가입 요청:', {
        email,
        password,
        displayName,
        profileImgBase64: dummySignUpRequest.profileImgBase64
      })
    } else {
      console.log('폼 제출 실패')
      console.log('회원가입 요청실패:', {
        email,
        password,
        displayName,
        profileImgBase64: dummySignUpRequest.profileImgBase64
      })
    }
  }

  // 이메일 콜백함수를 이용해 메세지를 실시간으로 반영
  const onChangeEmail = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const curEmail = e.target.value
      setEmail(curEmail)

      if (!emailRegex.test(curEmail)) {
        setEmailMsg('메일 주소가 올바르지 않습니다.')
      } else {
        setEmailMsg('올바른 이메일 형식입니다.')
      }
    },
    [emailRegex]
  )

  // 닉네임 콜백함수를 이용해 현재 입력값에 따른 메세지를 실시간으로 반영
  const onChangeDisplayName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const curDisplayName = e.target.value
      setDisplayName(curDisplayName)

      if (!displayNameRegex.test(curDisplayName)) {
        setDisplayNameMsg('닉네임이 올바르지 않습니다.')
      } else {
        setDisplayNameMsg('올바른 닉네임 형식입니다.')
      }
    },
    [displayNameRegex]
  )
  // 비밀번호 콜백함수를 이용해 현재 입력값에 따른 메세지를 실시간으로 반영
  const onChangePassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const curPassword = e.target.value
      setPassword(curPassword)

      if (!passwordRegex.test(curPassword)) {
        setPwdMsg('비밀번호가 올바르지 않습니다.')
      } else {
        setPwdMsg('안전한 비밀번호입니다.')
      }
    },
    [passwordRegex]
  )
  // 비밀번호 일치 여부 콜백함수를 이용해 현재 입력값에 따른 메세지를 실시간으로 반영
  const onChangeConfirmPassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const curConfirmPassword = e.target.value
      setConfirmPassword(curConfirmPassword)

      if (password !== curConfirmPassword) {
        setConfirmPwdMsg('비밀번호가 일치하지 않습니다.')
      } else {
        setConfirmPwdMsg('올바른 비밀번호입니다.')
      }
    },
    [password]
  )

  //이미지 미리보기
  const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files && files.length > 0) {
      const file = files[0]
      const reader = new FileReader()
      reader.onloadend = () => {
        const base64 = reader.result
        if (base64) {
          setPreviewImage(base64.toString())
          uploadImage(base64.toString())
        }
      }
      reader.readAsDataURL(file)
    }
  }
  //프로필 이미지 상태설정
  const uploadImage = (base64: string) => {
    setProfileImage(base64)
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
                name="displayName"
                onChange={onChangeDisplayName}
                placeholder="10자 이내"
                required
              />
              {/* 중복체크하기전 메시지 출력 */}

              {displayNameMsg && !isDisplayNameChecked && !isChecked && (
                <div className={displayNameMsg === '올바른 닉네임 형식입니다.' ? styles.msg : styles.error}>
                  {displayNameMsg}
                </div>
              )}

              {/* 중복체크 후 메시지 출력 */}

              {displayNameCheckMsg && isDisplayNameChecked && !isChecked && (
                <div className={displayNameCheckMsg === '사용 가능한 닉네임입니다.' ? styles.msg : styles.error}>
                  {displayNameCheckMsg}
                </div>
              )}
              {/* 중복체크하지 않은 경우 오류 메시지 */}

              {!isDisplayNameChecked && isChecked && <div className={styles.error}>중복 확인을 해주십시오.</div>}

              {/* 중복체크 및 약간동의 후 메시지 */}
              {isDisplayNameChecked && isChecked && (
                <div className={displayNameCheckMsg === '사용 가능한 닉네임입니다.' ? styles.msg : styles.error}>
                  {displayNameCheckMsg}
                </div>
              )}
            </div>

            <button className={styles['duplicate-check']} onClick={onIsDisplayNameChecked}>
              중복확인
            </button>
          </div>

          <div className={styles['signup-input-group']}>
            <div className={styles['input-text']}>메일 주소</div>
            <div className={styles['input-form']}>
              <input
                className={styles['input-info']}
                type="email"
                name="email"
                value={email}
                onChange={onChangeEmail}
                placeholder="메일 주소"
                required
              />
              {emailMsg && (
                <div className={emailMsg === '올바른 이메일 형식입니다.' ? styles.msg : styles.error}>{emailMsg}</div>
              )}
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
                onChange={onChangePassword}
                placeholder="영문과 숫자를 혼합한 8자 이상 20자 미만"
                autoComplete="off"
                required
              />
              {pwdMsg && (
                <div className={pwdMsg === '안전한 비밀번호입니다.' ? styles.msg : styles.error}>{pwdMsg}</div>
              )}
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
                onChange={onChangeConfirmPassword}
                placeholder="영문과 숫자를 혼합한 8자 이상 20자 미만"
                autoComplete="off"
                required
              />
              {confirmPwdMsg && (
                <div className={confirmPwdMsg === '올바른 비밀번호입니다.' ? styles.msg : styles.error}>
                  {confirmPwdMsg}
                </div>
              )}
            </div>
          </div>

          <div className={styles['image-form']}>
            <div className={styles['image-input']}>
              <div>
                <input
                  type="file"
                  onChange={handleChangeFile}
                  accept="image/jpeg, image/png, image/gif, image/svg+xml"
                />
              </div>

              {!previewImage ? (
                <div className={styles['image-upload']} />
              ) : (
                <img className={styles['preview-image']} src={previewImage} alt="프로필 이미지" />
              )}
              <span className={styles['image-title']}>프로필 이미지</span>
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
                value="Sign up"
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
