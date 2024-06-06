import React, { useState } from "react";

// INTERNAL IMPORT
import "../Style/Author.css";
import images from "../assets/img/z-index.img";

import {
  Banner,
  Title,
  Brand,
  FollowerCard,
} from "../components/z-index.component";
import AuthorNFTCardBox from "../components/AuthorPage/AuthorNFTCardBox/AuthorNFTCardBox";
import {
  AuthorProfile,
  AuthorTaps,
} from "../components/z-index.component.page";

function Author() {
  const cardData = {
    popular: [
      {
        background: images.creatorbackground1,
        user: images.user2,
        rating: 23,
      },
      {
        background: images.creatorbackground2,
        user: images.user3,
        rating: 29,
      },
      {
        background: images.creatorbackground3,
        user: images.user4,
        rating: 65,
      },
      {
        background: images.creatorbackground4,
        user: images.user5,
        rating: 12,
      },
      {
        background: images.creatorbackground5,
        user: images.user6,
        rating: 53,
      },
      {
        background: images.creatorbackground6,
        user: images.user7,
        rating: 92,
      },
      {
        background: images.creatorbackground7,
        user: images.user8,
        rating: 56,
      },
    ],
    following: [
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
    ],
    news: [
      {
        background: images.creatorbackground9,
        user: images.user10,
        rating: 63,
      },
      {
        background: images.creatorbackground9,
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
      {
        background: images.creatorbackground7,
        user: images.user8,
        rating: 63,
      },
      {
        background: images.creatorbackground2,
        user: images.user3,
        rating: 22,
      },
    ],
  };

  const [collectables, setCollectibles] = useState(true);
  const [created, setCreated] = useState(false);
  const [like, setLike] = useState(false);
  const [follower, setFollower] = useState(false);
  const [following, setFollowing] = useState(false);

  // console.log(created);

  return (
    <div className="author-page">
      <Banner bannerImage={images.creatorbackground5} />
      <AuthorProfile />
      <AuthorTaps
        setCollectibles={setCollectibles}
        setCreated={setCreated}
        setLike={setLike}
        setFollower={setFollower}
        setFollowing={setFollowing}
      />
      <AuthorNFTCardBox
        collectables={collectables}
        created={created}
        like={like}
        follower={follower}
        following={following}
      />
      <Title
        heading={"Popular Creator"}
        paragraph={"Click on music icon and enjoy NFT music or audio"}
      />

      <div className="author-box-popular">
        {cardData.popular.map((el, i) => (
          <FollowerCard el={el} key={i + i} />
        ))}
      </div>
      <Brand />
    </div>
  );
}

export default Author;
