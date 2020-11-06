import React, { useState } from 'react';
import "./NavigationTabs.css";

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function NavigationTabs() {

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="navigationTabs">
      <div className="navigationTabs__nav">
        <div className="navigationTabs__options">Select Database</div>
        <Paper className="navigationTabs__paper">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="My bliQ" />
            <Tab label="Search Device" />
            <Tab label="Compare" />
            <Tab label="Calculate" />
            <Tab label="Build" />
            <Tab label="Research" />
          </Tabs>
        </Paper>
      </div>
    </div>
  )
}

export default NavigationTabs
