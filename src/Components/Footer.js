import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={`${styles.body} flex justify-between`}>
      <div className={styles.newsletter}>
        {" "}
        <h1 className={styles.brand}>SwithAiks</h1>
        <div className={styles.newsletter_email}>
          <p>
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
            <li>Stores</li>
            <li>Gift Cards</li>
            <li>Shop Men</li>
            <li>Shop Women</li>
          </ul>
        </div>
        <div className={styles.customer}>
          <h2>Customer</h2>
          <ul>
            <li>Worldwide Shipping</li>
            <li>Terms Conditions</li>
            <li>Privacy Policy</li>
            <li>Payments</li>
            <li>Returns Refunds</li>
            <li>FAQs</li>
            <li>Help Center</li>
          </ul>
        </div>
        <div className={styles.contact_us}>
          <h2>Contact Us</h2>
          <ul>
            <li>
              <a>info@cloudwest.com</a>
            </li>
            <li>Legon, Accra , Ghana</li>
            <li> +23355254093</li>
          </ul>
          <div>{/* flex social icons */}</div>
          <p> 2022, Cloudwest</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
