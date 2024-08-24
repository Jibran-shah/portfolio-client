import React from 'react'
import styles from './progressbar.module.css'

export default function Progressbar({progress,skill}) {
  return (
    <div className={styles.Container}>
        <div className={styles.Heading}>
            <h2>{skill}</h2>
            <h2>{`${progress}%`}</h2>
        </div>
        <div className={styles.PogressContainer}>
            <div className={styles.Progress} style={{"width":`${progress}%`}}></div>
        </div>
    </div>
  )
}
