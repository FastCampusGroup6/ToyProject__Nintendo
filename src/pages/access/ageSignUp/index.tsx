import React from 'react'
import styles from './index.module.scss'

export default function AgeSignUp() {
  return (
    <div className={styles.container}>
      <h1 className={styles['subTitle']}>닌텐도 어카운트</h1>
      <div className={styles['age']}>
        <div className={styles['thirteenUnder']}>
          <a href="/access/signupform">
            <div className={styles['thirteen']}>
              <img
                className={styles['thirteenimg']}
                src={process.env.PUBLIC_URL + '/images/access/13young.png'}
                alt="13young"
              />
            </div>
            <span>13세 이하는 이곳</span>
          </a>
        </div>
        <div className={styles['fourteenPlus']}>
          <a href="/access/signupform">
            <div className={styles['fourteen']}>
              <img
                className={styles['fourteenimg']}
                src={process.env.PUBLIC_URL + '/images/access/14older.png'}
                alt="14older"
              />
            </div>
            <span>14세 이상은 이곳</span>
          </a>
        </div>
      </div>
    </div>
  )
}
