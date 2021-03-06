import React from 'react';
import "./Favorites.css";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import CardFooter from '../CardFooter/CardFooter';

function Favorites() {
  return (
    <div className="favorites">
      <div className="favorites__content">
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

        <CardFooter>
          <Button href="#text-buttons" color="primary">
            Sort by date
          </Button>
          <Button href="#text-buttons" color="primary">
            Sort by name
          </Button>
        </CardFooter>
    </div>
  )
}

export default Favorites
