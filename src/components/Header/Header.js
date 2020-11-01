import React from 'react';
import "./Header.css";
import logo from "../../images/bliQlogoWhite.svg"
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import HeaderUtils from "../HeaderUtils/HeaderUtils";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <MenuOutlinedIcon/>
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
  )
}

export default Header
