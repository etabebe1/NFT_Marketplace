import React, { useState } from "react";

// INTERNAL IMPORT
import "./NFTCard.css";
import images from "../../assets/img/z-index.img";
import { IoIosHeart } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaImages } from "react-icons/fa";

function NFTCard() {
  const cardsData = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const [like, setLike] = useState(true);

  const likeNFT = () => {
    if (!like) {
      setLike(true);
    } else {
      setLike(false);
    }
  };

  return (
    <div className="NFTcard">
      {cardsData.map((el, i) => {
        return (
          <div className="card_box" key={i + 1}>
            <div className="card_box_image">
              <img src={images.nft_image_1} alt="nft_image" />
            </div>

            <div className="card_box_update">
              <div className="card_box_update_left">
                <div
                  className="card_box_update_left_like"
                  onClick={() => likeNFT()}
                >
                  <i>{like ? <IoIosHeart /> : <IoIosHeartEmpty />}</i> <p>23</p>
                </div>
              </div>

              <div className="card_box_update_right">
                <div className="card_box_update_right_info">
                  <small>Remaining time</small>
                  <p>3h : 15m : 20s</p>
                </div>
              </div>
            </div>

            <div className="card_box_update_details">
              <div className="card_box_update_details_price">
                <div className="card_box_update_details_price_box">
                  <h4>Clone #15679</h4>

                  <div className="card_box_update_details_price_box_container">
                    <div className="card_box_update_details_price_box_container_bid">
                      <small>Current Bid</small>
                      <p>1.000ETH</p>
                    </div>
                    <div className="card_box_update_details_price_box_container_stock">
                      <small>61 in stock</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card_box_update_details_category">
                <FaImages />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default NFTCard;
