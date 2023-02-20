import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../Base.css";
import "./Fitteds.css";
import "./Filter.css";

const Filterfitted = () => {
  useEffect(() => {
    getProducts();
  }, []);
  const [productFittedsList, setProducts] = useState([]);

  const getProducts = (filter) => {
    const url = filter
      ? `https://sttc-e-commerce-mysql.herokuapp.com/fittedsfilter${filter}`
      : "https://sttc-e-commerce-mysql.herokuapp.com/fitteds";
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
        <button
          className="baseball_btn"
          onClick={() => getProducts("Baseball")}
        >
          Baseball
        </button>
        <button className="nfl_btn" onClick={() => getProducts("NFL")}>
          NFL
        </button>
      </div>

      <div id="products">
        {/* created an array for each product and displays it */}
        {productFittedsList.map((value) => {
          return (
            <div>
              <div class="card">
                <h1>{value.Title}</h1>
                <img
                  className="card-image"
                  src={`${value.Image}`}
                  alt="group of people wearing fitteds"
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

export default Filterfitted;
