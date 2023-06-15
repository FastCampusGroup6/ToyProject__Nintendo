import React from 'react'
import styles from './index.module.scss'

export default function LogOut() {
  const handleLogout = () => {
    // 토큰 제거
    localStorage.removeItem('token')
    console.log('로그아웃 성공')
  }

  return (
    <div className={styles.container}>
      <h1 className={styles['subTitle']}>로그아웃</h1>
      <div>
        <h2 className={styles['info']}>다시 로그인하려면 메일 주소 또는 로그인 ID, 암호가 필요합니다.</h2>
        <span className={styles['logout-info']}>
          메일 주소의 수신확인이 완료되지 않은 경우, 암호를 잊어버리면 닌텐도 어카운트의 암호를 재발행할 수 없습니다.
          <br />
          메일 주소의 수신확인을 완료한 후에 로그아웃해 주십시오.
        </span>
        <br />
        <div className={styles['passwordChange']}>
          <a className={styles['passwordChangeLink']} href="/access/passwordcheck">
            비밀번호 변경
          </a>
        </div>

        <div className={styles['btn-group']}>
          <a href="/">
            <button className={styles['cancel-btn']}>취소</button>
          </a>
          <button onClick={handleLogout} className={styles['logout-btn']}>
            로그아웃
          </button>
        </div>
      </div>
    </div>
  )
}
