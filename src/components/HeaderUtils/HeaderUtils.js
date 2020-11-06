import React from 'react';
import "./HeaderUtils.css";

import { Avatar } from "@material-ui/core";
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';

function HeaderUtils() {
  return (
    <div className="headerUtils">
      <div className="headerUtils__user">
        <Avatar className="headerUtils__userImage" src="https://lh3.googleusercontent.com/ogw/ADGmqu-Kxgm27oH6nayScz_R2ZrhST5g8GEYcpyJB6U4=s192-c-mo"/>
        <span>Hi Victor</span>
      </div>
      <span className="headerUtils__pipe">|</span>
      <div className="headerUtils__settings">
        <SettingsOutlinedIcon/>
      </div>
      <div className="headerUtils__help">
        <HelpOutlineOutlinedIcon/>
        <p>Help</p>
      </div>
    </div>
  )
}

export default HeaderUtils
