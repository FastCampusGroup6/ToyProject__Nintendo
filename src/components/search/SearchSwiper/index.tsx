import React from 'react'
import styles from './index.module.scss'

// * Swiper 관련 import입니다.
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Parallax } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import './swiper.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import 'swiper/css/a11y'

export default function SearchSwiper() {
  return (
    <section id="searchSwiper" className={styles.container}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Parallax]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{
          clickable: true,
          renderBullet(idx, className) {
            return `
            <div class="${className} ${styles.bullet}">
              <span></span>
            </div>`
          }
        }}
        autoplay={{
          delay: 3000
        }}
      >
        <SwiperSlide className={styles.swiperItem}>
          <img src="/images/search/swiper_sports.jpg" alt="sports" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperItem}>
          <img src="/images/search/swiper_xeno3PC.jpg" alt="xeno3PC" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperItem}>
          <img src="/images/search/swiper_poketmon_zero.png" alt="poketmon_zero" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperItem}>
          <img src="/images/search/swiper_mariokart8.jpg" alt="mariokart8" />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}
