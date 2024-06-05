import React from "react";

// INTERNAL IMPORT
import "./AuthorNFTCardBox.css";
import images from "../../../assets/img/z-index.img";

// COMPONENTS
import { NFTCardTwo, FollowerCard } from "../../z-index.component";

function AuthorNFTCardBox({
  collectables,
  created,
  like,
  following,
  follower,
}) {
  const collectablesArray = [
    images.nft_image_2,
    images.nft_image_1,
    images.nft_image_3,
    images.nft_image_4,
    images.nft_image_5,
    images.nft_image_6,
    images.nft_image_7,
  ];
  const createdArray = [
    images.nft_image_7,
    images.nft_image_8,
    images.nft_image_9,
    images.nft_image_10,
  ];
  const likeArray = [
    images.nft_image_3,
    images.nft_image_4,
    images.nft_image_10,
    images.nft_image_11,
    images.nft_image_6,
  ];
  const followerArray = [
    {
      background: images.creatorbackground9,
      user: images.user10,
      rating: 63,
    },
    {
      background: images.creatorbackground11,
      user: images.user8,
      rating: 82,
    },
    {
      background: images.creatorbackground8,
      user: images.user9,
      rating: 63,
    },
    {
      background: images.creatorbackground10,
      user: images.user10,
      rating: 92,
    },
    {
      background: images.creatorbackground11,
      user: images.user1,
      rating: 83,
    },
  ];
  const followingArray = [
    {
      background: images.creatorbackground3,
      user: images.user2,
      rating: 67,
    },
    {
      background: images.creatorbackground4,
      user: images.user3,
      rating: 92,
    },
    {
      background: images.creatorbackground1,
      user: images.user4,
      rating: 1,
    },
    {
      background: images.creatorbackground6,
      user: images.user7,
      rating: 56,
    },
    {
      background: images.creatorbackground7,
      user: images.user6,
      rating: 43,
    },
    {
      background: images.creatorbackground2,
      user: images.user5,
      rating: 34,
    },
    {
      background: images.creatorbackground5,
      user: images.user8,
      rating: 73,
    },
  ];

  return (
    <div className="AuthorNFTCardBox">
      {collectables && <NFTCardTwo NFTData={collectablesArray} />}
      {created && <NFTCardTwo NFTData={createdArray} />}
      {like && <NFTCardTwo NFTData={likeArray} />}
      {follower && (
        <div className="follow-cards-container">
          {followerArray.map((el, i) => {
            return <FollowerCard el={el} key={i + 1} />;
          })}
        </div>
      )}

      {following && (
        <div className="follow-cards-container">
          {followingArray.map((el, i) => {
            return <FollowerCard el={el} key={i + 1} />;
          })}
        </div>
      )}
    </div>
  );
}

export default AuthorNFTCardBox;
