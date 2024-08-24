import React from 'react'
import styles from './blogs.module.css'
import FeaturedBlogs from './FeaturedBlogs/FeaturedBlogs';
import AllBlogs from './AllBlogs/AllBlogs';

const Blogs=({children})=>{
  return (
    <>
        <div className={styles.BlogsContainer}>
            <FeaturedBlogs>
                {children}
            </FeaturedBlogs>
            <AllBlogs>
                {children}
            </AllBlogs>
        </div>
    </>    
  );
}


export default Blogs