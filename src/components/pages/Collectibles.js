import React, { useState, useEffect } from "react";
import Axios from "axios";
import Nav from "../Nav";
import Footer from "../Footer";
import "../Base.css";
import "./Collectibles.css";
import Filter from "./Filter";
const collectiblesHero = require("../images/kawsheroimage.jpeg");

function Collectibles() {
  const [productCollectiblesList, setProductCollectiblesList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3003/collectiblesfilter").then((response) => {
      setProductCollectiblesList(response.data);
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
                <h1>Collectibles</h1>
              </div>
              <img src={collectiblesHero} alt="Kaws statue on book shelf" />
            </div>
          </div>
        </section>
        {/* End of Hero Image Slider Sneakers */}
        <section class="container">
          <div class="collectible-header-text">
            <h1>Collectibles</h1>
            <Filter />
          </div>
          <div id="products">
            {productCollectiblesList.map((value) => {
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

export default Collectibles;
