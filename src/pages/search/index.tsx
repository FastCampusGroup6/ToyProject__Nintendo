import React, { useEffect, Suspense } from 'react'
import { useSetRecoilState } from 'recoil'
import { SearchQuery, searchQueryState } from '@/recoil/search/queryStringState'

import { useLocation } from 'react-router-dom'

import SearchSwiper from '@/components/search/SearchSwiper'
import Genre from '@/components/search/Genre'
import SearchBar from '@/components/search/SearchBar'
import Banner from '@/components/search/Banner'
import ProductList from '@/components/search/ProductList'

import styles from './index.module.scss'

const banners = [
  {
    id: '123',
    src: '/images/search/mario_banner.jpg',
    path: '/search/mario',
    title: 'mario software'
  }
]
export default function Search() {
  const location = useLocation()
  const setQuery = useSetRecoilState(searchQueryState)

  useEffect(() => {
    setQuery(() => {
      const params = new URLSearchParams(location.search)
      const query = {} as SearchQuery
      for (const [key, value] of params) {
        query[key] = value
      }
      return { ...query }
    })
  }, [location.search])

  return (
    <main className={styles.container}>
      <SearchSwiper />
      <div className={styles.containerWrapper}>
        <div className={styles.cover}>
          <Genre />
          <div>
            {banners.map((banner) => (
              <Banner key={banner.id} banner={banner} />
            ))}
            <SearchBar />
            <Suspense fallback={<div>Loading...</div>}>
              <ProductList />
            </Suspense>
          </div>
        </div>
      </div>
    </main>
  )
}
