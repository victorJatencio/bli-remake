import React from 'react';
import "./Card.css";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Tooltip from '@material-ui/core/Tooltip';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';

function CardComponent({title, children, favFooter, SoEdFooter, awardsFooter, media}) {


  return (
    <div className="card">
      <Card className="card_element">
        <div className="card__header">
          <div className="card__utilities">
            <Tooltip title="Text" placement="top">
                <HelpOutlineIcon/>
            </Tooltip>
          </div>
          <h4>{title}</h4>
        </div>
        {
          media &&
          <CardMedia
            className="card__media"
            image="https://www.buyerslab.com/bliQ/images/ads/COVID-banner.jpg"
            title="New Pics"
          />
        }
        <CardContent>
          {children}
        </CardContent>

        {
          favFooter &&
          <div className="footer">
            <Button href="#text-buttons" color="primary">
              Sort by date
            </Button>
            <Button href="#text-buttons" color="primary">
              Sort by name
            </Button>
          </div>
        }
        {
          SoEdFooter && 
          <div className="footer">
            <Button href="#text-buttons" color="primary">
              See More
            </Button>
          </div>
        }
        {
          awardsFooter &&
          <div className="footer">
            <Button href="#text-buttons" color="primary">
              View All
            </Button>
            <Button href="#text-buttons" color="primary">
              View Preffered
            </Button>
          </div>
        }
      </Card>
    </div>
  )
}

export default CardComponent
