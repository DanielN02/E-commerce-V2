import React, { useState, useEffect } from "react";
import Axios from "axios";
import Nav from "../Nav";
import Footer from "../Footer";
import "../Base.css";
import "./Tops.css";
import Filtertops from "./Filtertees";
const topsHero = require("../images/graphictees.webp");

function Tops() {
  const [productTopsList, setProductTopsList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3003/topsfilter").then((response) => {
      setProductTopsList(response.data);
    });
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
                <h1>Graphic Tees</h1>
              </div>
              <img src={topsHero} alt="A picture of graphic Tees" />
            </div>
          </div>
        </section>
        {/* End of Hero Image Slider Sneakers */}
        <section class="container">
          <div class="tees-header-text">
            <h1> Tees</h1>
          </div>
          <Filtertops />
          <div id="products">
            {productTopsList.map((value) => {
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

export default Tops;
