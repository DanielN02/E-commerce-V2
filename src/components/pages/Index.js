import React, { useState } from "react";
import "../Base.css";
import "./Index.css";
import { videos } from "./SliderData";
import Nav from "../Nav";
import Footer from "../Footer";
// import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
// import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function Slide() {
  const [currVid, SetCurrVid] = useState(0);

  return (
    <div className="slide">
      <Nav />
      <section>
        <div className="container">
          <div
            className="slide-container active"
            style={{ backgroundImage: `url(${videos[currVid].video})` }}
          >
            <div className="slide">
              <div className="content">
                <h1>{videos[currVid].h1}</h1>
                <h2>{videos[currVid].h2}</h2>
                <p>{videos[currVid].p}</p>
                <p>{videos[currVid].a}</p>
              </div>
              <video src={videos[currVid].video} autoPlay loop muted></video>
            </div>
          </div>

          {/* Adding functionality to the buttons */}
          <div
            id="prev"
            onClick={() => {
              currVid > 0 && SetCurrVid(currVid - 1);
            }}
          >
            ←
          </div>
          <div
            id="next"
            onClick={() => {
              currVid < videos.length - 1 && SetCurrVid(currVid + 1);
            }}
          >
            →
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
console.log(videos.length);
export default Slide;
