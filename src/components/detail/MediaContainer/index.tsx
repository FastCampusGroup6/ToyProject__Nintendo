import React from 'react'
import { Link } from 'react-router-dom'

import { ProductDetail } from '@/types/product'
import Notice from '../Notice'
import styles from './index.module.scss'

type Props = {
  product: ProductDetail
}
export default function MediaContainer({ product }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.backBtnCover}>
        <Link to="/search" className={styles.backBtn}>
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
        <div id="product" dangerouslySetInnerHTML={{ __html: product.description }} />
      )}
      <Notice />
    </div>
  )
}
