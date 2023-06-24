import React from 'react'
import styles from './Loading.module.scss'

interface Props {
  color: string
}

export default function Loading({ color }: Props) {
  return (
    <div>
      <div className={styles.loader} style={{ color: `${color}` }}>
        로딩중..
      </div>
    </div>
  )
}
