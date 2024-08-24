import React from 'react'
import styles from './resume.module.css'
import SectionHeader from '../sectionHeader/SectionHeader'
import TextContainer from './textContainer/TextContainer'
import resume from '../../data/resume.json'

export default function Resume() {
  return (
    <>
        <SectionHeader section="Resume"/>
        <div className={styles.Resume} id="resume">
            <TextContainer heading={resume.sections[0].heading} items={resume.sections[0].items}/>
            <TextContainer heading={resume.sections[1].heading} items={resume.sections[1].items}/>
        </div>
        
    </>
  )
}
