import React from "react";

import styles from "./Brands.module.css";

function Brands() {
  return (
    <div className={styles.body}>
      <h1>Brands :</h1> {/* svg */}
      <p>shop your favourite brands</p>
      {/* flex of brands */}
      <ul className={styles.brands}>
        <li>
          <a href="##"></a>
        </li>
        <li>
          <a href="##"></a>
        </li>
        <li>
          <a href="##"></a>
        </li>
        <li>
          <a href="##"></a>
        </li>
        <li>
          <a href="##"></a>
        </li>
        <li>
          <a href="##"></a>
        </li>
        <li>
          <a href="##"></a>
        </li>
      </ul>
    </div>
  );
}

export default Brands;
