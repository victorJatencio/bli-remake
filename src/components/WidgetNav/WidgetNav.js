import React, { useState } from 'react';
import "./WidgetNav.css";

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FolderOutlinedIcon from '@material-ui/icons/FolderOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AccessAlarmOutlinedIcon from '@material-ui/icons/AccessAlarmOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import CardsSelection from "../CardsSelection/CardsSelection";

import { useDataLayerValue } from "../../StateProvider";

function WidgetNav() {

  const [value, setValue] = useState(0);
  const [{expandWidgets}, dispatch] = useDataLayerValue();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleExpand = () => {
    // setCollapsed(!collapsed);
    dispatch({
      type: 'SET_TABMENU',
      expandWidgets: !expandWidgets
    })
  };

  return (
    <div className="widgetNav">
      <div className="widgetNav__container">
        <h3>My bliQ</h3>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
          aria-label="icon label tabs example"
        >
          <Tab icon={<FolderOutlinedIcon />} label="Folders" />
          <Tab icon={<SearchOutlinedIcon />} label="Searches" />
          <Tab icon={<AccessAlarmOutlinedIcon />} label="Alerts" />
          <Tab icon={<AccountCircleOutlinedIcon />} label="View Profile" />
          <Tab icon={<SettingsOutlinedIcon />} label="Settings" />
        </Tabs>

        <IconButton onClick={handleExpand} color="primary" aria-label="add an alarm">
          <MoreVertIcon />
        </IconButton>
      </div>

      <div className={expandWidgets ? 'widgetNav__dinamic expandWidget' : 'widgetNav__dinamic'}>
        <CardsSelection/>
      </div>
    </div>
  )
}

export default WidgetNav
