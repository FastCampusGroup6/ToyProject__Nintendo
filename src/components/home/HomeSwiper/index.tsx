import React from 'react'
import styles from './index.module.scss'
import { SLIDE_ITEMS } from '@/constants/home'
// * Swiper 관련 import 입니다.
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Parallax } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import './swiper.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import 'swiper/css/a11y'

export default function HomeSwiper() {
  return (
    <section className={styles.container}>
      <Swiper
        className={styles.swiper}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Parallax]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{
          clickable: true,
          renderBullet(idx, className) {
            return `
            <div class="${className} ${styles.bullet}">
              <div><img src="${SLIDE_ITEMS[idx].icon}" alt="${SLIDE_ITEMS[idx].name}" /></div>
              <p>${SLIDE_ITEMS[idx].title}</p>
            </div>`
          }
        }}
        autoplay={{
          delay: 3000
        }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide className={styles.swiperItem}>
          <img src="/images/home/poketmon_slide.webp" alt="poketmon" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperItem}>
          <img src="/images/home/splatoon3_slide.webp" alt="splatoon3" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperItem}>
          <img src="/images/home/zelda_slide_edition.webp" alt="zelda edition" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperItem}>
          <img src="/images/home/zelda_slide.webp" alt="zelda slide" />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}
