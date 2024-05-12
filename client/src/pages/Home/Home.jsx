import React from "react";

// INTERNAL IMPORT
import "./Home.css";

import {
  Hero,
  Service,
  NFTSlider,
  Subscribe,
  Title,
  Category,
} from "../../components/z-index.component";

function Home() {
  return (
    <div className="home">
      <Hero></Hero>
      <Service></Service>
      <NFTSlider></NFTSlider>
      <Title
        heading={"Browse by category"}
        paragraph={"Explore the NFTs in the most featured categories."}
      ></Title>
      <Category></Category>
      <Subscribe></Subscribe>
    </div>
  );
}

export default Home;
