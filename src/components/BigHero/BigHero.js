import React from 'react';
import "./BigHero.css";

import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

function BigHero({bkgImage}) {
  return (
    <div className="bigHero" style={{backgroundImage: `url(${bkgImage})`}}>
      <div className="bigHero__content">
        <input accept="image/*" className="bigHero__input" id="icon-button-file" type="file" />

        <label htmlFor="icon-button-file">
          <IconButton className="bigHero__upload" color="default" aria-label="upload picture" component="span">
            <PhotoCamera />
          </IconButton>
        </label>
      </div>
    </div>
  )
}

export default BigHero
