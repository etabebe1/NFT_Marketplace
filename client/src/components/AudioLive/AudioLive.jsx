import React from "react";

// INTERNAL IMPORT
import "./AudioLive.css";

import { AudioCard, AudioCardSmall } from "../z-index.component";

function AudioLive() {
  return (
    <div className="audioLive">
      <div className="audioLive_box">
        <div className="audioLive_box_left">
          <AudioCard />
          <AudioCard />
        </div>
        <div className="audioLive_box_right">
          <AudioCardSmall />
          <AudioCardSmall />
          <AudioCardSmall />
        </div>
      </div>
    </div>
  );
}

export default AudioLive;
