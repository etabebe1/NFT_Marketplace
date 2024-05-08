import React from "react";

// INTERNAL IMPORT
import "./Home.css";

import { Hero, Service } from "../../components/z-index.component";

function Home() {
  return (
    <div className="home">
      <Hero></Hero>
      <Service></Service>
    </div>
  );
}

export default Home;
