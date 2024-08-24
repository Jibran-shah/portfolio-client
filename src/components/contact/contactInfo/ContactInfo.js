import React from 'react'
import styles from './contactInfo.module.css'
import SingleContactInfo from './singleContactInfo/SingleContactInfo'
import { MdEmail } from "react-icons/md";
import Link from './link/Link';
import { TiSocialInstagramCircular } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";


export default function ContactInfo() {
  return (
    <div className={styles.ContactInfoContainer}>
        <h1 className={styles.ContactInfoHeading}>Contact Info</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla tincidunt id faucibus sed suscipit feugiat.
        </p>
        <SingleContactInfo Logo={MdEmail} type="Email" links={["devis@gmial.com","abc@Abc.com"]}/>
        <SingleContactInfo Logo={FaPhoneAlt} type="Phone" links={["+1 876-369-9009","+1 213-519-1786"]}/>
        <SingleContactInfo Logo={FaAddressCard} type="Address" links={["2661 High Meadow Lane Bear Creek,lancha, KY 93544",""]}/>
        <h2>
          Visite my social profile and get connected
        </h2>
        <div className={styles.Links}>
          <Link text="Instagram">
          < TiSocialInstagramCircular fill="#fdfeffb1"/>
          </Link>
          <Link text="Twitter">
            <FaTwitter fill="#fdfeffb1" />
          </Link>
          <Link text="Facebook">
            <FaFacebook fill="#fdfeffb1"/>          
        </Link>
        </div>
    </div>
  )
}
