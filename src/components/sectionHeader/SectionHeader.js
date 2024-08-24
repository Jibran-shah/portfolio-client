import React from 'react'
import styles from './sectionheader.module.css'

export default function SectionHeader({section}) {
  return (
    <div className={styles.Header}>
        <h1>{section}</h1>
      </div>
  )
}
