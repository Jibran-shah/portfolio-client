import React from 'react'
import styles from "./search.module.css"
import { FaSearch } from "react-icons/fa";

export default function Search({placeholder}) {
  return (
    <div className={styles.SearchContainer}>
        <input type="search" placeholder={placeholder} className={styles.Search} />
        <FaSearch className={styles.SearchLogo}/>
    </div>
    
  )
}