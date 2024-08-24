import React from 'react'
import styles from './service.module.css'
import { FaReact } from "react-icons/fa";


export default function Service({heading,text}) {
  return (
    <div className={styles.Service}>
        <div className={styles.ImgContainer}>
            <FaReact className={styles.Icon} size={140}/>
        </div>
        <h2>{heading}</h2>
        <p>
        {text}
        </p>
    </div>
  )
}
