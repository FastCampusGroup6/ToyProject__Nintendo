import { useRecoilValue } from 'recoil'
import { SearchQuery, searchQueryState } from '@/recoil/search/queryStringState'
import React from 'react'
import styles from './index.module.scss'
import { useNavigate } from 'react-router-dom'
import { generateQueryString } from '@/utils/search'

export default function Filter() {
  const navigation = useNavigate()
  const query = useRecoilValue(searchQueryState)

  function selectOption(e: React.ChangeEvent<HTMLSelectElement>) {
    const queryString = generateQueryString<SearchQuery>({ ...query, sort: e.target.value })
    navigation('/search?' + queryString)
  }

  function cancleGenre() {
    if (!query.search && !query.sort) return navigation('/search')
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { genre: _, ...restQuery } = query
    const params = generateQueryString<SearchQuery>(restQuery)
    navigation('/search?' + params.toString())
  }

  return (
    <div>
      <div className={styles.cover}>
        <div className={styles.fillter}>
          {query.genre && (
            <>
              <span>선택된 장르 : </span>
              <span>{query.genre}</span>
              <button onClick={cancleGenre}>취소하기</button>
            </>
          )}
        </div>
        <div className={styles.sort}>
          <span>정렬 순서 : </span>
          <select value={query.sort ? query.sort : 'asc'} onChange={selectOption}>
            <option value="desc">내림차순</option>
            <option value="asc">오름차순</option>
            <option value="high">높은 가격 순</option>
            <option value="low">낮은 가격 순</option>
          </select>
        </div>
      </div>
    </div>
  )
}
