import React from 'react'
import styles from './services.module.css'
import Service from './service/Service'
import SectionHeader from '../sectionHeader/SectionHeader'

export default function Services() {
  return (
    <>
    <SectionHeader section="Services"/>
    <div className={styles.ServicesContainer} id="services">
        <Service heading="Sketches" text="Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem."/>
        <Service heading="UI/UX Design" text="Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem."/>
        <Service heading="Product Design" text="Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem."/>
        <Service heading="App Design" text="Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem."/>
        <Service heading="Motion Graphics" text="Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem."/>
        <Service heading="Responsive Design" text="Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem."/>
    </div>
    </>
  )
}
