import React from 'react'
import styles from './container.module.css'

export default function container({children,style}) {
  return (
    <section className={styles.Container} style={{...style}}>{children}</section>
  )
}
