import React from "react";

// INTERNAL IMPORT
import "../Style/Collection.css";
import images from "../assets/img/z-index.img";

// COMPONENTS
import {
  Banner,
  CollectionProfile,
  NFTCardTwo,
} from "../components/z-index.component";
import { Slider, Brand, Filter } from "../components/z-index.component";

function Collection() {
  return (
    <div className="collection-page">
      <Banner bannerImage={images.creatorbackground3} />
      <CollectionProfile />
      <Filter />
      <NFTCardTwo />
      <Slider />
      <Brand />
    </div>
  );
}

export default Collection;