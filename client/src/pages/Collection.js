import React from "react";

// INTERNAL IMPORT
import "../Style/Collection.css";
import images from "../assets/img/z-index.img";

// COMPONENTS
import {
  Banner,
  NFTCardTwo,
  Slider,
  Brand,
  Filter,
} from "../components/z-index.component";
import { CollectionProfile } from "../components/z-index.component.page";

function Collection() {
  const NFTDataArray = [
    images.nft_image_2,
    images.nft_image_1,
    images.nft_image_3,
    images.nft_image_4,
    images.nft_image_5,
    images.nft_image_6,
    images.nft_image_7,
  ];

  return (
    <div className="collection-page">
      <Banner bannerImage={images.creatorbackground3} />
      <CollectionProfile />
      <Filter />
      <NFTCardTwo NFTData={NFTDataArray} />
      <Slider />
      <Brand />
    </div>
  );
}

export default Collection;
