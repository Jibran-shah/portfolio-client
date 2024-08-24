import React from 'react'
import {Link} from "react-router-dom"
import styles from './nav.module.css'
import MenuIcon from '@mui/icons-material/Menu';
import PhoneIcon from '@mui/icons-material/Phone';

export default function Nav() {
  return (
    <div className={styles.NavOuter} id="top">
        <div className={styles.Logo}>
            <img src="/logo.png" alt="website log"></img>
        </div>
        <div className={styles.Nav}>
            <Link  to="/">
                Home
            </Link>
            <Link to="/about">
                About 
            </Link>
            <Link to="/resume">
                Resume
            </Link>
            <Link to="/portfolios">
                Portfolio
            </Link>
            <Link to="/blogs">
                blogs
            </Link>
            <Link to="/contacts">
                contact
            </Link>
            <p>
                |
            </p>
            <Link className={styles.PhoneNumberContainer} to="/contacts">
                <PhoneIcon className={styles.PhoneLogo}/>
                <p>
                    +1 971 234 1508
                </p>
            </Link>
        </div>
        <div className={styles.MenuButton}>
            <MenuIcon className={styles.MenuLogo}></MenuIcon>
        </div>
    </div>
  )
}
