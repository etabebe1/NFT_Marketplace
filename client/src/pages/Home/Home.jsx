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
  NFTCard,
  Collection,
  Follower,
  AudioLive,
  Slider,
  Brand
} from "../../components/z-index.component";

function Home() {
  return (
    <div className="home">
      <Hero />
      <Service />
      <NFTSlider />
      <Title
        heading={"Latest Audio Collection"}
        paragraph={"Discover NFTs available on the market."}
      />
      <AudioLive />
      {/*  <Title
        heading={"New Collection"}
        paragraph={"Discover NFTs available on the market."}
      /> */}
      <Follower />

      
      <Slider />

      <Collection />
      <Title
        heading={"Featured NFTs"}
        paragraph={"Discover the most outstanding NFTs in all topics of life."}
      />
      <Filter />
      <NFTCard />
      <Title
        heading={"Browse by category"}
        paragraph={"Explore the NFTs in the most featured categories."}
      />
      <Category />
      <Subscribe />
      <Brand/>
    </div>
  );
}

export default Home;
