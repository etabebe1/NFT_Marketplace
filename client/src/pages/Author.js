import React from "react";

// INTERNAL IMPORT
import "../Style/Author.css";

import { Banner, AuthorProfile } from "../components/z-index.component";
import images from "../assets/img/z-index.img";

function Author() {
  return (
    <div className="author-page">
      <Banner bannerImage={images.creatorbackground5} />
      <AuthorProfile />
    </div>
  );
}

export default Author;
