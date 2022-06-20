import React from "react";
import Navigation from "../Components/Navigation";
import styles from "./Clothing.module.css";

function Clothing() {
  return (
    <div className={styles.body}>
      <Navigation />
      <h1>Clothing :</h1> {/* svg */}
      <p>shop your favourite clothing</p>
      {/* Grid of clothings */}
    </div>
  );
}

export default Clothing;
