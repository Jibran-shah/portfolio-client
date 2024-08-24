import React from 'react'
import styles from './progressContainer.module.css'
import Progressbar from './progressbar/Progressbar'

export default function ProgressContainer() {
  return (
    <div className={styles.Container}>
        <Progressbar progress={90} skill="Photoshop"/>
        <Progressbar progress={80} skill="Motion Graphic"/>
        <Progressbar progress={75} skill="Adobe XD"/>
        <Progressbar progress={85} skill="UX Design"/>
        <Progressbar progress={95} skill="HTML"/>
        <Progressbar progress={70} skill="Digital Marketing"/>
    </div>
  )
}
