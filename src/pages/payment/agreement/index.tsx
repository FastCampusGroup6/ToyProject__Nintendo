import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import PayProcessFlow from '@/components/payment/PayProcessFlow'

export default function Agreement() {
  const [check, setCheck] = useState([false, false, false] as boolean[])
  const [active, setActive] = useState(false)

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
    <div className={styles.container}>
      <PayProcessFlow />
      <div className={styles.agreement}>
        <div className={styles.subContainer}>
          <div className={styles.title}>회원 이용약관</div>
          <div className={styles.content}>
            제 1장 총 칙
            <br />
            제 1조 (목적)
            <br />
            본 약관은 머시기머시기 어쩌구 저쩌구
            <br />
            <br />
            제 2조 (용어의 정의)
            <br />
            이 편지는 영국에서 시작하여 지구를 몇바퀴를 돌아 무슨무슨 나라를 거쳐 왔으며,
            <br />
            편지를 받은 시점으로부터 3일 내에 다른 사람 20명에게 돌리지 않으면 <br />
            변기물이 안내려가는 불상사에 빠지며 어쩌구저쩌구..
            <br />
            <br />
            제 3조 (상품 판매의 내용 및 변경)
            <br /> 이 편지는 영국에서 시작하여 지구를 몇바퀴를 돌아 무슨무슨 나라를 거쳐 왔으며,
            <br /> 편지를 받은 시점으로부터 3일 내에 다른 사람 20명에게 돌리지 않으면 <br />
            변기물이 안내려가는 불상사에 빠지며 어쩌구저쩌구.. 이 편지는 영국에서 시작하여 지구를 몇바퀴를 돌아 무슨무슨
            나라를 거쳐 왔으며,
            <br /> 편지를 받은 시점으로부터 3일 내에 다른 사람 20명에게 돌리지 않으면 <br />
            변기물이 안내려가는 불상사에 빠지며 어쩌구저쩌구.. 이 편지는 영국에서 시작하여 지구를 몇바퀴를 돌아 무슨무슨
            나라를 거쳐 왔으며,
            <br /> 편지를 받은 시점으로부터 3일 내에 다른 사람 20명에게 돌리지 않으면 <br />
            변기물이 안내려가는 불상사에 빠지며 어쩌구저쩌구.. 이 편지는 영국에서 시작하여 지구를 몇바퀴를 돌아 무슨무슨
            나라를 거쳐 왔으며,
            <br /> 편지를 받은 시점으로부터 3일 내에 다른 사람 20명에게 돌리지 않으면 <br />
            변기물이 안내려가는 불상사에 빠지며 어쩌구저쩌구.. 이 편지는 영국에서 시작하여 지구를 몇바퀴를 돌아 무슨무슨
            나라를 거쳐 왔으며,
            <br /> 편지를 받은 시점으로부터 3일 내에 다른 사람 20명에게 돌리지 않으면 <br />
            변기물이 안내려가는 불상사에 빠지며 어쩌구저쩌구.. 이 편지는 영국에서 시작하여 지구를 몇바퀴를 돌아 무슨무슨
            나라를 거쳐 왔으며,
            <br /> 편지를 받은 시점으로부터 3일 내에 다른 사람 20명에게 돌리지 않으면 <br />
            변기물이 안내려가는 불상사에 빠지며 어쩌구저쩌구.. 이 편지는 영국에서 시작하여 지구를 몇바퀴를 돌아 무슨무슨
            나라를 거쳐 왔으며,
            <br /> 편지를 받은 시점으로부터 3일 내에 다른 사람 20명에게 돌리지 않으면 <br />
            변기물이 안내려가는 불상사에 빠지며 어쩌구저쩌구..
            <br />
            <br />제 4조 (행운의 편지)
            <br /> 이 편지는 영국에서 시작하여 지구를 몇바퀴를 돌아 무슨무슨 나라를 거쳐 왔으며,
            <br /> 편지를 받은 시점으로부터 3일 내에 다른 사람 20명에게 돌리지 않으면 <br />
            변기물이 안내려가는 불상사에 빠지며 어쩌구저쩌구.. 이 편지는 영국에서 시작하여 지구를 몇바퀴를 돌아 무슨무슨
            나라를 거쳐 왔으며,
            <br /> 편지를 받은 시점으로부터 3일 내에 다른 사람 20명에게 돌리지 않으면 <br />
            변기물이 안내려가는 불상사에 빠지며 어쩌구저쩌구.. 이 편지는 영국에서 시작하여 지구를 몇바퀴를 돌아 무슨무슨
            나라를 거쳐 왔으며,
            <br /> 편지를 받은 시점으로부터 3일 내에 다른 사람 20명에게 돌리지 않으면 <br />
            변기물이 안내려가는 불상사에 빠지며 어쩌구저쩌구.. 이 편지는 영국에서 시작하여 지구를 몇바퀴를 돌아 무슨무슨
            나라를 거쳐 왔으며,
            <br /> 편지를 받은 시점으로부터 3일 내에 다른 사람 20명에게 돌리지 않으면 <br />
            변기물이 안내려가는 불상사에 빠지며 어쩌구저쩌구.. 이 편지는 영국에서 시작하여 지구를 몇바퀴를 돌아 무슨무슨
            나라를 거쳐 왔으며,
            <br /> 편지를 받은 시점으로부터 3일 내에 다른 사람 20명에게 돌리지 않으면 <br />
            변기물이 안내려가는 불상사에 빠지며 어쩌구저쩌구.. 이 편지는 영국에서 시작하여 지구를 몇바퀴를 돌아 무슨무슨
            나라를 거쳐 왔으며,
            <br /> 편지를 받은 시점으로부터 3일 내에 다른 사람 20명에게 돌리지 않으면 <br />
            변기물이 안내려가는 불상사에 빠지며 어쩌구저쩌구.. 이 편지는 영국에서 시작하여 지구를 몇바퀴를 돌아 무슨무슨
            나라를 거쳐 왔으며,
            <br /> 편지를 받은 시점으로부터 3일 내에 다른 사람 20명에게 돌리지 않으면 <br />
            변기물이 안내려가는 불상사에 빠지며 어쩌구저쩌구..
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
            제 1장 총 칙
            <br />
            제 1조 (목적)
            <br />
            본 약관은 머시기머시기 어쩌구 저쩌구
            <br />
            <br />
            제 2조 (용어의 정의)
            <br />
            이 편지는 영국에서 시작하여 지구를 몇바퀴를 돌아 무슨무슨 나라를 거쳐 왔으며,
            <br />
            편지를 받은 시점으로부터 3일 내에 다른 사람 20명에게 돌리지 않으면 <br />
            변기물이 안내려가는 불상사에 빠지며 어쩌구저쩌구..
            <br />
            <br />
            제 3조 (상품 판매의 내용 및 변경)
            <br /> 이 편지는 영국에서 시작하여 지구를 몇바퀴를 돌아 무슨무슨 나라를 거쳐 왔으며,
            <br /> 편지를 받은 시점으로부터 3일 내에 다른 사람 20명에게 돌리지 않으면 <br />
            변기물이 안내려가는 불상사에 빠지며 어쩌구저쩌구.. 이 편지는 영국에서 시작하여 지구를 몇바퀴를 돌아 무슨무슨
            나라를 거쳐 왔으며,
            <br /> 편지를 받은 시점으로부터 3일 내에 다른 사람 20명에게 돌리지 않으면 <br />
            변기물이 안내려가는 불상사에 빠지며 어쩌구저쩌구.. 이 편지는 영국에서 시작하여 지구를 몇바퀴를 돌아 무슨무슨
            나라를 거쳐 왔으며,
            <br /> 편지를 받은 시점으로부터 3일 내에 다른 사람 20명에게 돌리지 않으면 <br />
            변기물이 안내려가는 불상사에 빠지며 어쩌구저쩌구.. 이 편지는 영국에서 시작하여 지구를 몇바퀴를 돌아 무슨무슨
            나라를 거쳐 왔으며,
            <br /> 편지를 받은 시점으로부터 3일 내에 다른 사람 20명에게 돌리지 않으면 <br />
            변기물이 안내려가는 불상사에 빠지며 어쩌구저쩌구.. 이 편지는 영국에서 시작하여 지구를 몇바퀴를 돌아 무슨무슨
            나라를 거쳐 왔으며,
            <br /> 편지를 받은 시점으로부터 3일 내에 다른 사람 20명에게 돌리지 않으면 <br />
            변기물이 안내려가는 불상사에 빠지며 어쩌구저쩌구.. 이 편지는 영국에서 시작하여 지구를 몇바퀴를 돌아 무슨무슨
            나라를 거쳐 왔으며,
            <br /> 편지를 받은 시점으로부터 3일 내에 다른 사람 20명에게 돌리지 않으면 <br />
            변기물이 안내려가는 불상사에 빠지며 어쩌구저쩌구.. 이 편지는 영국에서 시작하여 지구를 몇바퀴를 돌아 무슨무슨
            나라를 거쳐 왔으며,
            <br /> 편지를 받은 시점으로부터 3일 내에 다른 사람 20명에게 돌리지 않으면 <br />
            변기물이 안내려가는 불상사에 빠지며 어쩌구저쩌구..
            <br />
            <br />제 4조 (행운의 편지)
            <br /> 이 편지는 영국에서 시작하여 지구를 몇바퀴를 돌아 무슨무슨 나라를 거쳐 왔으며,
            <br /> 편지를 받은 시점으로부터 3일 내에 다른 사람 20명에게 돌리지 않으면 <br />
            변기물이 안내려가는 불상사에 빠지며 어쩌구저쩌구.. 이 편지는 영국에서 시작하여 지구를 몇바퀴를 돌아 무슨무슨
            나라를 거쳐 왔으며,
            <br /> 편지를 받은 시점으로부터 3일 내에 다른 사람 20명에게 돌리지 않으면 <br />
            변기물이 안내려가는 불상사에 빠지며 어쩌구저쩌구.. 이 편지는 영국에서 시작하여 지구를 몇바퀴를 돌아 무슨무슨
            나라를 거쳐 왔으며,
            <br /> 편지를 받은 시점으로부터 3일 내에 다른 사람 20명에게 돌리지 않으면 <br />
            변기물이 안내려가는 불상사에 빠지며 어쩌구저쩌구.. 이 편지는 영국에서 시작하여 지구를 몇바퀴를 돌아 무슨무슨
            나라를 거쳐 왔으며,
            <br /> 편지를 받은 시점으로부터 3일 내에 다른 사람 20명에게 돌리지 않으면 <br />
            변기물이 안내려가는 불상사에 빠지며 어쩌구저쩌구.. 이 편지는 영국에서 시작하여 지구를 몇바퀴를 돌아 무슨무슨
            나라를 거쳐 왔으며,
            <br /> 편지를 받은 시점으로부터 3일 내에 다른 사람 20명에게 돌리지 않으면 <br />
            변기물이 안내려가는 불상사에 빠지며 어쩌구저쩌구.. 이 편지는 영국에서 시작하여 지구를 몇바퀴를 돌아 무슨무슨
            나라를 거쳐 왔으며,
            <br /> 편지를 받은 시점으로부터 3일 내에 다른 사람 20명에게 돌리지 않으면 <br />
            변기물이 안내려가는 불상사에 빠지며 어쩌구저쩌구.. 이 편지는 영국에서 시작하여 지구를 몇바퀴를 돌아 무슨무슨
            나라를 거쳐 왔으며,
            <br /> 편지를 받은 시점으로부터 3일 내에 다른 사람 20명에게 돌리지 않으면 <br />
            변기물이 안내려가는 불상사에 빠지며 어쩌구저쩌구..
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
            제 1장 총 칙
            <br />
            제 1조 (목적)
            <br />
            본 약관은 머시기머시기 어쩌구 저쩌구
            <br />
            <br />
            제 2조 (용어의 정의)
            <br />
            이 편지는 영국에서 시작하여 지구를 몇바퀴를 돌아 무슨무슨 나라를 거쳐 왔으며,
            <br />
            편지를 받은 시점으로부터 3일 내에 다른 사람 20명에게 돌리지 않으면 <br />
            변기물이 안내려가는 불상사에 빠지며 어쩌구저쩌구..
            <br />
            <br />
            제 3조 (상품 판매의 내용 및 변경)
            <br /> 이 편지는 영국에서 시작하여 지구를 몇바퀴를 돌아 무슨무슨 나라를 거쳐 왔으며,
            <br /> 편지를 받은 시점으로부터 3일 내에 다른 사람 20명에게 돌리지 않으면 <br />
            변기물이 안내려가는 불상사에 빠지며 어쩌구저쩌구.. 이 편지는 영국에서 시작하여 지구를 몇바퀴를 돌아 무슨무슨
            나라를 거쳐 왔으며,
            <br /> 편지를 받은 시점으로부터 3일 내에 다른 사람 20명에게 돌리지 않으면 <br />
            변기물이 안내려가는 불상사에 빠지며 어쩌구저쩌구.. 이 편지는 영국에서 시작하여 지구를 몇바퀴를 돌아 무슨무슨
            나라를 거쳐 왔으며,
            <br /> 편지를 받은 시점으로부터 3일 내에 다른 사람 20명에게 돌리지 않으면 <br />
            변기물이 안내려가는 불상사에 빠지며 어쩌구저쩌구.. 이 편지는 영국에서 시작하여 지구를 몇바퀴를 돌아 무슨무슨
            나라를 거쳐 왔으며,
            <br /> 편지를 받은 시점으로부터 3일 내에 다른 사람 20명에게 돌리지 않으면 <br />
            변기물이 안내려가는 불상사에 빠지며 어쩌구저쩌구.. 이 편지는 영국에서 시작하여 지구를 몇바퀴를 돌아 무슨무슨
            나라를 거쳐 왔으며,
            <br /> 편지를 받은 시점으로부터 3일 내에 다른 사람 20명에게 돌리지 않으면 <br />
            변기물이 안내려가는 불상사에 빠지며 어쩌구저쩌구.. 이 편지는 영국에서 시작하여 지구를 몇바퀴를 돌아 무슨무슨
            나라를 거쳐 왔으며,
            <br /> 편지를 받은 시점으로부터 3일 내에 다른 사람 20명에게 돌리지 않으면 <br />
            변기물이 안내려가는 불상사에 빠지며 어쩌구저쩌구.. 이 편지는 영국에서 시작하여 지구를 몇바퀴를 돌아 무슨무슨
            나라를 거쳐 왔으며,
            <br /> 편지를 받은 시점으로부터 3일 내에 다른 사람 20명에게 돌리지 않으면 <br />
            변기물이 안내려가는 불상사에 빠지며 어쩌구저쩌구..
            <br />제 4조 (행운의 편지)
            <br /> 이 편지는 영국에서 시작하여 지구를 몇바퀴를 돌아 무슨무슨 나라를 거쳐 왔으며,
            <br /> 편지를 받은 시점으로부터 3일 내에 다른 사람 20명에게 돌리지 않으면 <br />
            변기물이 안내려가는 불상사에 빠지며 어쩌구저쩌구.. 이 편지는 영국에서 시작하여 지구를 몇바퀴를 돌아 무슨무슨
            나라를 거쳐 왔으며,
            <br /> 편지를 받은 시점으로부터 3일 내에 다른 사람 20명에게 돌리지 않으면 <br />
            변기물이 안내려가는 불상사에 빠지며 어쩌구저쩌구.. 이 편지는 영국에서 시작하여 지구를 몇바퀴를 돌아 무슨무슨
            나라를 거쳐 왔으며,
            <br /> 편지를 받은 시점으로부터 3일 내에 다른 사람 20명에게 돌리지 않으면 <br />
            변기물이 안내려가는 불상사에 빠지며 어쩌구저쩌구.. 이 편지는 영국에서 시작하여 지구를 몇바퀴를 돌아 무슨무슨
            나라를 거쳐 왔으며,
            <br /> 편지를 받은 시점으로부터 3일 내에 다른 사람 20명에게 돌리지 않으면 <br />
            변기물이 안내려가는 불상사에 빠지며 어쩌구저쩌구.. 이 편지는 영국에서 시작하여 지구를 몇바퀴를 돌아 무슨무슨
            나라를 거쳐 왔으며,
            <br /> 편지를 받은 시점으로부터 3일 내에 다른 사람 20명에게 돌리지 않으면 <br />
            변기물이 안내려가는 불상사에 빠지며 어쩌구저쩌구.. 이 편지는 영국에서 시작하여 지구를 몇바퀴를 돌아 무슨무슨
            나라를 거쳐 왔으며,
            <br /> 편지를 받은 시점으로부터 3일 내에 다른 사람 20명에게 돌리지 않으면 <br />
            변기물이 안내려가는 불상사에 빠지며 어쩌구저쩌구.. 이 편지는 영국에서 시작하여 지구를 몇바퀴를 돌아 무슨무슨
            나라를 거쳐 왔으며,
            <br /> 편지를 받은 시점으로부터 3일 내에 다른 사람 20명에게 돌리지 않으면 <br />
            변기물이 안내려가는 불상사에 빠지며 어쩌구저쩌구..
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
          <button className={`${styles.btn} ${active ? styles.activeBtn : null}`}>주문 적용</button>
        </div>
      </div>
    </div>
  )
}
