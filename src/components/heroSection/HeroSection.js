import React from 'react'
import styles from './heroSection.module.css'
import TextContainer from './textcontainer/TextContainer'
import ImgContainer from './imgcontainer/ImgContainer'

export default function HeroSection() {
  return (
    <div className={styles.HeroSection}>
        <TextContainer></TextContainer>
        <ImgContainer></ImgContainer>
    </div>
  )
}
