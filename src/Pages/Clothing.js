import React from "react";
import Footer from "../Components/Footer";
import Navigation from "../Components/Navigation";
import styles from "./Clothing.module.css";

function Clothing() {
  return (
    <div className={styles.body}>
      <Navigation />
      <h1>Clothing :</h1> {/* svg */}
      <p>shop your favourite clothing</p>
      {/* Grid of clothings */}
      <div className={styles.clothingGrid}>
        <div className={styles.graphicTees}>
          <div className={styles.graphicTeesShopNow}>
            <h2>Graphic T-Shirts</h2>
            <button>Shop now</button>
          </div>

          <div className={styles.graphicTeesImg}></div>
        </div>

        <div className={styles.sidebags}>
          <div className={styles.sidebagsShopNow}>
            <h2>Sidebags</h2>
            <button>Shop now</button>
          </div>

          <div className={styles.sidebagsImg}></div>
        </div>

        <div className={styles.sweatpants}>
          <div className={styles.sweatpantsShopNow}>
            <h2>Sweatpants</h2>
            <button>Shop now</button>
          </div>

          <div className={styles.sweatpantsImg}></div>
        </div>

        <div className={styles.jeans}>
          <div className={styles.jeansShopNow}>
            <h2>Jeans</h2>
            <button>Shop now</button>
          </div>

          <div className={styles.jeansImg}></div>
        </div>

        <div className={styles.sweaters}>
          <div className={styles.sweatersShopNow}>
            <h2>Sweaters</h2>
            <button>Shop now</button>
          </div>

          <div className={styles.sweatersImg}></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Clothing;
