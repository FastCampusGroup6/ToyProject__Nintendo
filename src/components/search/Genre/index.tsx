import React from 'react'

import styles from './index.module.scss'
import { Link } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { SearchQuery, searchQueryState } from '@/recoil/search/queryStringState'
import { GENERS } from '@/constants/search'
import { generateQueryString } from '@/utils/search'

export default function Genre() {
  const query = useRecoilValue(searchQueryState)

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>장르</h1>
      <ul className={styles.genreList}>
        {GENERS.map((genre) => {
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
