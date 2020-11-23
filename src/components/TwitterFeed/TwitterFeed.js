import React from 'react';
import "./TwitterFeed.css";

import { TwitterTimelineEmbed } from "react-twitter-embed";

import Card from "../Card/Card";

function TwitterFeed() {
  return (
    <div className="twitterFeed">
      <Card title="Twitter Feed">
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="KeypointIntel"
          options={{ height: 400 }}
        />
      </Card>
    </div>
  )
}

export default TwitterFeed
