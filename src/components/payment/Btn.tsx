import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Btn.module.scss'

export type BtnProps = {
  text: string
  targetURL: string
  active?: boolean
}

export default function Btn({ text, targetURL, active }: BtnProps) {
  const navigate = useNavigate()

  return (
    <div>
      <div className={styles.container}>
        <button
          className={styles.btn}
          onClick={() => {
            navigate(`${targetURL}`)
          }}
          disabled={active}
          style={active ? { backgroundColor: '#e6011076', cursor: 'default' } : {}}
        >
          {text}
        </button>
      </div>
    </div>
  )
}
