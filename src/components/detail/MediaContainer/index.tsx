import React from 'react'
import { Link } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { searchQueryState } from '@/recoil/search/queryStringState'
import { generateQueryString } from '@/utils/search'
import { ProductDetail } from '@/types/product'
import Notice from '@/components/detail/Notice'
import styles from './index.module.scss'

type Props = {
  product: ProductDetail
}
export default function MediaContainer({ product }: Props) {
  const query = useRecoilValue(searchQueryState)

  return (
    <div className={styles.container}>
      <div className={styles.backBtnCover}>
        <Link to={`/search?${generateQueryString(query)}`} className={styles.backBtn}>
          {'< 리스트로 돌아가기'}
        </Link>
      </div>
      <div>
        <h1 className={styles.title}>{product.title}</h1>
        <p className={styles.provider}>한국 숨텐도</p>
      </div>
      <div className={styles.imgCover}>
        <img src={`${product.thumbnail}`} alt={`${product.title} thumbnail`} />
      </div>
      {product.description === 'no description' ? (
        <></>
      ) : (
        <div className={styles.description} dangerouslySetInnerHTML={{ __html: product.description }} />
      )}
      <Notice />
    </div>
  )
}
