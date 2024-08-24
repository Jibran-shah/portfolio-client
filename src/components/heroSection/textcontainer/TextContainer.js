import React from 'react'
import styles from './textContainer.module.css'

export default function TextContainer() {
  return (
    <div className={styles.TextContainer} >
        <h2 className={styles.FirstChild} >Hello, I'm</h2>
        <h1>
            Edward Davis
        </h1>
        <p >
            visual Designer
        </p>
        <button>
            Hire Me
        </button>
    </div>
  )
}
