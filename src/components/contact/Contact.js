import React from 'react'
import styles from './contact.module.css'
import SectionHeader from '../sectionHeader/SectionHeader'
import Form from './form/Form'
import ContactInfo from './contactInfo/ContactInfo'

export default function Contact() {
  return (
    <>
        <SectionHeader section="Contact Me"/>
        <div className={styles.ContactContainer} id="contacts">
            <Form/>
            <ContactInfo/>
        </div>
    </>
  )
}
