import React from 'react'
import styles from './profile.module.css'
import { IoPerson } from "react-icons/io5";

export default function Profile({name,profession,imgSrc}) {
  return (
    <div className={styles.ProfileContainer}>
        <div className={styles.ProfilePic}>
          {
            (imgSrc.length!==0)?<img src={imgSrc} alt={`${name}'s profile`}/>:<IoPerson fill="white" size="100%"/>
          }
        </div>
        <h1>{name}</h1>
        <p>{profession}</p>
    </div>
  )
}
