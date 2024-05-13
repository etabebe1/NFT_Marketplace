import React from "react";

// INTERNAL IMPORT
import "./Category.css";
import images from "../../assets/img/z-index.img";
import { SiDocsdotrs } from "react-icons/si";

function Category() {
  const cards = [1, 2, 3, 4, 5, 6];

  return (
    <div className="card-container">
      {cards.map((card, index) => {
        return (
          <div className="card" key={index + 1}>
            <img
              src={images.creatorbackground1}
              alt="Card_Image"
              className="card-image"
            />
            <div className="card-content">
              <i>
                <SiDocsdotrs />
              </i>
              <div className="aside">
                <h5>Entertainment</h5>
                <p>1995 NFT</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Category;
