import React from 'react'
import styles from './textContainer.module.css'
import TextItem from './textItem/TextItem'

export default function TextContainer({heading,items}) {
  return (
    <div className={styles.TextContainer}>
        <h1 className={styles.Header}>{heading}</h1>
        <div className={styles.ItemsContainer}>
        {
            items.map((item,index)=>{
                return (<TextItem key={index} heading={item.heading} from={item.from} date={item.date} description={item.description} />)
            })
        }
        </div>
    </div>
  )
}
