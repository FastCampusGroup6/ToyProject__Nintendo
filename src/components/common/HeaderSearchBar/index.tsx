import React, { useState } from 'react'
import styles from './index.module.scss'
import { SEARCH_MAX_LENGTH } from '@/constants/search'

type Props = {
  isOpen: boolean
  onSearch: (searchText: string) => void
}
export default function HeaderSearchBar({ isOpen, onSearch }: Props) {
  const [searchText, setSearchText] = useState('')

  function handleSearchText(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchText(e.target.value)
  }

  function handleSubmitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    onSearch(searchText)
    setSearchText('')
  }

  return (
    <div className={[isOpen ? styles.visibleContainer : styles.hiddenContainer, styles.container].join(' ')}>
      <form className={styles.searchForm} onSubmit={handleSubmitForm}>
        <input
          className={styles.textInput}
          type="text"
          value={searchText}
          onChange={handleSearchText}
          placeholder="검색어를 입력해 주세요"
          maxLength={SEARCH_MAX_LENGTH}
        />
        <input className={styles.submit} type="submit" value="검색" />
        <img
          className={styles.icon}
          width="20px"
          height="20px"
          src="/images/search/search_icon.svg"
          alt="search icon"
        />
      </form>
    </div>
  )
}
