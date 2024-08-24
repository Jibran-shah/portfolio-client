import React from 'react'
import {useState} from 'react'
import styles from './portfolio.module.css'
import { IoIosAddCircle } from "react-icons/io";

export default function Portfolio({title,description,image}) {
  let [style, setStyle] = useState({});

  const hoverHandler = ()=>{
        setStyle({
            ...style,
            display:"grid"
        })
  }

  return (
    <div className={styles.PortfolioContainer} style={{
        backgroundImage:image
    }} onMouseOver={hoverHandler} onMouseOut={()=>{setStyle({display:"none"
    })}}>
        <img src={image} alt=""/>
      <div className={styles.PortfolioAttributes} style={style}>
      <IoIosAddCircle style={{...style}} className={styles.AddButton} /> 
        <h1 style={{...style}}>{title}</h1>
        <p style={{...style}}>{description}</p>
      </div>
    </div>
  )
}
