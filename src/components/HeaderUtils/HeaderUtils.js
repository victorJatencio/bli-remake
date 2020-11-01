import React from 'react';
import "./HeaderUtils.css";

import { Avatar } from "@material-ui/core";
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';

function HeaderUtils() {
  return (
    <div className="headerUtils">
      <div className="headerUtils__user">
        <Avatar className="headerUtils__userImage"/>
        <span>Hi Victor</span>
        <ExpandMoreOutlinedIcon/>
      </div>
      <span className="headerUtils__pipe">|</span>
      <div className="headerUtils__help">
        <p>Help</p>
        <HelpOutlineOutlinedIcon/>
      </div>
    </div>
  )
}

export default HeaderUtils
