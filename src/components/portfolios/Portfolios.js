import React from 'react'
import styles from './portfolios.module.css'
import Portfolio from './portfolio/Portfolio'
import SectionHeader from '../sectionHeader/SectionHeader'
import imagesJson from '../../data/images.json'

export default function Portfolios() {
  return (
    <>
        <SectionHeader section="Portfolios"/>
        <div className={styles.PortfoliosContainer} id="portfolios">
          {
            imagesJson.map((image,index)=>{
                return (<Portfolio key={index} title="title"description="description" image={image}/>)
            })
          }
        </div>
        <button>Load More</button>
    </>
  )
}
