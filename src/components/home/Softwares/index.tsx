import React from 'react'
import { Link } from 'react-router-dom'
import { SOFTWARES } from '@/constants/home'
import styles from './index.module.scss'

export default function Softwares() {
  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <h2>소프트웨어</h2>
        <p>Pick-up</p>
      </div>
      <ul className={styles.list}>
        {SOFTWARES.map((sw) => {
          return (
            <li key={sw.id} className={styles.item}>
              <a href="/">
                <div>
                  <img src={`${sw.thumbnail}`} alt="software thumbnail" />
                </div>
                <div>
                  <p>{sw.title}</p>
                </div>
                <div className={styles.leftInfo}>
                  <div>
                    <p>{sw.hardware}</p>
                    <p>{sw.release}</p>
                    <p>{sw.publisher}</p>
                    <p>{sw.softcategory}</p>
                  </div>
                  <div className={styles.rightInfo}>
                    <p>{sw.age}</p>
                    <p>{'>'}</p>
                  </div>
                </div>
              </a>
            </li>
          )
        })}
      </ul>
      <div className={styles.moreBtnCover}>
        <Link className={styles.moreBtn} to="/search">
          {'더보기 >'}
        </Link>
      </div>
    </section>
  )
}
