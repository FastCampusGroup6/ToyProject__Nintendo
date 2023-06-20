import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { SearchQuery, searchQueryState } from '@/recoil/search/queryStringState'
import { generateQueryString } from '@/utils/search'

export default function SearchBar() {
  const naviagate = useNavigate()
  const query = useRecoilValue(searchQueryState)
  const [search, setSearch] = useState('')

  function setSearchText(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value)
  }
  function submitSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const params = generateQueryString<SearchQuery>({ ...query, search })
    naviagate('/search?' + params.toString())
  }

  useEffect(() => {
    setSearch(query.search ? query.search : '')
  }, [query])

  return (
    <div className={styles.container}>
      <form className={styles.cover} onSubmit={submitSearch}>
        <input
          type="text"
          placeholder="검색"
          minLength={2}
          maxLength={20}
          required
          value={search}
          onChange={setSearchText}
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
