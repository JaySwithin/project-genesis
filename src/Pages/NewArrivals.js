import React from "react";
import Navigation from "../Components/Navigation";
import Rows from "../Components/Rows";

import styles from "./NewArrivals.module.css";

function NewArrivals() {
  return (
    <div className={styles.body}>
      <Navigation />

      <h1>New Arrivals</h1>

      <Rows />
    </div>
  );
}

export default NewArrivals;
