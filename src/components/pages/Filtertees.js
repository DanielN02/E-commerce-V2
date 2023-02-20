import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../Base.css";
import "./Tops.css";
import "./Filter.css";

const Filtertops = () => {
  useEffect(() => {
    getProducts();
  }, []);
  const [productTopsList, setProducts] = useState([]);

  const getProducts = (filter) => {
    const url = filter
      ? `https://sttc-e-commerce-mysql.herokuapp.com/topsfilter${filter}`
      : "https://sttc-e-commerce-mysql.herokuapp.com/tops";
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
        <button className="tees_btn" onClick={() => getProducts("Tees")}>
          Tees
        </button>
        <button className="jackets_btn" onClick={() => getProducts("Jackets")}>
          Jackets
        </button>
      </div>

      <div id="products">
        {/* created an array for each product and displays it */}
        {productTopsList.map((value) => {
          return (
            <div>
              <div className="card">
                <h1>{value.Title}</h1>
                <img
                  className="card-image"
                  src={`${value.Image}`}
                  alt="Graphic Tees"
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

export default Filtertops;
