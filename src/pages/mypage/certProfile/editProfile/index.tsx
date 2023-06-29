import React, { useState, ChangeEvent, useEffect } from 'react'
import styles from './index.module.scss'
import Nav from '@/components/mypage/nav/Nav'
import { editedUserInfo } from '@/apis/user/editedUserInfo'
import { userList } from '@/apis/user/userList'
import { useRecoilState } from 'recoil'
import { userState } from '@/recoil/common/userState'
import { useNavigate } from 'react-router-dom'
import { EditedUserInfoRequest, User } from '@/types/user'
import { displayNameRegex, passwordRegex } from '@/utils/constants'
import useUserInfo from '@/hooks/useUserInfo'
import { EditProductRequest } from '@/types/product'

// interface ValidateProps {
//   // onChangeDisplayName: (e: ChangeEvent<HTMLInputElement>) => void
//   // onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void
//   // onChangeConfirmPassword: (e: ChangeEvent<HTMLInputElement>) => void
//   handleDisplayNameSubmitValid: (isDisplayNameValid: boolean) => void
// }

// export default function Validate(props: ValidateProps) {
//   const {
//     // onChangeEmail,
//     // onChangeDisplayName,
//     // onChangePassword,
//     // onChangeConfirmPassword,
//     // handleEmailSubmitValid,
//     handleDisplayNameSubmitValid
//   } = props

export default function EditProfile() {
  const [curUser, setCurUser] = useRecoilState(userState)
  const [userInfo] = useUserInfo()
  // API에 등록할 수정용 요청 데이터 (request body의 data)   <이건 타입 지정>
  const [updatedInfo, setUpdatedInfo] = useState<EditedUserInfoRequest>({
    displayName: '',
    profileImgBase64: '',
    oldPassword: '',
    newPassword: ''
  })
  const accessToken = localStorage.getItem('token') || ''

  const [disabled, setDisabled] = useState(true)
  const [submitDisabled, setSubmitDisabled] = useState(false)

  const [nicknameInputValue, setNicknameInputValue] = useState<EditedUserInfoRequest['displayName']>('')
  const [displayNameCheckedMsg, setDisplayNameCheckedMsg] = useState<string>('')

  const [originalPassword, setOriginalPassword] = useState<EditedUserInfoRequest['oldPassword']>('')
  const [newPasswordInputValue, setNewPasswordInputValue] = useState<EditedUserInfoRequest['newPassword']>('')
  const [passwordCheckedMsg, setPasswordCheckedMsg] = useState<string>('')

  const navigate = useNavigate()
  //===========================================================================//

  useEffect(() => {
    setUpdatedInfo((prev) => ({
      ...prev,
      displayName: nicknameInputValue,
      oldPassword: originalPassword,
      newPassword: newPasswordInputValue
    }))
  }, [originalPassword, newPasswordInputValue, nicknameInputValue])

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

  // 닉네임 유효성 체크 : 입력 양식 체크
  const checkNickNameValidation = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    if (!displayNameRegex.test(nicknameInputValue ? nicknameInputValue : '')) {
      setDisplayNameCheckedMsg('닉네임 양식을 지켜주세요.')
      setDisabled(true)
      return
    } else if (nicknameInputValue === '') {
      setDisplayNameCheckedMsg('.')
    } else {
      setDisabled(false)
      setDisplayNameCheckedMsg('닉네임 입력 확인')
    }

    setNicknameInputValue(e.target.value)
  }

  // 중복 닉네임 체크
  const onIsDisplayNameDuplicate = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (displayNameCheckedMsg === '닉네임 입력 확인' && nicknameInputValue) {
      const isDuplicate = await checkDuplicateDisplayName(nicknameInputValue)
      // 중복체크 메세지
      if (isDuplicate) {
        alert('이미 사용 중인 닉네임입니다.')
        setDisplayNameCheckedMsg('아미 사용중인 닉네임입니다.')
        setDisabled(true)
      } else {
        alert('사용 가능한 닉네임입니다.')
        setDisplayNameCheckedMsg('닉네임 입력 확인')
        setDisabled(false)
        // handleDisplayNameSubmitValid(true)
      }
    }
  }
  //===========================================================================//
  // 비밀번호 유효성 체크 : 입력 양식 체크
  const handleOriginalPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setOriginalPassword(e.target.value)
    if (!passwordRegex.test(originalPassword ? originalPassword : '')) {
      setPasswordCheckedMsg('영문자 숫자 포함 8~20자로 입력해주세요.')
      return
    }
    setPasswordCheckedMsg('비밀번호 입력 확인')
  }

  // 이름 입력값 상태 업데이트
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setNicknameInputValue(value)
    setUpdatedInfo((prevInfo) => ({
      ...prevInfo,
      displayName: value
    }))
  }

  // 닉네임 함수들 호출
  const handleNameChangeData = (e: ChangeEvent<HTMLInputElement>) => {
    checkNickNameValidation(e)
    handleNameChange(e)
  }
  //  비밀번호 함수들 호출
  const handleNewPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    // 기본 비번호 입력 확인
    if (!passwordRegex.test(originalPassword ? originalPassword : '')) {
      return
    }
    setNewPasswordInputValue(e.target.value)

    // 새 비밀번호 입력 확인
    if (!passwordRegex.test(newPasswordInputValue ? newPasswordInputValue : '')) {
      setPasswordCheckedMsg('비밀번호 양식을 지켜주세요.')
      return
    }

    setPasswordCheckedMsg('비밀번호 입력 확인')
    return
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
    const isEdited = await editedUserInfo(updatedInfo, accessToken)
    if (isEdited) {
      alert('정상적으로 변경 되었습니다.')
    } else {
      alert('변경에 실패했습니다. 고객센터에 문의해주세요')
    }
    navigate(`/user/${userInfo.displayName}`)
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
                  <button className={styles.btnTag} onClick={onIsDisplayNameDuplicate} disabled={disabled}>
                    중복확인
                  </button>
                </li>
                {displayNameCheckedMsg && (
                  <p className={displayNameCheckedMsg === '닉네임 입력 확인' ? styles.msg : styles.error}>
                    {displayNameCheckedMsg}
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
                  <label className={styles.label} htmlFor="oldPassword">
                    비밀 번호
                  </label>
                  <form className={styles.inputForm}>
                    <input
                      id="oldPassword"
                      className={`${styles.inputTag} ${styles.password}`}
                      type="password"
                      name="oldPassword"
                      value={originalPassword}
                      onChange={handleOriginalPasswordChange}
                      placeholder="기존 비밀번호"
                      required
                    />
                    <input
                      id="newPassword"
                      className={`${styles.inputTag} ${styles.passwordCheck}`}
                      type="password"
                      name="newPassword"
                      value={newPasswordInputValue}
                      onChange={handleNewPasswordChange}
                      placeholder="새 비밀번호"
                      required
                    />
                  </form>
                </li>
                {passwordCheckedMsg && (
                  <span className={passwordCheckedMsg === '비밀번호 입력 확인' ? styles.ps_msg : styles.ps_error}>
                    {passwordCheckedMsg}
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
