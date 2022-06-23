import React from "react";
import styles from "./Brands.module.css";
import Boohooman from "../Brand Logos/Boohooman.jpg";
import Asos from "../Brand Logos/Asos.png";
import Culturekings from "../Brand Logos/Culturekings.png";
import Goatcrew from "../Brand Logos/goatcrew.png";
import Grailed from "../Brand Logos/Grailed.png";
import Highsnobiety from "../Brand Logos/Highsnobiety.png";
import UrbanOutfitters from "../Brand Logos/Urban Outfitters.png";

function Brands() {
  return (
    <div className={styles.body}>
      <h1>Brands :</h1> {/* svg */}
      <p>shop your favourite brands</p>
      {/* flex of brands */}
      <ul className={styles.brands}>
        <li>
          <a href="##">
            <img src={Boohooman}></img>
          </a>
        </li>
        <li>
          <a href="##">
            <img src={Asos}></img>
          </a>
        </li>
        <li>
          <a href="##">
            <img src={Culturekings}></img>
          </a>
        </li>
        <li>
          <a href="##">
            <img src={Highsnobiety}></img>
          </a>
        </li>
        <li>
          <a href="##">
            <img src={Goatcrew}></img>
          </a>
        </li>
        <li>
          <a href="##">
            <img src={Grailed}></img>
          </a>
        </li>
        <li>
          <a href="##">
            <img src={UrbanOutfitters}></img>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Brands;
