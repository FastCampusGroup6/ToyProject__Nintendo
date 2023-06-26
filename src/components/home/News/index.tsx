import React from 'react'
import { NEWS } from '@/constants/home'
import styles from './index.module.scss'

export default function News() {
  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <h2>새롭게 알려드립니다.</h2>
        <p>News & Update</p>
      </div>
      <ul className={styles.list}>
        {NEWS.map((item) => {
          return (
            <li className={styles.item} key={item.id}>
              <a href={item.link} target="_blank" rel="noreferrer">
                <div>
                  <img src={`${item.thumbnail}`} alt="news thumbnail" />
                </div>
                <p className={styles.title}>{item.title}</p>
                <div className={styles.info}>
                  <div>
                    <p>{item.category}</p>
                    <p>{item.createdAt}</p>
                  </div>
                  <div className={styles.arrow}>{'>'}</div>
                </div>
              </a>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
