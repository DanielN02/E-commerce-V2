import React, { useState, useEffect } from "react";
import Axios from "axios";
import Nav from "../Nav";
import Footer from "../Footer";
import Filtershoes from "./Filtershoes";
import "../Base.css";
import "./Shoes.css";
const shoesHero = require("../images/sneakers.jpg");

function Shoes() {
  const [productShoesList, setProductShoesList] = useState([]);

  useEffect(() => {
    Axios.get("https://sttc-e-commerce-mysql.herokuapp.com/shoesfilter").then(
      (response) => {
        setProductShoesList(response.data);
      }
    );
  }, []);

  return (
    <div>
      <Nav />
      <div>
        {/* Hero Image Slider Sneakers */}
        <section>
          <div class="slide-container">
            <div class="slide">
              <div class="content">
                <h1>Shoes</h1>
              </div>
              <img src={shoesHero} alt="Room full of sneakers" />
            </div>
          </div>
        </section>
        {/* End of Hero Image Slider Sneakers */}
        <section class="container">
          <div class="shoes-header-text">
            <h1>Shoes</h1>
            <Filtershoes />
          </div>
          <div id="products">
            {productShoesList.map((value) => {
              return (
                <div>
                  <div class="card">
                    {/* <h1>{value.Title}</h1>
                    <img className="card-image" src={`${value.Image}`} />
                    <h2>{value.Price}</h2>
                    <p>{value.Description}</p>
                    <button type="button" class="product-btn">
                      Purchase
                    </button> */}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
      ;
      <Footer />
    </div>
  );
}

export default Shoes;
