import React from "react";

// INTERNAL IMPORT
import "./Home.css";

import {
  Hero,
  Service,
  NFTSlider,
  Subscribe,
  Title,
} from "../../components/z-index.component";

function Home() {
  return (
    <div className="home">
      <Hero></Hero>
      <Service></Service>
      <NFTSlider></NFTSlider>
      <Subscribe></Subscribe>
      <Title
        heading={"Browse by category"}
        paragraph={"Explore the NFTs in the most featured categories."}
      ></Title>
    </div>
  );
}

export default Home;
