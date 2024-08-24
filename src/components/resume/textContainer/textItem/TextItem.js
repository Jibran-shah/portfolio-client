import React from 'react'
import styles from './textItem.module.css'

export default function TextItem({heading,from,date,description}) {
  return (
    <div className={styles.TextItem}>
        <h1 className={styles.Heading}>{heading}</h1>
        <p className={styles.Date}>{date}</p>
        <h2 className={styles.From}>{from}</h2>
        <p className={styles.Description}>{description}</p>
    </div>
  )
}
