import React from 'react'
import styles from './allBlogs.module.css'
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Blog from '../../blog/Blog'


export default function AllBlogs({children}) {
  return (
    <>
        <h1 className={styles.Heading}>All Blogs</h1>
        <div className={styles.AllBlogs}>
                    <Blog/>
                    <Blog/>
                    <Blog/>
                    <Blog/>
                    <Blog/>
                    <Blog/>
                    <Blog/>
                    <Blog/>
                    <Blog/>
        </div>
        <div className={styles.PaginationButtons}>
            <MdKeyboardDoubleArrowLeft  className={styles.PaginationLogo}/>
            <MdKeyboardArrowLeft  className={styles.PaginationLogo}/>
            <p className={styles.PaginationNO}>1</p>
            <p className={styles.PaginationNO}>2</p>
            <p className={styles.PaginationNO}>3</p>
            <MdKeyboardArrowRight className={styles.PaginationLogo}/>
            <MdKeyboardDoubleArrowRight className={styles.PaginationLogo}/>
        </div>
    </>
  )
}
