import React from 'react';
import "./Card.css";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Tooltip from '@material-ui/core/Tooltip';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import Button from '@material-ui/core/Button';

function CardComponent({title, children, footer}) {

  const getFooter = footer;

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
        <CardContent>
          {children}
        </CardContent>

        {getFooter &&
          <div className="footer">
            <Button href="#text-buttons" color="primary">
              Sort by date
            </Button>
            <Button href="#text-buttons" color="primary">
              Sort by name
            </Button>
          </div>
        }
      </Card>
    </div>
  )
}

export default CardComponent
