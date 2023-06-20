import { SearchProductsResponse } from '@/types/product'
import React from 'react'

import styles from './index.module.scss'
import { Link } from 'react-router-dom'

type Props = {
  product: SearchProductsResponse[0]
}
export default function Product({ product }: Props) {
  return (
    <li className={styles.item}>
      <Link to={`/detail/${product.id}`}>
        <div className={styles.imgCover}>
          <img src={product.thumbnail ? product.thumbnail : '/image/search/image-not-found.png'} alt={product.title} />
        </div>
        <div className={styles.contentCover}>
          <p>
            {product.tags.map((tag) => (
              <span className={styles.tag} key={tag}>
                {tag}
              </span>
            ))}
          </p>
          <p className={styles.price}>{`₩${product.price}`}</p>
        </div>
        <p className={styles.itemTitle}>{product.title}</p>
      </Link>
    </li>
  )
}
