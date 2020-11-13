import React from 'react';
import "./Card.css";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Tooltip from '@material-ui/core/Tooltip';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

function CardComponent({title, children}) {

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
      </Card>
    </div>
  )
}

export default CardComponent
