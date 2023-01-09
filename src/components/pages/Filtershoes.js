import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../Base.css";
import "./Shoes.css";
import "./Filter.css";

const Filtershoes = () => {
  useEffect(() => {
    getProducts();
  }, []);
  const [productShoesList, setProducts] = useState([]);

  const getProducts = (filter) => {
    const url = filter
      ? `http://localhost:3003/shoesfilter${filter}`
      : "http://localhost:3003/shoes";
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
        <button className="tees_btn" onClick={() => getProducts("Jordans")}>
          Jordans
        </button>
        <button className="jackets_btn" onClick={() => getProducts("Nike")}>
          Nike
        </button>
        <button
          className="jackets_btn"
          onClick={() => getProducts("Newbalance")}
        >
          New Balance
        </button>
      </div>
      <section className="container">
        <div id="products">
          {productShoesList.map((value) => {
            return (
              <div>
                <div class="card">
                  <h1>{value.Title}</h1>
                  <img className="card-image" src={`${value.Image}`} />
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
      </section>
    </div>
  );
};

export default Filtershoes;
