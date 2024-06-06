import React from "react";

// INTERNAL IMPORT
import "../Style/NFTDetails.css";
import { Button, Category, Brand } from "../components/z-index.component";
import { NFTDetailsPage } from "../components/z-index.component.page";

function NFTDetails() {
  return (
    <div className="nft-details">
      <NFTDetailsPage />
      <Category />
      <Brand />
    </div>
  );
}

export default NFTDetails;
