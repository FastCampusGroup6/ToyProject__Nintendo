import React, { useState, ChangeEvent } from 'react'
import styles from './index.module.scss'
import { userList } from '@/apis/user/userList'
import { User, Users } from '@/types/user'
import { displayNameRegex, passwordRegex, emailRegex } from '@/utils/constants'
import { signUp } from '@/apis/access/signUp'

export interface ValidateProps {
  onChangeEmail: (e: ChangeEvent<HTMLInputElement>) => void
  onChangeDisplayName: (e: ChangeEvent<HTMLInputElement>) => void
  onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void
  onChangeConfirmPassword: (e: ChangeEvent<HTMLInputElement>) => void
  handleEmailSubmitValid: (isEmailValid: boolean) => void
  handleDisplayNameSubmitValid: (isDisplayNameValid: boolean) => void
}

export default function Validate(props: ValidateProps) {
  const {
    onChangeEmail,
    onChangeDisplayName,
    onChangePassword,
    onChangeConfirmPassword,
    handleEmailSubmitValid,
    handleDisplayNameSubmitValid
  } = props

  const [email, setEmail] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [emailMsg, setEmailMsg] = useState('')
  const [pwdMsg, setPwdMsg] = useState('')
  const [confirmPwdMsg, setConfirmPwdMsg] = useState('')
  const [displayNameMsg, setDisplayNameMsg] = useState('')
  const [displayNameCheckMsg, setDisplayNameCheckMsg] = useState('')
  const [emailCheckMsg, setEmailCheckMsg] = useState('')

  // 유저 목록을 조회하여 유저의 이메일과 같은 값이 있으면 중복
  async function checkDuplicateEmail(email: string): Promise<boolean> {
    try {
      const users: User[] = await userList([{ email, displayName: '', profileImg: '' }])
      const isDuplicate = users.some((user: User) => user.email === email)
      return isDuplicate
    } catch (error) {
      return true
    }
  }

  // 유저 목록을 조회하여 유저의 닉네임과 같은 값이 있으면 중복
  async function checkDuplicateDisplayName(displayName: string): Promise<boolean> {
    try {
      const users: User[] = await userList([{ email: '', displayName, profileImg: '' }])
      const isDuplicate = users.some((user: User) => user.displayName === displayName)
      return isDuplicate
    } catch (error) {
      return true
    }
  }

  // 이메일 중복체크 기능 중복체크버튼을 누르면 상황에 맞는 메세지전달
  const handleCheckDuplicateEmail = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    if (emailMsg === '올바른 이메일 형식입니다.') {
      const isDuplicate = await checkDuplicateEmail(email)
      if (isDuplicate) {
        setEmailCheckMsg('중복된 이메일입니다.')
        handleEmailSubmitValid(false)
      } else {
        setEmailCheckMsg('사용 가능한 이메일입니다.')
        handleEmailSubmitValid(true)
      }
    }
  }

  // 닉네임 중복체크 기능 중복체크버튼을 누르면 상황에 맞는 메세지전달
  const handleCheckDuplicateDisplayName = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    if (displayNameMsg === '올바른 닉네임 형식입니다.') {
      const isDuplicate = await checkDuplicateDisplayName(displayName)
      if (isDuplicate) {
        setDisplayNameCheckMsg('중복된 닉네임입니다.')
        handleDisplayNameSubmitValid(false)
      } else {
        setDisplayNameCheckMsg('사용 가능한 닉네임입니다.')
        handleDisplayNameSubmitValid(true)
      }
    }
  }
  // 이메일 유효성 검사 및 메세지
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const curEmail = e.target.value
    setEmail(curEmail)
    onChangeEmail(e)

    if (!emailRegex.test(curEmail)) {
      setEmailMsg('메일 주소가 올바르지 않습니다.')
    } else {
      setEmailMsg('올바른 이메일 형식입니다.')
    }
  }

  // 닉네임 유효성 검사 및 메세지
  const handleDisplayNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const curDisplayName = e.target.value
    setDisplayName(curDisplayName)
    onChangeDisplayName(e)

    if (!displayNameRegex.test(curDisplayName)) {
      setDisplayNameMsg('닉네임이 올바르지 않습니다.')
    } else {
      setDisplayNameMsg('올바른 닉네임 형식입니다.')
    }
  }

  // 비밀번호 유효성 검사 및 메세지
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const curPassword = e.target.value
    setPassword(curPassword)
    onChangePassword(e)

    if (!passwordRegex.test(curPassword)) {
      setPwdMsg('비밀번호가 올바르지 않습니다.')
    } else {
      setPwdMsg('안전한 비밀번호입니다.')
    }
  }

  // 비밀번호 일치 여부
  const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const curConfirmPassword = e.target.value
    setConfirmPassword(curConfirmPassword)
    onChangeConfirmPassword(e)

    if (password !== curConfirmPassword) {
      setConfirmPwdMsg('비밀번호가 일치하지 않습니다.')
    } else {
      setConfirmPwdMsg('올바른 비밀번호입니다.')
    }
  }

  return (
    <>
      <div className={styles['signup-input-group']}>
        <div className={styles['input-text']}>이메일</div>
        <div className={styles['input-form']}>
          <input
            className={styles['input-info']}
            type="email"
            name="email"
            onChange={handleEmailChange}
            placeholder="메일 주소"
            required
          />
          {emailMsg && !emailCheckMsg && (
            <div className={emailMsg === '올바른 이메일 형식입니다.' ? styles.msg : styles.error}>{emailMsg}</div>
          )}
          {emailCheckMsg && (
            <div className={emailCheckMsg === '사용 가능한 이메일입니다.' ? styles.msg : styles.error}>
              {emailCheckMsg}
            </div>
          )}
        </div>
        <button className={styles['duplicate-check']} onClick={handleCheckDuplicateEmail}>
          중복확인
        </button>
      </div>

      <div className={styles['signup-input-group']}>
        <div className={styles['input-text']}>닉네임</div>
        <div className={styles['input-form']}>
          <input
            className={styles['input-info']}
            type="text"
            name="displayName"
            onChange={handleDisplayNameChange}
            placeholder="10자 이내"
            required
          />
          {displayNameMsg && !displayNameCheckMsg && (
            <div className={displayNameMsg === '올바른 닉네임 형식입니다.' ? styles.msg : styles.error}>
              {displayNameMsg}
            </div>
          )}
          {displayNameCheckMsg && (
            <div className={displayNameCheckMsg === '사용 가능한 닉네임입니다.' ? styles.msg : styles.error}>
              {displayNameCheckMsg}
            </div>
          )}
        </div>
        <button className={styles['duplicate-check']} onClick={handleCheckDuplicateDisplayName}>
          중복확인
        </button>
      </div>

      <div className={styles['signup-input-group']}>
        <div className={styles['input-text']}>비밀번호</div>
        <div className={styles['input-form']}>
          <input
            className={styles['input-info']}
            type="password"
            name="password"
            autoComplete="off"
            onChange={handlePasswordChange}
            placeholder="영문과 숫자를 포함한 8자 이상 20자 미만"
            required
          />
          {pwdMsg && <div className={pwdMsg === '안전한 비밀번호입니다.' ? styles.msg : styles.error}>{pwdMsg}</div>}
        </div>
      </div>

      <div className={styles['signup-input-group']}>
        <div className={styles['input-text']}>비밀번호 확인</div>
        <div className={styles['input-form']}>
          <input
            className={styles['input-info']}
            type="password"
            name="confirmPassword"
            autoComplete="off"
            onChange={handleConfirmPasswordChange}
            placeholder="영문과 숫자를 포함한 8자 이상 20자 미만"
            required
          />
          {confirmPwdMsg && (
            <div className={confirmPwdMsg === '올바른 비밀번호입니다.' ? styles.msg : styles.error}>
              {confirmPwdMsg}
            </div>
          )}
        </div>
      </div>
    </>
  )
}
