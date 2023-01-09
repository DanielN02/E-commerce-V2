import VideoHome from "../videos/sttchome.mp4";
import VideoTees from "../videos/sttctees.mp4";
import VideoShoes from "../videos/sttcshoes.mp4";
import VideoFitteds from "../videos/sttcfitted.mp4";
import VideoCollectibles from "../videos/sttccollectibles.mp4";

export const videos = [
  {
    h1: "Style To The Closet",
    h2: "CLT Based",
    p: "Join our mailing list for 10% off",
    a: (
      <a href="contact" className="btn">
        Learn more
      </a>
    ),
    video: VideoHome,
  },
  {
    h1: "Graphic Tees",
    p: "Shop our limited supply of Graphic Tees",
    a: (
      <a href="tops" className="btn">
        Shop tees
      </a>
    ),
    video: VideoTees,
  },
  {
    h1: "Shoes",
    p: "Grab a pair of sneakers to stand out",
    a: (
      <a href="shoes" className="btn">
        Shop Shoes
      </a>
    ),
    video: VideoShoes,
  },
  {
    h1: "Fitteds",
    p: "Support your team with our fitted caps",
    a: (
      <a href="fitteds" className="btn">
        Shop Fitteds
      </a>
    ),
    video: VideoFitteds,
  },
  {
    h1: "Collectibles",
    p: "Decorate your room with collectibles",
    a: (
      <a href="collectibles.html" className="btn">
        Shop Collectibles
      </a>
    ),
    video: VideoCollectibles,
  },
];
