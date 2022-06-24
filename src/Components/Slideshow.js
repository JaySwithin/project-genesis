import React, { useEffect, useState } from "react";
import Navigation from "../Components/Navigation";
import SlideshowData from "../Images/SlideshowData";
import styles from "./Slideshow.module.css";
import CrossfadeImage from "react-crossfade-image";

function Slideshow() {
  const [image, setImage] = useState([]);
  const [counter, setCounter] = useState(3);

  const addCounterHandler = () => {
    if (counter < SlideshowData?.length - 1) {
      setCounter((prevcounter) => prevcounter + 1);
    } else {
      setCounter(0);
    }
  };

  const subtractCounterHandler = () => {
    if (counter === 0) {
      setCounter(SlideshowData?.length - 1);
    } else {
      setCounter((prevcounter) => prevcounter - 1);
    }
  };

  useEffect(() => {
    setImage(SlideshowData[counter].image);
  }, [counter]);

  console.log(counter);

  return (
    <div
      className={styles.body}
      style={{
        backgroundColor: `${SlideshowData[counter].background_color}`,
      }}
    >
      <Navigation></Navigation>
      <div className={styles.pageNumber}>{`0${counter + 1}`}</div>

      <div className={styles.imageContainer}>
        <img src={image}></img>
      </div>

      <svg
        onClick={subtractCounterHandler}
        className={`${styles.left_chevron} "h-6 w-6 `}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19l-7-7 7-7"
        />
      </svg>

      <svg
        onClick={addCounterHandler}
        xmlns="http://www.w3.org/2000/svg"
        className={`${styles.right_chevron} h-6 w-6`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
      <div className={styles.description}>
        <h1>{SlideshowData[counter].heading}</h1>
        <p>{SlideshowData[counter].description}</p>
        <button
          style={{
            backgroundColor: `${SlideshowData[counter].background_color}`,
          }}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default Slideshow;
