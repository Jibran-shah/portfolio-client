import React from 'react'
import BlogsHeroSection from '../../components/BlogsHeroSection/BlogsHeroSection'
import Container from '../../components/container/container'
import Blogs from '../../components/blogs/Blogs/Blogs'
import Blog from '../../components/blogs/blog/Blog'
import styles from './blogs.module.css'

export default function () {
  return (
    <div className={styles.BlogsPage}>
            <BlogsHeroSection/>
        <main style={{
            backgroundColor:"#0a101e",
            position:"relative",
            width:"100%"
        }}>
            <Container>
                <Blogs>
                    <Blog isFirst={true}/>
                    <Blog/>
                    <Blog/>
                    <Blog/>
                    <Blog/>
                    <Blog/>
                    <Blog/>
                    <Blog/>
                    <Blog/>
                </Blogs>
            </Container>
        </main>
    </div>
  )
}
