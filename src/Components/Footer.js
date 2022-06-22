import React from "react";
import styles from "./Footer.module.css";
import { FaInstagram, FaTwitter, FaFacebook, FaSnapchat } from "react-icons/fa";

function Footer() {
  return (
    <div className={`${styles.body} flex justify-between`}>
      <div className={styles.newsletter}>
        {" "}
        <h1 className={styles.brand}>SwithAiks</h1>
        <div className={styles.newsletter_email}>
          <p className={styles.newsletterParagraph}>
            Join the SwithAiks newsletter, be the first to know when there is
            new arrivals
          </p>
          <form>
            <input
              className={styles.input}
              type="email"
              placeholder="Email address"
              htmlFor=""
            ></input>
          </form>
        </div>
      </div>

      <div className="flex w-3/5 justify-around">
        <div className={styles.about_us}>
          <h2>About Us</h2>
          <ul>
            <li>
              <a href="#">Stores</a>
            </li>
            <li>
              <a href="#">Gift Cards</a>
            </li>
            <li>
              {" "}
              <a href="#">Shop Men</a>
            </li>
            <li>
              <a href="#">Shop Women</a>
            </li>
          </ul>
        </div>
        <div className={styles.customer}>
          <h2>Customer</h2>
          <ul>
            <li>
              <a href="#">Worldwide Shipping</a>
            </li>
            <li>
              <a href="#">Terms &amp; Conditions</a>
            </li>
            <li>
              {" "}
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Payments</a>
            </li>
            <li>
              <a href="#">Returns &amp; Refunds</a>
            </li>
            <li>
              {" "}
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Help Center</a>
            </li>
          </ul>
        </div>
        <div className={styles.contact_us}>
          <h2>Contact Us</h2>
          <ul>
            <li>
              <a href="#">info@swithaiks.com</a>
            </li>
            <li>Legon, Accra , Ghana</li>
            <li> +23355254093</li>
          </ul>
          <div className={styles.socialIcons}>
            {/* flex social icons */}
            <a href="#">
              <FaInstagram size="1.5em" />
            </a>
            <a href="#">
              <FaTwitter size="1.5em" />
            </a>
            <a href="#">
              <FaFacebook size="1.5em" />
            </a>
            <a href="#">
              <FaSnapchat size="1.5em" />
            </a>
          </div>
          <p className={styles.contactParagraph}> &copy; 2022, Cloudwest</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
