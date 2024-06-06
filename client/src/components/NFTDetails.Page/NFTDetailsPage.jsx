import React from "react";

// INTERNAL IMPORT
import "./NFTDetailsPage.css";
import { NFTDetailsImg, NFTDescription } from "../z-index.component.page";

function NFTDetailsPage() {
  return (
    <div className="nft-details">
      <div className="nft-details-components">
        <NFTDetailsImg />
        <NFTDescription />
      </div>
    </div>
  );
}

export default NFTDetailsPage;
