import React from 'react'
import styles from './featured.module.css'

export default function FeaturedBlogs({
    children
}) {
  return (
    <>
        <h1 className={styles.Heading}>Featured Blogs</h1>
        <div className={styles.FeaturedBlogsContainer}>
            {children}
        </div>
    </>
  )
}
