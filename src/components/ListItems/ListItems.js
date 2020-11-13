import React from 'react';
import "./ListItems.css";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

function ListItems() {
  return (
    <div className="listItems">
      <List>
        <ListItem button>
            <ListItemText primary="Lab Test Report: I.R.I.S. Readiris Corporate 17"/>
        </ListItem>
        <Divider/>
        <ListItem button>
            <ListItemText primary="Canon mxHero Secure Scan to Email"/>
        </ListItem>
        <Divider/>
        <ListItem button>
            <ListItemText primary="Canon IRISXtract 5"/>
        </ListItem>
        <Divider/>
        <ListItem button>
            <ListItemText primary="Lab Test Report: Canon IRISPowerScan 11"/>
        </ListItem>
        <Divider/>
        <ListItem button>
            <ListItemText primary="Konica Minolta Personalize"/>
        </ListItem>
      </List>
    </div>
  )
}

export default ListItems
