import React from 'react'
import styles from './link.module.css'

export default function Link({children,text}) {
  return (
    <div className={styles.Link}>
        <div>
        {children}
        </div>
    <a>{text}</a>
    </div>
  )
}
