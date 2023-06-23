import React, { useState, useCallback, ChangeEvent } from 'react'
import styles from './index.module.scss'
import Nav from '@/components/mypage/nav/Nav'
import { SignUpRequest } from '@/types/auth'

// 정규식 메서드 test()

export default function EditProfile() {
  const [displayName, setDisplayName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [profileImage, setProfileImage] = useState('')

  // 메세지 상태 저장
  const [pwdMsg, setPwdMsg] = useState('')
  const [confirmPwdMsg, setConfirmPwdMsg] = useState('')
  const [displayNameMsg, setDisplayNameMsg] = useState('')
  const [displayNameCheckMsg, setDisplayNameCheckMsg] = useState('')

  // 중복체크
  const [isDisplayNameChecked, setIsDisplayNameChecked] = useState(false)
  const [isDisplayNameDuplicate, setIsDisplayNameDuplicate] = useState(false)

  // email & 닉네임 & 비밀번호 정규식
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

  // // 중복체크 기능
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

  // 닉네임 콜백함수를 이용해 현재 입력값에 따른 메세지를 실시간으로 반영
  const onChangeDisplayName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const curDisplayName = e.target.value
    setDisplayName(curDisplayName)

    if (!displayNameRegex.test(curDisplayName)) {
      setDisplayNameMsg('닉네임이 올바르지 않습니다.')
    } else {
      setDisplayNameMsg('올바른 닉네임 형식입니다.')
    }
  }

  // 비밀번호 일치 여부 콜백함수를 이용해 현재 입력값에 따른 메세지를 실시간으로 반영
  const onChangeConfirmPassword = (evevt: React.ChangeEvent<HTMLInputElement>) => {
    const curConfirmPassword = evevt.target.value
    setConfirmPassword(curConfirmPassword)

    if (password !== curConfirmPassword) {
      setConfirmPwdMsg('비밀번호가 일치하지 않습니다.')
    } else {
      setConfirmPwdMsg('비밀 번호 확인')
    }
  }

  // // 비밀번호를 이용해 현재 입력값에 따른 메세지를 실시간으로 반영
  // const onChangePassword = (evevt: React.ChangeEvent<HTMLInputElement>) => {
  //   const curPassword = evevt.target.value
  //   setPassword(curPassword)

  //   if (!passwordRegex.test(curPassword)) {
  //     setPwdMsg('비밀번호가 올바르지 않습니다.')
  //   } else {
  //     setPwdMsg('안전한 비밀번호입니다.')
  //   }
  // }

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

  // 유효성 검사기능 및 중복체크 전부 통과해야 폼 제출성공
  const validateForm = () => {
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
      return <div> 비밀번호가 유효하지 않습니다.</div>
    }

    // 비밀번호 일치 여부 검사
    if (password !== confirmPassword) {
      return <div>비밀번호가 일치하지 않습니다.</div>
    }

    // 모든 유효성 검사 통과
    return true
  }

  // 개인정보 수정 폼제출
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (validateForm()) {
      alert('정보 변경 완료')
      console.log('회원가입 요청:', {
        password,
        displayName,
        profileImgBase64: dummySignUpRequest.profileImgBase64
      })
    } else {
      alert('정보 변경 실패. 입력 양식을 다시 확인해 주세요.')
      console.log('회원가입 요청실패:', {
        password,
        displayName,
        profileImgBase64: dummySignUpRequest.profileImgBase64
      })
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
                  <form className={styles.inputForm} onSubmit={handleSubmit}>
                    <input
                      id="displayName"
                      className={`${styles.inputTag} ${styles.displayName}`}
                      onChange={onChangeDisplayName}
                      type="text"
                      name="displayName"
                      placeholder="displayName"
                      required
                    />
                    {/* 중복체크하지 않은 경우 오류 메시지 */}
                    {!isDisplayNameChecked && <div className={styles.error}>중복 확인을 해주십시오.</div>}
                    {/* 중복체크 및 약간동의 후 메시지 */}
                    {isDisplayNameChecked && (
                      <div className={displayNameCheckMsg === '사용 가능한 닉네임입니다.' ? styles.msg : styles.error}>
                        {displayNameCheckMsg}
                      </div>
                    )}
                    {/* 중복체크하기전 메시지 출력 */}
                    {displayNameMsg && !isDisplayNameChecked && (
                      <div className={displayNameMsg === '올바른 닉네임 형식입니다.' ? styles.msg : styles.error}>
                        {displayNameMsg}
                      </div>
                    )}
                  </form>
                  <button className={styles.btnTag} onClick={onIsDisplayNameChecked}>
                    중복확인
                  </button>
                </li>
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
                      placeholder="{고객 이메일 데이터}"
                      disabled
                      required
                    />
                  </form>
                </li>
                <li className={styles.list}>
                  <label className={styles.label} htmlFor="password">
                    비밀 번호
                  </label>
                  <form className={styles.inputForm} onSubmit={handleSubmit}>
                    <input
                      id="password"
                      className={`${styles.inputTag} ${styles.password}`}
                      type="password"
                      name="password"
                      value={confirmPassword}
                      onChange={onChangeConfirmPassword}
                      placeholder="password"
                      autoComplete="off"
                      required
                    />
                    {pwdMsg && (
                      <div className={pwdMsg === '안전한 비밀번호입니다.' ? styles.msg : styles.error}>{pwdMsg}</div>
                    )}
                    {confirmPwdMsg && (
                      <div className={confirmPwdMsg === '올바른 비밀번호입니다.' ? styles.msg : styles.error}>
                        {confirmPwdMsg}
                      </div>
                    )}
                  </form>
                </li>
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
                      <form className={styles.uploadeForm} onSubmit={handleSubmit}>
                        <input
                          className={`${styles.inputTag} ${styles.uploadForm}`}
                          onChange={handleChangeFile}
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
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
