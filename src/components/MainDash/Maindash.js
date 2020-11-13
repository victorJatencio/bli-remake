import React from 'react';
import "./Maindash.css";

import BigHero from "../BigHero/BigHero";
import WidgetNav from "../WidgetNav/WidgetNav";
import CardComponent from "../Card/Card";

import CountryInput from "../CountryInput/CountryInput";
import ProductNameInput from "../ProductNameInput/ProductNameInput";
import ListItems from "../ListItems/ListItems";
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from "react-twitter-embed"; 

function Maindash() {

  return (
    <div className="mainDash">
      <BigHero bkgImage="https://images.unsplash.com/photo-1603996331944-dcb02c639178?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"/>
      <WidgetNav/>

      <div className="mainDash__cardGrid">
        <CardComponent title="Competitive Models">
          <CountryInput/>
          <ProductNameInput/>
        </CardComponent>

        <CardComponent title="Recently Viewed">
          <ListItems/>
        </CardComponent>

        <CardComponent title="Twitter Feed">
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="KeypointIntel"
            options={{ height: 400 }}
          />
        </CardComponent>
        <CardComponent title="Favorites"/>
        <CardComponent title="Software Education"/>
        <CardComponent title="Part Search"/>
        <CardComponent title="Latest Awards"/>
      </div>
    </div>
  )
}

export default Maindash
