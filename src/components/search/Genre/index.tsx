import React from 'react'
import styles from './index.module.scss'
import { Link } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { SearchQuery, searchQueryState } from '@/recoil/search/queryStringState'
import { generateQueryString } from '@/utils/search'

const genres = [
  '액션',
  'RPG',
  '어드벤처',
  '파티',
  '전략',
  '음악',
  '스포츠',
  '아케이드',
  '격투',
  '레이싱',
  '시뮬레이션',
  '슈팅',
  '보드',
  '트레이닝',
  '학습',
  '실용',
  '커뮤니케이션',
  '기타'
]

export default function Genre() {
  const query = useRecoilValue(searchQueryState)

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>장르</h1>
      <ul className={styles.genreList}>
        {genres.map((genre) => {
          const sort = query.sort ? query.sort : 'asc'
          const queryString = generateQueryString<SearchQuery>({ sort, genre })
          let classes = `${styles.genre}`
          if (genre === query.genre) classes += ` ${styles.current}`
          return (
            <li className={classes} key={genre}>
              <Link to={'/search?' + queryString}>{genre}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
