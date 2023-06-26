import React, { useState, ChangeEvent } from 'react'
import styles from './index.module.scss'
import Nav from '@/components/mypage/nav/Nav'
import { editedUserInfo } from '@/apis/user/editedUserInfo'
import { useRecoilState } from 'recoil'
import { userState } from '@/recoil/common/userState'
import { useNavigate } from 'react-router-dom'
import { EditedUserInfoRequest, EditedUserInfoResponse } from '@/types/user'
import { displayNameRegex, passwordRegex } from '@/utils/constants'

export default function EditProfile() {
  const [curUser, setCurUser] = useRecoilState(userState)
  // API에 등록할 수정용 요청 데이터 (request body의 data)   <이건 타입 지정>
  const [updatedInfo, setUpdatedInfo] = useState<EditedUserInfoRequest>({
    displayName: '',
    profileImgBase64: '',
    oldPassword: '',
    newPassword: ''
  })
  const accessToken = localStorage.getItem('token') || ''
  const [disabled, setDisabled] = useState(true)
  const [InputDisabled, setInputDisabled] = useState(true)
  const [submitDisabled, setSubmitDisabled] = useState(true)
  const [nicknameInputValue, setNicknameInputValue] = useState('')
  const [DisplayNameCheckedMsg, setDisplayNameCheckedMsg] = useState('')
  const [passwordInputValue, setPasswordInputValue] = useState('')
  const [passwordInputCheckValue, setPasswordInputCheckValue] = useState('')
  const [passwordCheckedMsg, setPasswordCheckedMsg] = useState('')
  const [passwordDoubleCheckedMsg, setPasswordDoubleCheckedMsg] = useState('')
  const navigate = useNavigate()
  //===========================================================================//
  // 닉네임 유효성 체크 : 입력 양식 체크
  const handleNicknameChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setNicknameInputValue(e.target.value)

    if (nicknameInputValue == null) {
      console.log('닉네임 재설정 중')
      return
    } else if (!displayNameRegex.test(nicknameInputValue)) {
      setDisplayNameCheckedMsg('닉네임 양식을 지켜주세요.')
      setDisabled(true)
      return
    } else {
      setDisabled(false)
      console.log('닉네임 양식 :', '통과')
      setDisplayNameCheckedMsg('새로운 닉네임')
    }
  }

  // 중복체크 : 사용중인 닉네임 체크
  const onIsDisplayNameChecked = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    // 중복체크 메세지
    if (nicknameInputValue === curUser.displayName) {
      alert('이미 사용 중인 닉네임입니다.')
      setDisabled(true)
    } else {
      alert('사용 가능한 닉네임입니다.')
      setDisabled(false)
    }
  }
  //===========================================================================//
  // 비밀번호 유효성 체크 : 입력 양식 체크
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setPasswordInputValue(e.target.value)

    if (passwordInputValue == null) {
      console.log('비밀번호 재설정 중')
      setPasswordCheckedMsg('')
      return
    } else if (!passwordRegex.test(passwordInputValue)) {
      setPasswordCheckedMsg('비밀번호 양식을 지켜주세요.')
      return setInputDisabled(true)
    } else {
      console.log('비밀번호 양식 :', '통과')
      setPasswordCheckedMsg('비밀번호를 한 번더 입력해 주세요.')
      return setInputDisabled(false)
    }
  }

  // 중복체크 : 변경될 비밀번호 체크
  const handlePasswordCheckChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setPasswordInputCheckValue(e.target.value)
    // 중복 체크 메세지
    if (passwordInputCheckValue == null) {
      console.log('비밀번호 확인 중')
      setPasswordDoubleCheckedMsg('')
      return
    } else if (passwordInputValue !== e.target.value) {
      setPasswordDoubleCheckedMsg('비밀번호가 동일하지 않습니다.')
      setSubmitDisabled(true)


      return passwordInputCheckValue === null
    } else if (passwordInputValue === e.target.value) {
      setPasswordDoubleCheckedMsg('비밀번호 확인 완료 ✅')
      setSubmitDisabled(false)
    }
  }

  // // 닉네임 & 비밀번호 API에 상태 업데이트
  // const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target
  //   setUpdatedInfo((prevInfo) => ({
  //     ...prevInfo,
  //     [name]: value
  //   }))
  // }

  // 이름 입력값 상태 업데이트
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setUpdatedInfo((prevInfo) => ({
      ...prevInfo,
      displayname: value
    }))
  }

  // 이메일 입력값 상태 업데이트
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setUpdatedInfo((prevInfo) => ({
      ...prevInfo,
      email: value
    }))
  }

  // 닉네임 함수들 호출
  const handleNameChangeData = (e: ChangeEvent<HTMLInputElement>) => {
    handleNicknameChange(e)
    handleNameChange(e)
  }
  //  비밀번호 함수들 호출
  const handlePasswordChangeData = (e: ChangeEvent<HTMLInputElement>) => {
    if (passwordInputCheckValue === null) {
      console.log('이건 동작하면 안돼')
      return false
    } else {
      handlePasswordCheckChange(e)
      handleEmailChange(e)
    }
  }
  //===========================================================================//

  // 프로필 이미지 [미리보기]상태값
  const [profileImage, setProfileImage] = useState('')

  // 이미지 유효성 검사 및 미리 보기 업로드
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      const reader = new FileReader()

      reader.onloadend = () => {
        const base64 = reader.result
        if (base64) {
          const str = base64?.toString()
          if (str && str.length > 1048576) {
            alert('이미지는 1MB이하여야합니다!')
            return
          }
        }
        setUpdatedInfo((prevInfo) => ({
          ...prevInfo,
          profileImgBase64: reader.result as string
        }))
        setProfileImage(reader.result as string) // 프로필 이미지 상태 업데이트
      }
      reader.readAsDataURL(file)
    }
  }
  //===========================================================================//

  // API 호출 <= updatedInfo 수정데이터들 보내버림
  const handleSubmit = async () => {
    try {
      await editedUserInfo(updatedInfo, accessToken)
      console.log('PUT 실행 성공')
      alert('정상적으로 변경 되었습니다.')
      navigate('/user/${user.username}')
    } catch (error) {
      console.error('API 호출 실패 또는 오류:', error)
    }
  }

  return (
    <>
      <div className={styles.container}>
        <Nav />
        <section className={styles.section}>
          <div className={styles.content}>
            <div className={styles.innerTop}>
              <h1 className={styles.title}>프로필 수정</h1>
              <hr className={styles.line} />
            </div>
            <div className={styles.innerBottom}>
              <ol className={styles.lists}>
                <li className={styles.list}>
                  <label className={styles.label} htmlFor="displayName">
                    닉네임
                  </label>
                  <form className={styles.inputForm}>
                    <input
                      id="displayName"
                      className={`${styles.inputTag} ${styles.displayName}`}
                      type="text"
                      name="displayName"
                      value={nicknameInputValue}
                      onChange={handleNameChangeData}
                      placeholder={curUser.displayName}
                      required
                    />
                  </form>
                  <button className={styles.btnTag} onClick={onIsDisplayNameChecked} disabled={disabled}>
                    중복확인
                  </button>
                </li>
                {DisplayNameCheckedMsg && (
                  <p className={DisplayNameCheckedMsg === '새로운 닉네임' ? styles.msg : styles.error}>
                    {DisplayNameCheckedMsg}
                  </p>
                )}
                <li className={styles.list}>
                  <label className={styles.label} htmlFor="email">
                    이메일
                  </label>
                  <form className={styles.inputForm}>
                    <input
                      id="email"
                      className={`${styles.inputTag} ${styles.email}`}
                      type="email"
                      name="email"
                      placeholder={curUser.email}
                      disabled
                      required
                    />
                  </form>
                </li>
                <li className={styles.list}>
                  <label className={styles.label} htmlFor="password">
                    비밀 번호
                  </label>
                  <form className={styles.inputForm}>
                    <input
                      id="password"
                      className={`${styles.inputTag} ${styles.password}`}
                      type="password"
                      name="password"
                      value={passwordInputValue}
                      onChange={handlePasswordChange}
                      placeholder="새 비밀번호"
                      required
                    />
                    <input
                      id="password"
                      className={`${styles.inputTag} ${styles.passwordCheck}`}
                      type="password"
                      name="newPassword"
                      value={passwordInputCheckValue}
                      onChange={handlePasswordChangeData}
                      placeholder="새 비밀번호 확인"
                      disabled={InputDisabled}
                      required
                    />
                  </form>
                </li>
                {passwordCheckedMsg && (
                  <span
                    className={
                      passwordCheckedMsg === '비밀번호를 한 번더 입력해 주세요.' ? styles.ps_msg : styles.ps_error
                    }
                  >
                    {passwordCheckedMsg}
                  </span>
                )}
                {passwordDoubleCheckedMsg && (
                  <span
                    className={
                      passwordDoubleCheckedMsg === '비밀번호 확인 완료 ✅' ? styles.psCheck_msg : styles.psCheck_error
                    }
                  >
                    {passwordDoubleCheckedMsg}
                  </span>
                )}
                <li className={`${styles.list} ${styles.uploade}`}>
                  <label className={styles.label} htmlFor="uploade">
                    프로필
                    <br />
                    이미지
                  </label>
                  <div className={styles.box}>
                    {profileImage ? (
                      <img className={styles.profile} src={profileImage} alt="" />
                    ) : (
                      <img className={styles.profile} src="/images/search/image-not-found.png" />
                    )}
                    <div className={styles.profileInfo}>
                      <div className={styles.profileSubText}>
                        - 파일 사이즈 최대 1MB 이하
                        <br /> - 사용자 프로필 이미지(Base64) <br />: jpg/ jpeg/ webp/ png/ gif/ svg
                      </div>
                      <form className={styles.uploadeForm}>
                        <input
                          className={`${styles.inputTag} ${styles.uploadForm}`}
                          onChange={handleFileChange}
                          id="uploade"
                          type="file"
                          name="file"
                          accept="image/jpeg, image/png, image/gif, image/svg+xml"
                          required
                        />
                        {!profileImage ? (
                          <div className={styles['image-upload']} />
                        ) : (
                          <img className={styles['preview-image']} src="" alt="" />
                        )}
                      </form>
                    </div>
                  </div>
                </li>
              </ol>
              <button
                className={
                  submitDisabled === true
                    ? `${styles.submitBtn} ${styles.btnError}`
                    : `${styles.submitBtn} ${styles.submitBtn}`
                }
                onClick={handleSubmit}
                disabled={submitDisabled}
              >
                완료
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
