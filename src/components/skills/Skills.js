import React from 'react'
import styles from './skills.module.css'
import TextContainer from './textContainer/TextContainer'
import ProgressContainer from './skillsProgressContainer/ProgressContainer'
import SectionHeader from '../sectionHeader/SectionHeader'

export default function Skills() {
  return (
    <>
        <SectionHeader section="Skills"/>
        <div className={styles.Skills} id="skills">
        <TextContainer heading="All the skills that I have in that field of work are mentioned."
        description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores." summary="Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt."/>
        <ProgressContainer/>
    </div>
    </>
  )
}
