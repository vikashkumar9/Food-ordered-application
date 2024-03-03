import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";

import { MdOutlineEmail } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { FaPhone } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className={styles.footer_container}>
        <div>
          <ul>
            <li>
              <Link href="/addProducts">Add Your Own Food</Link>
            </li>
            <li>
              <Link href="/foodproducts">Meals</Link>
            </li>
            <li>
              <Link href="/login">Login</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <Link href="/about">Who We Are</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
            <li> </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <FaPhone className={styles.conatct_icon} />{" "}
              <a href="tel:9306075344"> +919306075344</a>
            </li>

            <li>
              <MdOutlineEmail className={styles.conatct_icon} />{" "}
              <a href="mailto:vikashparjapati59@gmail.com">
                vikashparjapati59@gmail.com
              </a>
            </li>
          </ul>
          <ul className={styles.socialmedia_icons}>
            <li>
              <a href="https://www.instagram.com/parjapati2924/">
                <FaInstagram className={styles.icon} />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/vikash-parjapati-a670371b2/">
                <FaLinkedin className={styles.icon} />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/vikash.parjapati.58555941">
                <FaFacebook className={styles.icon} />
              </a>
            </li>
            <li>
              <a href="https://github.com/vikashkumar9">
                <FaGithub className={styles.icon} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footer_bottom}>© 2024</div>
    </>
  );
};
export default Footer;
