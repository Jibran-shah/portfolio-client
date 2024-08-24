import React from 'react'
import styles from './textContainer.module.css'

export default function TextContainer({heading,description,summary}) {
  return (
    <div className={styles.TextContainer}>
        <h1>{heading}</h1>
        <p>{description}</p>
        <p>{summary}</p>
    </div>
  )
}
