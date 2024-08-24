import React from 'react'
import styles from './reviews.module.css'
import SectionHeader from '../sectionHeader/SectionHeader'
import Review from './review/Review'
import reviewsJson from '../../data/profiles.json'

export default function Reviews() {
  return (
      <>
        <SectionHeader section="Reviews" />
        <div className={styles.Reviews} id="reviews">
          {
            reviewsJson.map((review,index)=>
            {
              return(
                <Review imgSrc={review.imgSrc} key={index} profession={review.profession} name={review.name} quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ante purus, pretium commodo lectus nec, cursus dapibus neque."/>
              )
            })
          }
            
        </div>
        <h3 >To add your review you can do it by specifying subject as "Review" in contact section form</h3>
        <button style={{
          marginTop:"25px",
        }}>View More</button>
        </>
  )
}
