import React from 'react'

import styles from './index.module.scss'
import { Link } from 'react-router-dom'

const softwares = [
  {
    id: 's123123',
    title: '젤다의 전설 티어스 오브 더 킹덤',
    thumbnail: '/images/home/softwares/zelda_sw.webp',
    age: '12',
    hardware: 'Sumfendo Suitch',
    price: '59,800',
    publisher: '한국 닌텐도',
    release: '2023.5.12',
    softcategory: '패키지 버전 / 다운로드 버전 / 체험판'
  },
  {
    id: 's123124',
    title: '별의 커비 Wii 디럭스',
    thumbnail: '/images/home/softwares/starcurbi_sw.webp',
    age: '12',
    hardware: 'Sumtendo Suitch',
    price: '59,800',
    publisher: '한국 닌텐도',
    release: '2023.5.12',
    softcategory: '패키지 버전 / 다운로드 버전 / 체험판'
  },
  {
    id: 's123126',
    title: '베요네타 오리진: 세레자와 길을 잃은 악마',
    thumbnail: '/images/home/softwares/cereze_sw.webp',
    age: '12',
    hardware: 'Sumtendo Suitch',
    price: '59,800',
    publisher: '한국 닌텐도',
    release: '2023.5.12',
    softcategory: '패키지 버전 / 다운로드 버전 / 체험판'
  },
  {
    id: 's122126',
    title: '파이어 엠블렘 Engage',
    thumbnail: '/images/home/softwares/fire_sw.webp',
    age: '12',
    hardware: 'Sumtendo Suitch',
    price: '59,800',
    publisher: '한국 닌텐도',
    release: '2023.5.12',
    softcategory: '패키지 버전 / 다운로드 버전 / 체험판'
  },
  {
    id: 's723126',
    title: 'Nintendo Switch Sports',
    thumbnail: '/images/home/softwares/sports_sw.webp',
    age: '12',
    hardware: 'Sumtendo Suitch',
    price: '59,800',
    publisher: '한국 닌텐도',
    release: '2023.5.12',
    softcategory: '패키지 버전 / 다운로드 버전 / 체험판'
  },
  {
    id: 's923126',
    title: '별의 커비 디스커버리',
    thumbnail: '/images/home/softwares/start_sw.webp',
    age: '12',
    hardware: 'Sumtendo Suitch',
    price: '59,800',
    publisher: '한국 닌텐도',
    release: '2023.5.12',
    softcategory: '패키지 버전 / 다운로드 버전 / 체험판'
  },
  {
    id: 's129196',
    title: '링 피트 어드벤처',
    thumbnail: '/images/home/softwares/ringfit_sw.webp',
    age: '12',
    hardware: 'Sumtendo Suitch',
    price: '59,800',
    publisher: '한국 닌텐도',
    release: '2023.5.12',
    softcategory: '패키지 버전 / 다운로드 버전 / 체험판'
  },
  {
    id: 's123999',
    title: '젤다의 전설 티어스 오브 더 킹덤',
    thumbnail: '/images/home/softwares/zelda_sw.webp',
    age: '12',
    hardware: 'Sumfendo Suitch',
    price: '59,800',
    publisher: '한국 닌텐도',
    release: '2023.5.12',
    softcategory: '패키지 버전 / 다운로드 버전 / 체험판'
  }
]

export default function Softwares() {
  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <h2>소프트웨어</h2>
        <p>Pick-up</p>
      </div>
      <ul className={styles.list}>
        {softwares.map((sw) => {
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
