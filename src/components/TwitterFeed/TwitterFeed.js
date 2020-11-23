import React from 'react';
import "./TwitterFeed.css";

import { TwitterTimelineEmbed } from "react-twitter-embed";

function TwitterFeed() {
  return (
    <div className="twitterFeed">
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="KeypointIntel"
          options={{ height: 400 }}
        />
    </div>
  )
}

export default TwitterFeed
