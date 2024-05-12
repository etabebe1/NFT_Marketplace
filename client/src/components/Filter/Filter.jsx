import React, { useState } from "react";

// INTERNAL IMPORT
import "./Filter.css";

import { SlArrowUp } from "react-icons/sl";
import { SlArrowDown } from "react-icons/sl";
import { RxDoubleArrowUp } from "react-icons/rx";
import { RxDoubleArrowDown } from "react-icons/rx";
import { FaCheck } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";
import { FaVideo } from "react-icons/fa6";
import { FaImages } from "react-icons/fa";
import { MdLibraryMusic } from "react-icons/md";
import { BsPersonFill } from "react-icons/bs";
import { FaWallet } from "react-icons/fa6";
import { PiSealCheckFill } from "react-icons/pi";
import { FaFilter } from "react-icons/fa";

function Filter() {
  const [filter, setFilter] = useState(false);
  const [videos, setVideos] = useState(true);
  const [images, setImages] = useState(true);
  const [musics, setMusics] = useState(true);

  return (
    <div className="filter">
      <div className="filter_box">
        <div className="filter_box_left">
          <div className="filter_left_btn_container">
            <button onClick={() => {}}>NFTs</button>
            <button onClick={() => {}}>Arts</button>
            <button onClick={() => {}}>Music</button>
            <button onClick={() => {}}>Sports</button>
            <button onClick={() => {}}>Photography</button>
          </div>

          <button className="filter_btn" onClick={() => setFilter(!filter)}>
            <i>
              <FaFilter />
            </i>
            <p>Filter</p>
            <i>{filter ? <RxDoubleArrowUp /> : <RxDoubleArrowDown />}</i>
          </button>
        </div>

        {filter && (
          <div className="filter_box_right">
            <div class="custom-button fill" onClick={() => {}}>
              <i>
                <FaWallet />
              </i>
              <p>10 ETH</p>
              <i className="check-icon">
                <PiSealCheckFill />
              </i>
            </div>
            <div class="custom-button" onClick={() => setImages(!images)}>
              <i>
                <FaImages />
              </i>
              <p>Image</p>
              <i className="check-icon">
                {images ? <FaCheck /> : <FaCircleXmark />}
              </i>
            </div>
            <div class="custom-button" onClick={() => setVideos(!videos)}>
              <i>
                <FaVideo />
              </i>
              <p>Video</p>
              <i className="check-icon">
                {videos ? <FaCheck /> : <FaCircleXmark />}
              </i>
            </div>
            <div class="custom-button" onClick={() => setMusics(!musics)}>
              <i>
                <MdLibraryMusic />
              </i>
              <p>Music</p>
              <i className="check-icon">
                {musics ? <FaCheck /> : <FaCircleXmark />}
              </i>
            </div>
            <div class="custom-button fill" onClick={() => {}}>
              <i>
                <FaVideo />
              </i>
              <p>Verified</p>
              <i className="check-icon">
                <PiSealCheckFill />
              </i>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Filter;
