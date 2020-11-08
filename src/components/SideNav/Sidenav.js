import React from 'react';
import "./Sidenav.css";

import SidenavLink from "../SidenavLink/SidenavLink";
import DashboardIcon from '@material-ui/icons/Dashboard';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import CompareArrowsOutlinedIcon from '@material-ui/icons/CompareArrowsOutlined';
import DataUsageOutlinedIcon from '@material-ui/icons/DataUsageOutlined';
import BuildOutlinedIcon from '@material-ui/icons/BuildOutlined';
import FindInPageOutlinedIcon from '@material-ui/icons/FindInPageOutlined';

import { useDataLayerValue } from "../../StateProvider";

function Sidenav() {
  const [{collapsed}, dispatch] = useDataLayerValue();
  
  return (
    <aside className={collapsed ? 'sideNav openNav' : 'sideNav'}>
      <h4>Main Menu</h4>
      <hr/>
      <div className="sideNav__menuGroup">
        <ul className="sidebar_nav">
          <li>
            <SidenavLink selected Icon={<DashboardIcon/>} name="My bliQ"/>
          </li>
          <li>
            <SidenavLink Icon={<SearchOutlinedIcon/>} name="Search"/>
          </li>
          <li>
            <SidenavLink Icon={<CompareArrowsOutlinedIcon/>} name="Compare"/>
          </li>
          <li>
            <SidenavLink Icon={<DataUsageOutlinedIcon/>} name="Calculate"/>
          </li>
          <li>
            <SidenavLink Icon={<BuildOutlinedIcon/>} name="Build"/>
          </li>
          <li>
            <SidenavLink Icon={<FindInPageOutlinedIcon/>} name="Research"/>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default Sidenav
