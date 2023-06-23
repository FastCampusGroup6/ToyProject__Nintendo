import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { SearchQuery, searchQueryState } from '@/recoil/search/queryStringState'
import { generateQueryString } from '@/utils/search'
import { SEARCH_MAX_LENGTH } from '@/constants/search'
import styles from './index.module.scss'

export default function SearchBar() {
  const navigate = useNavigate()
  const query = useRecoilValue(searchQueryState)
  const [search, setSearch] = useState('')

  function handleChangeSearchInput(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value)
  }
  // * 쿼리 스트링을 생성하고 페이지를 이동합니다.
  function movePage(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const params = generateQueryString<SearchQuery>({ ...query, search })
    navigate('/search?' + params.toString())
  }

  // * 검색 페이지내에서 URL이 변경될 때 검색어 recoil에 저장된 search 파라메터로 초기화합니다.
  useEffect(() => {
    setSearch(query.search ? query.search : '')
  }, [query])

  return (
    <div className={styles.container}>
      <form className={styles.cover} onSubmit={movePage}>
        <input
          type="text"
          placeholder="검색"
          maxLength={SEARCH_MAX_LENGTH}
          value={search}
          onChange={handleChangeSearchInput}
        />
        <label htmlFor="submitBtn">
          <img
            className={styles.icon}
            width="20px"
            height="20px"
            src="/images/search/search_icon.svg"
            alt="search icon"
          />
        </label>
        <input id="submitBtn" className={styles.submit} type="submit" value="" />
      </form>
    </div>
  )
}
//
