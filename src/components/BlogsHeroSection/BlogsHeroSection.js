import React from 'react'
import styles from './blogsHeoSection.module.css'
import Search from '../SearchInput/Search';
import Container from '../container/container'

export default function BlogsHeroSection() {
  return (
    <div className={styles.BlogsHeroSection}>
        <img src="https://picsum.photos/900/800" />
        <Container style={{
            textAlign:"center",
            width:"75%",
            gap:"15px"
        }}>
          <h1 className={styles.Heading}>Discover Insights with Jibran Shah</h1>
          <p className={styles.Paragraph}>Explore a collection of blogs dedicated to exploring new concepts and ideas in technology and beyond. Each post is crafted to offer valuable insights and spark thoughtful discussions. Whether you're here to learn or simply curious, there's something for everyone.</p>
        <Search/>
        </Container>
    </div>
  )
}
