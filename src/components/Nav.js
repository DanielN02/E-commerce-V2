import React from "react";
import "./Base.css";
const logo = require("./images/logo.png");
// import "font-awesome/css/font-awesome.css";

// import useScript from "./Script";

// const MyComponent = (props) => {
//   useScript("https://kit.fontawesome.com/081a7f5200.js");
// };

function Nav() {
  return (
    <div>
      {/* Start of Nav */}
      <header>
        <nav>
          <a href="index">
            <img src={logo} alt="STTC Logo" class="logo" />
          </a>
          {/* <div class="burger" id="burger">
            <span class="burger-line"></span>
            <span class="burger-line"></span>
            <span class="burger-line"></span>
          </div> */}
          <div className="menu" id="menu">
            <ul className="menu-inner">
              <li className="menu-item">
                <a href="index" class="menu-link">
                  Home
                </a>
              </li>
              <li className="menu-item">
                <a href="tops" class="menu-link">
                  Tees
                </a>
              </li>
              <li className="menu-item">
                <a href="shoes" class="menu-link">
                  Shoes
                </a>
              </li>
              <li className="menu-item">
                <a href="fitteds" class="menu-link">
                  Fitted Caps
                </a>
              </li>
              <li className="menu-item">
                <a href="collectibles" class="menu-link">
                  Collectibles
                </a>
              </li>
              <li className="menu-item">
                <a href="contact" class="menu-link">
                  Contact
                </a>
              </li>
              <li className="menu-item">
                <i id="cart" className="fa-solid fa-cart-shopping"></i>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* End of Nav */}
    </div>
  );
}

export default Nav;

/* const navbarMenu = document.getElementById("menu"); //Grabs the menu ID
const burgerMenu = document.getElementById("burger"); //Grabs the burger ID
const headerMenu = document.getElementById("header"); //Grabs the header ID

// If statement to open Close Navbar Menu on Click Burger
if (burgerMenu && navbarMenu) {
  burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("is-active"); //switches from burger to navbar if clicked
    navbarMenu.classList.toggle("is-active");
  });
}

// Close Navbar Menu on Click Menu Links
document.querySelectorAll(".menu-link").forEach((link) => {
  link.addEventListener("click", () => {
    burgerMenu.classList.remove("is-active"); //removes the x navbari if clicked
    navbarMenu.classList.remove("is-active");
  });
});*/
