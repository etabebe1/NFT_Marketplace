import React, { useEffect, useState, useRef } from "react";

// INTERNAL IMPORT
import "./Slider.css";
import SliderCard from "./SliderCard/SliderCard";
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";
import { motion, animate } from "framer-motion";

function Slider() {
  const sliderCards = [1, 2, 3, 4, 5, 6];
  const [width, setWidth] = useState(0);
  const dragSlider = useRef(null);

  useEffect(() => {
    if (dragSlider.current) {
      setWidth(dragSlider.current.scrollWidth - dragSlider.current.offsetWidth);
    }
  }, [dragSlider]);

  // const handleScroll = (direction) => {
  //   const { current } = dragSlider;
  //   const scrollAmount = window.innerWidth > 1800 ? 270 : 210;

  //   if (direction === "left") {
  //     current.scrollLeft -= scrollAmount;
  //   } else {
  //     current.scrollLeft += scrollAmount;
  //   }
  // };

  // OPTIONAL FUNCTIONS

  const handleScrollLeft = (e) => {
    e.preventDefault();
    const { current } = dragSlider;
    const scrollAmount = window.innerWidth > 1800 ? 270 : 210;
    current.scrollLeft -= scrollAmount;
  };

  const handleScrollRight = (e) => {
    e.preventDefault();

    const { current } = dragSlider;
    const scrollAmount = window.innerWidth > 1800 ? 270 : 210;
    current.scrollLeft += scrollAmount;
  };

  return (
    <div className="nft-video-slider">
      <div className="slider-box">
        <div className="header-btn-container">
          <div className="sliding-header">
            <h2>Explore NFTs Video</h2>
            <div className="slider-text-btn">
              <p>Click on play icon & enjoy NFTs Videos.</p>
              <div className="sliding-btn">
                <div
                  className="slider-btn-icon"
                  onClick={(e) => handleScrollLeft(e)}
                >
                  <TfiArrowCircleLeft />
                </div>
                <div
                  className="slider-btn-icon"
                  onClick={(e) => handleScrollRight(e)}
                >
                  <TfiArrowCircleRight />
                </div>
              </div>
            </div>
          </div>
        </div>

        <motion.div className="slider-motion-container" ref={dragSlider}>
          <motion.div
            className="slider-motion"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
            {sliderCards.map((card, i) => {
              return <SliderCard key={i + 1} />;
            })}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Slider;
