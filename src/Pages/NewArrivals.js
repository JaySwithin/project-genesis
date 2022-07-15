import React from "react";
import Footer from "../Components/Footer";
import Navigation from "../Components/Navigation";
import Rows from "../Components/Rows";

import styles from "./NewArrivals.module.css";

function NewArrivals() {
  return (
    <div className={styles.body}>
      <Navigation />

      <h1>New Arrivals</h1>

      <Rows search="new" />

      <Footer />
    </div>
  );
}

export default NewArrivals;
