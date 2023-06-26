import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import PayProcessFlow from '@/components/payment/PayProcessFlow'
import { useNavigate } from 'react-router-dom'
import { userState } from '@/recoil/common/userState'
import { useRecoilValue } from 'recoil'
import {
  agreementContent1,
  agreementContent2,
  agreementContent3,
  agreementContent4,
  agreementContent5
} from '@/constants/payment'

export default function Agreement() {
  const [check, setCheck] = useState([false, false, false] as boolean[])
  const [active, setActive] = useState(false)
  const user = useRecoilValue(userState)
  const navigate = useNavigate()

  const handleBtnClick = () => {
    navigate(`/payment/${user.displayName}/checkInfo`)
  }

  const handleCheckBoxChange = (index: number) => {
    const updatedCheck = [...check]
    updatedCheck[index] = !updatedCheck[index]
    setCheck(updatedCheck)
  }
  const handleBtnActive = () => {
    if (check.every((isChecked) => isChecked)) {
      setActive(true)
    } else {
      setActive(false)
    }
  }

  useEffect(() => {
    handleBtnActive()
  }, [check])

  return (
    <>
      <PayProcessFlow />
      <div className={styles.agreement}>
        <div className={styles.subContainer}>
          <div className={styles.title}>회원 이용약관</div>
          <div className={styles.content}>
            <div dangerouslySetInnerHTML={{ __html: agreementContent1 }} />
          </div>
          <div className={styles.checkboxWrapper}>
            <input
              type="checkbox"
              className={styles.checkbox}
              checked={check[0]}
              onChange={() => handleCheckBoxChange(0)}
            />
            <label>회원 이용약관에 동의합니다.</label>
          </div>
        </div>
        <div className={styles.subContainer}>
          <div className={styles.title}>개인정보 수집 및 이용</div>
          <div className={styles.content}>
            <div dangerouslySetInnerHTML={{ __html: agreementContent2 }} />
          </div>
          <div className={styles.content}>
            <div dangerouslySetInnerHTML={{ __html: agreementContent3 }} />
          </div>
          <div className={styles.content}>
            <div dangerouslySetInnerHTML={{ __html: agreementContent4 }} />
          </div>
          <div className={styles.checkboxWrapper}>
            <input
              type="checkbox"
              className={styles.checkbox}
              checked={check[1]}
              onChange={() => handleCheckBoxChange(1)}
            />
            <label>개인정보 수집 및 이용약관에 동의합니다.</label>
          </div>
        </div>
        <div className={styles.subContainer}>
          <div className={styles.title}>개인정보 취급위탁</div>
          <div className={styles.content}>
            <div dangerouslySetInnerHTML={{ __html: agreementContent5 }} />
          </div>
          <div className={styles.checkboxWrapper}>
            <input
              type="checkbox"
              className={styles.checkbox}
              checked={check[2]}
              onChange={() => handleCheckBoxChange(2)}
            />
            <label>개인정보 취급위탁에 동의합니다.</label>
          </div>
        </div>
        <div className={styles.btnWrapper}>
          <button className={`${styles.btn} ${active ? styles.activeBtn : null}`} onClick={handleBtnClick}>
            주문 적용
          </button>
        </div>
      </div>
    </>
  )
}
