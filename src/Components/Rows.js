import styles from "./Rows.module.css";
import React, { Fragment, useEffect, useState } from "react";

function Rows({ search }) {
  const [fetchedProducts, setFetchedProducts] = useState([]);
  const [visibleProducts, setVisibleProduct] = useState(12);

  const showMoreContentHandler = () => {
    setVisibleProduct((prev) => prev + 12);
  };

  useEffect(() => {
    const url = `https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=48&country=US&sort=freshness&q=${search}&currency=USD&sizeSchema=US&lang=en-US`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "a6822e539bmshcdcaa273c37b697p1feac0jsn462a7660bb22",
        "X-RapidAPI-Host": "asos2.p.rapidapi.com",
      },
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((response) => {
        setFetchedProducts(response.products);
      })
      .catch((err) => {
        return err;
      });
  }, []);

  return (
    <Fragment>
      <div className={styles.imgContainer}>
        {fetchedProducts.slice(0, visibleProducts).map((item) => (
          <figure>
            {" "}
            <a>
              <img
                key={item.id}
                src={`https://${item.imageUrl}`}
                alt={item.name}
                className={styles.img}
              />{" "}
            </a>
            <figcaption>{item.name}</figcaption>{" "}
            <span className="price">{item.price.current.text}</span>
          </figure>
        ))}
      </div>
      {visibleProducts < fetchedProducts.length && (
        <button className="button" onClick={showMoreContentHandler}>
          Load More
        </button>
      )}
    </Fragment>
  );
}

export default Rows;
