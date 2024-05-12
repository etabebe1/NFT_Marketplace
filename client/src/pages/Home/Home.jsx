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
  Filter,
} from "../../components/z-index.component";

function Home() {
  return (
    <div className="home">
      <Hero></Hero>
      <Service></Service>
      <NFTSlider></NFTSlider>
      <Title
        heading={"Featured NFTs"}
        paragraph={"Discover the most outstanding NFTs in all topics of life."}
      ></Title>
      <Filter></Filter>
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
