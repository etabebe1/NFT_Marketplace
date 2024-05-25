import React from "react";

// INTERNAL IMPORT
import "./Hero.css";

import images from "../../assets/img/z-index.img";
import { Button } from "../z-index.component";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content-wrapper">
        <div className="hero-content">
          <h1>Discover, collect, and sell NFTs 🖼️</h1>
          <p>
            Discover the most outstanding NFTs in all topics of life. Create
            your NFTs and sell them.
          </p>
          <Button btnName="Start your search" className="start-btn" />
        </div>
        <div className="hero-image">
          <img src={images.hero} alt="Hero_Image" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
