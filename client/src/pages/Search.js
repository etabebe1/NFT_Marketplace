import React from "react";

// INTERNAL IMPORT
import "../Style/Search.css";
import images from "../assets/img/z-index.img";

// COMPONENT
import {
  Slider,
  Brand,
  Filter,
  NFTCardTwo,
  Banner,
} from "../components/z-index.component";
import { SearchBar } from "../components/z-index.component.page";

function Search() {
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
    <div className="search-page">
      <Banner bannerImage={images.creatorbackground8} />
      <SearchBar />
      <Filter />
      <NFTCardTwo NFTData={NFTDataArray} />
      <Slider />
      <Brand />
    </div>
  );
}

export default Search;
