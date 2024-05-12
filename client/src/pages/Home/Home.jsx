import React from "react";

// INTERNAL IMPORT
import "./Home.css";

import {
  Hero,
  Service,
  NFTSlider,
  Subscribe,
} from "../../components/z-index.component";

function Home() {
  return (
    <div className="home">
      <Hero></Hero>
      <Service></Service>
      <NFTSlider></NFTSlider>
      <Subscribe></Subscribe>
    </div>
  );
}

export default Home;
