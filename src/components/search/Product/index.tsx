import React from 'react'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { SearchProductsResponse } from '@/types/product'
import styles from './index.module.scss'

type Props = {
  product: SearchProductsResponse[0]
}
export default function Product({ product }: Props) {
  const price = product.price?.toLocaleString('ko-KR', { style: 'currency', currency: 'KRW' })
  return (
    <li className={styles.item}>
      <div className={styles.cover}>
        <Link to={`/detail/${product.id}`}>
          <LazyLoadImage
            src={product.thumbnail ? product.thumbnail : '/image/search/image-not-found.png'}
            alt={product.title}
          />
          <div className={styles.contentCover}>
            <p>
              {product.tags.map((tag) => (
                <span className={styles.tag} key={tag}>
                  {tag}
                </span>
              ))}
            </p>
            <p className={styles.price}>{price}</p>
          </div>
          <p className={styles.itemTitle}>{product.title}</p>
        </Link>
      </div>
    </li>
  )
}
