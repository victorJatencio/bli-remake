import React from 'react';
import "./Card.css";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Tooltip from '@material-ui/core/Tooltip';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

function CardComponent() {
  return (
    <div className="card">
      <Card className="card_element">
        <div className="card__header">
          <div className="card__utilities">
            <Tooltip title="Text" placement="top">
                <HelpOutlineIcon/>
            </Tooltip>
          </div>
          <h4>Competitive Models</h4>
        </div>
        <CardContent>
          <p>Content</p>
        </CardContent>
      </Card>
    </div>
  )
}

export default CardComponent
