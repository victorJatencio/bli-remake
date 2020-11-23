import React from 'react';
import "./LatestAwards.css";

import Card from "../Card/Card";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import CardMedia from '@material-ui/core/CardMedia';


function LatestAwards() {
  return (
    <div className="latestAwards">
      <Card title="Latest Awards">
        <CardMedia
          className="card__media"
          image="https://www.buyerslab.com/bliQ/images/ads/COVID-banner.jpg"
          title="New Pics"
        />
        <Button variant="outlined" color="primary">
          Read More
        </Button>
        <form className="search__form" noValidate autoComplete="off">
          <TextField id="standard-basic" label="Choose Award" />
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

        <div className="footer">
          <Button href="#text-buttons" color="primary">
            View All
          </Button>
          <Button href="#text-buttons" color="primary">
            View Preffered
          </Button>
        </div>
      </Card>
    </div>
  )
}

export default LatestAwards
