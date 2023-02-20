import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./Filter.css";

const Filter = () => {
  useEffect(() => {
    getProducts();
  }, []);
  const [productCollectiblesList, setProducts] = useState([]);

  const getProducts = (filter) => {
    const url = filter
      ? `https://sttc-e-commerce-mysql.herokuapp.com/collectiblesfilter${filter}`
      : "https://sttc-e-commerce-mysql.herokuapp.com/ollectibles";
    Axios.get(url, {})
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="filter_btns">
        <button className="button" onClick={() => getProducts()}>
          All
        </button>
        <button className="high-low" onClick={() => getProducts("Pricelow")}>
          High To Low
        </button>
        <button className="low-high" onClick={() => getProducts("Pricehigh")}>
          Low To High
        </button>
        <button className="funko_btn" onClick={() => getProducts("Funko")}>
          Funko
        </button>
        <button className="plush_btn" onClick={() => getProducts("Plush")}>
          Plush
        </button>
      </div>

      <div id="products">
        {/* created an array for each product and displays it */}
        {productCollectiblesList.map((value) => {
          return (
            <div>
              <div class="card">
                <h1>{value.Title}</h1>
                <img
                  className="card-image"
                  src={`${value.Image}`}
                  alt="kaws collectibles on shelf"
                />
                <h2>{value.Price}</h2>
                <p>{value.Description}</p>
                <button type="button" class="product-btn">
                  Purchase
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Filter;
