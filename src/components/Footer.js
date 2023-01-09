import React from "react";
// import "./Footer.css";
const logo = require("./images/logo.png");

const footer = function () {
  return (
    <div>
      <footer>
        <div className="section-container">
          <section className="bottom-footer">
            <div className="footer-header">
              <h3>Join Our Community @STTC</h3>
            </div>
            <ul className="socials">
              <li>
                <a
                  href="https://www.facebook.com/"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-facebook-square"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/?lang=en"
                  aria-label="Twitter"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/"
                  aria-label="Youtube"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </li>
            </ul>
          </section>
        </div>

        <section-footer>
          <h3 className="hc-links">Style To The Closet Links</h3>
          <ul className="sub-menu">
            <li>
              <a href="contact">About</a>
            </li>
            <li>
              <a href="contact">Contact Us</a>
            </li>
            <li>
              <a href="contact">FAQ</a>
            </li>
            <li>
              <a href="contact">Tracking</a>
            </li>
            <li>
              <a href="contact">Returns</a>
            </li>
            <li>
              <a href="contact">Gift Cards</a>
            </li>
          </ul>
          <p>
            <a href="index">
              <div className="logo-footer-fix">
                <img className="image" src={logo} alt="STCC Logo" />
              </div>
            </a>
          </p>
        </section-footer>
      </footer>
    </div>
  );
};

export default footer;
