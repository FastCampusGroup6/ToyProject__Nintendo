import React from 'react'
import styles from './index.module.scss'
import './styles.css'
import { ProductDetail } from '@/types/product'
import Notice from '../Notice'

type Props = {
  product: ProductDetail
}
export default function MediaContainer({ product }: Props) {
  return (
    <div className={styles.container}>
      <div>
        <h1>{product.title}</h1>
        <p>한국 숨텐도</p>
      </div>
      <div className={styles.imgCover}>
        <img src={`${product.thumbnail}`} alt={`${product.title} thumbnail`} />
      </div>
      <div id="product" dangerouslySetInnerHTML={{ __html: product.description }} />
      <Notice />
    </div>
  )
}
