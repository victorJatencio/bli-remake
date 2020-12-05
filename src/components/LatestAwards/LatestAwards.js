import React from 'react';
import "./LatestAwards.css";

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import CardMedia from '@material-ui/core/CardMedia';
import CardFooter from '../CardFooter/CardFooter';


function LatestAwards() {
  return (
    <div className="latestAwards">
      
        <CardMedia
          className="card__media"
          image="https://www.buyerslab.com/bliQ/images/ads/COVID-banner.jpg"
          title="New Pics"
        />

        <div className="card__content">
          <Button variant="outlined" color="primary">
          Read More
          </Button>
          <form className="search__form" noValidate autoComplete="off">
            <TextField id="choose-award" label="Choose Award" />
          </form>
          <div className="awards__list">
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
        </div>
        
        <CardFooter>
          <Button href="#text-buttons" color="primary">
            View All
          </Button>
          <Button href="#text-buttons" color="primary">
            View Preffered
          </Button>
        </CardFooter>
      
    </div>
  )
}

export default LatestAwards
