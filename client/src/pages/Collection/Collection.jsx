import React from "react";

// INTERNAL IMPORT
import "../../Style/Collection.css";
import images from "../../assets/img/z-index.img";

// COMPONENTS
import { Banner, CollectionProfile } from "../../components/z-index.component";
import { Slider, Brand, Filter } from "../../components/z-index.component";

function Collection() {
  return (
    <div className="collection-page">
      <Banner />
      <CollectionProfile />
      <Filter />
      <Slider />
      <Brand />
    </div>
  );
}

export default Collection;
