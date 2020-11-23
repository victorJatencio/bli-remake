import React from 'react';
import "./PartSearch.css";

import Card from "../Card/Card";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';

function PartSearch() {
  return (
    <div className="partSearch">
      <Card title="Part Search">
        <form className="search__form" noValidate autoComplete="off">
          <TextField id="standard-basic" label="Enter Part Number #" />
          <SearchIcon/>
        </form>

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
      </Card>
    </div>
  )
}

export default PartSearch
