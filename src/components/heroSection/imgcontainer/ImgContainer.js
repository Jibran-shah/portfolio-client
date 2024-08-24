import React from "react";
import styles from "./imgContainer.module.css";
import Link from "./link/Link";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


export default function ImgContainer() {
  return (
    <div className={styles.ImgContainer}>
       <div className={styles.Img}>
        <img src="/images/hero-img.jpg" alt=""/>
      </div>
      <div className={styles.Links}>
        <Link text="Instagram">
         < TiSocialInstagramCircular size={40} fill="#fdfeffb1"/>
        </Link>
        <Link text="Twitter">
          <FaTwitter size={40} fill="#fdfeffb1" />
        </Link>
        <Link text="Facebook">
          <FaFacebook  size={40} fill="#fdfeffb1" />          
        </Link>
      </div>
    </div>
  );
}
