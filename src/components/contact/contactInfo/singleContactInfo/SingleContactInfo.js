import React from 'react'
import styles from './singlecontactinfo.module.css'

export default function SingleContactInfo({Logo,type,links}) {
  return (
    <div className={styles.SingleContactInfo}>
        <div className={styles.LogoContainer}>
            <Logo className={styles.Logo}/>
        </div>
        <div className={styles.Info}>
            <h1>{type}</h1>
            <>
            {
                links.map((item)=>{
                    return (<p key={item}>
                        {item}
                    </p>)
                })
            }
            </>
        </div>
    </div>
  )
}
