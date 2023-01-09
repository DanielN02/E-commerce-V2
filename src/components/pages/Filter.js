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
      ? `http://localhost:3003/collectiblesfilter${filter}`
      : "http://localhost:3003/collectibles";
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
        {productCollectiblesList.map((value) => {
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
    </div>
  );
};

export default Filter;
