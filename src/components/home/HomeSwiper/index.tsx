import React from 'react'
import styles from './index.module.scss'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Parallax } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import './swiper.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import 'swiper/css/a11y'

const sildeItems = [
  {
    name: 'poketmon',
    url: '/images/home/poketmon_slide.webp',
    icon: '/images/home/sv_icon.webp',
    title: '포켓몬스터 스칼렛 & 바이올렛'
  },
  {
    name: 'splatoon3',
    url: '/images/home/splatoon3_slide.webp',
    icon: '/images/home/splatoon3_icon.webp',
    title: '스플레툰 3'
  },
  {
    name: 'zelda edition',
    url: '/images/home/zelda_slide_edition.webp',
    icon: '/images/home/zelda_totk_hard_icon.webp',
    title: '젤다의 전설 티어스 오브 더 킹덤 에디션'
  },
  {
    name: 'zelda slide',
    url: '/images/home/zelda_slide.webp',
    icon: '/images/home/zelda_totk_icon.webp',
    title: '젤다의 전설 티어스 오브 더 킹덤'
  }
]

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
              <div><img src="${sildeItems[idx].icon}" alt="${sildeItems[idx].name}" /></div>
              <p>${sildeItems[idx].title}</p>
            </div>`
          }
        }}
        autoplay={{
          delay: 3000
        }}
        scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={fillProgressiveBar}

        // watchSlidesProgress
        // onProgress={(swiper, progress) => {
        //   // todo : nintendo처럼 hover시 slide change가 안 되려면 fillProgressiveBar함수 완성하기
        //   (progress)
        // }}
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
