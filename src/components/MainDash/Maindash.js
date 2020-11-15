import React from 'react';
import "./Maindash.css";

import BigHero from "../BigHero/BigHero";
import WidgetNav from "../WidgetNav/WidgetNav";
import CardComponent from "../Card/Card";

import CountryInput from "../CountryInput/CountryInput";
import ProductNameInput from "../ProductNameInput/ProductNameInput";
import ListItems from "../ListItems/ListItems";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import SoftwareEd from "../SoftwareEd/SoftwareEd";
import Button from '@material-ui/core/Button';

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

        <CardComponent title="Favorites" favFooter={true}>
          <ListItems/>
        </CardComponent>

        <CardComponent title="Software Education" SoEdFooter={true}>
          <SoftwareEd/>
        </CardComponent>

        <CardComponent title="Part Search">
          <form className="search__form" noValidate autoComplete="off">
            <TextField id="standard-basic" label="Enter Part Number #" />
            <SearchIcon/>
          </form>
          <ListItems/>
        </CardComponent>

        <CardComponent title="Latest Awards" awardsFooter={true} media={true}>
          
          <Button variant="outlined" color="primary">
            Read More
          </Button>
          <form className="search__form" noValidate autoComplete="off">
            <TextField id="standard-basic" label="Choose Award" />
          </form>
          <SoftwareEd/>
        </CardComponent>
      </div>
    </div>
  )
}

export default Maindash
