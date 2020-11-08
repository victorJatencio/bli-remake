import React, { useState } from 'react';
import "./Header.css";
import logo from "../../images/bliQlogoWhite.svg"
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import HeaderUtils from "../HeaderUtils/HeaderUtils";
import IconButton from '@material-ui/core/IconButton';

import { useDataLayerValue } from "../../StateProvider";

function Header() {

  // const [collapsed, setCollapsed] = useState(false);
  const [{collapsed}, dispatch] = useDataLayerValue();

  const handleCollapsed = () => {
    // setCollapsed(!collapsed);
    dispatch({
      type: 'SET_SIDEMENU',
      collapsed: !collapsed
    })
  };

  console.log("From data layer: ", collapsed);
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__left">
          <IconButton onClick={handleCollapsed} className="header__IconMenu">
            <MenuOutlinedIcon/>
          </IconButton>
        <img src={logo} alt="..."/>
        </div>

        <div className="header__center">
          <div className="header__search">
            <input type="text"/>
            <SearchOutlinedIcon/>
          </div>
        </div>

        <div className="header__right">
          <HeaderUtils/>
        </div>
      </div>    
    </div>
  )
}

export default Header
