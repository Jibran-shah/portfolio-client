import React from 'react'
import styles from './review.module.css'
import Profile from './profile/Profile'

export default function Review({quote,imgSrc,profession,name}) {
  return (
    <div className={styles.Review}>
        <div  className={styles.QuoteContainer}>
            <p className={styles.Quote}>
            {quote}
            </p>
        </div >
        <Profile imgSrc={imgSrc} profession={profession} name={name}/>
    </div>
  )
}
