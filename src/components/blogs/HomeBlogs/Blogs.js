import React from 'react'
import SectionHeader from '../../sectionHeader/SectionHeader'
import styles from './blogs.module.css'
import Blog from '../blog/Blog'
import {Link} from 'react-router-dom'

export default function Blogs() {
  return (
    <>
        <SectionHeader section="Blog"/>
        <div className={styles.BlogsContainer} id="blogs">
            <Blog imgSrc="/images/blog1.jpg" />
            <Blog imgSrc="/images/blog2.jpg" />
            <Blog imgSrc="/images/blog3.jpg" />
        </div>
        <button className={styles.LinkButton}><Link  to='/blogs'>View More</Link></button>
    </>
  )
}
