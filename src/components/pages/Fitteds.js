import React, { useState, useEffect } from "react";
import Axios from "axios";
import Nav from "../Nav";
import Footer from "../Footer";
import "../Base.css";
import "./Fitteds.css";
import Filterfitted from "./Filterfitted";
const fittedHero = require("../images/hatclubheroimage.webp");

function Fitteds() {
  const [productFittedList, setProductFittedList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3003/fittedsfilter").then((response) => {
      setProductFittedList(response.data);
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
                <h1>Fitteds</h1>
              </div>
              <img src={fittedHero} alt="Group of people weaing fitted caps" />
            </div>
          </div>
        </section>
        {/* End of Hero Image Slider Sneakers */}
        <section class="container">
          <div class="fitted-header-text">
            <h1>Fitteds</h1>
            <Filterfitted />
          </div>
          <div id="products">
            {productFittedList.map((value) => {
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

export default Fitteds;
