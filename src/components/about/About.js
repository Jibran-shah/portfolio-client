import React from 'react'
import styles from './about.module.css'
import SectionHeader from '../sectionHeader/SectionHeader'

export default function About() {
  return (
    <>
      <SectionHeader section="About"/>
      <div className={styles.About} id="about">
        <div className={styles.ImgContainer}>
          <img src="/images/about.jpg" alt=""/>
        </div>
        <div className={styles.TextContainer}>
          <h1>
              Hi There! I'm Edward Davis
          </h1>
          <h2>
              Visual Designer
          </h2>
          <p>
              I am a Visual Designer with a strong focus on digital branding. Visul design seeks to attract, inspire, create desires and motivate people to respond to messages, with a view to making a favorable impact.
          </p>
          <table>
              <tbody className={styles.AboutTable}>
              <tr >
                <td>Birthday</td>
                <td>:</td>
                <td>May 07, 1990</td>
              </tr>
              <tr>
                <td>Language</td>
                <td>:</td>
                <td>English, Germanic</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>:</td>
                <td>devis@example.com</td>
              </tr>
              <tr>
                <td>From</td>
                <td>:</td>
                <td>2661 Hich meadow lane bear creek</td>
              </tr>
              <tr>
                <td>Freelance</td>
                <td>:</td>
                <td>Available</td>
              </tr>
              </tbody>
          </table>
          <button>
              Download CV
          </button>
        </div>
      
      </div>
    
    </>
  )
}
