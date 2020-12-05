import React from 'react';
import "./CardsSelection.css";

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { useDataLayerValue } from "../../StateProvider";

function CardsSelection() {
  const [{check}, dispatch] = useDataLayerValue();

  const handleCheck = (event) => {
    // setCollapsed(!collapsed);
    dispatch({
      type: 'SET_CHECK',
      check: {...check, [event.target.name]: event.target.checked}
    })
  };

  return (
    <div className="cardsSection">
      <FormGroup row>

        <div className="cardsCol">
          <FormControlLabel
            control= {
              <Checkbox
                checked={check.all}
                onChange={handleCheck}
                name="all"
                color="primary"
              />
            }
            label="All"
          />
          <FormControlLabel
            control= {
              <Checkbox
                checked={check.recentlyViewed}
                onChange={handleCheck}
                name="recentlyViewed"
                color="primary"
              />
            }
            label="Recently Viewed"
          />
          <FormControlLabel
            control= {
              <Checkbox
                checked={check.competitiveModels}
                onChange={handleCheck}
                name="competitiveModels"
                color="primary"
              />
            }
            label="Competitive Models"
          />
        </div>
        <div className="cardsCol">
          <FormControlLabel
            control= {
              <Checkbox
                checked={check.favorites}
                onChange={handleCheck}
                name="favorites"
                color="primary"
              />
            }
            label="Favorites"
          />
          <FormControlLabel
            control= {
              <Checkbox
                checked={check.twitter}
                onChange={handleCheck}
                name="twitter"
                color="primary"
              />
            }
            label="Twitter Feed"
          />
          <FormControlLabel
            control= {
              <Checkbox
                checked={check.softwareEd}
                onChange={handleCheck}
                name="softwareEd"
                color="primary"
              />
            }
            label="Software Education"
          />
        </div>
        <div className="cardsCol">
          <FormControlLabel
            control= {
              <Checkbox
                checked={check.news}
                onChange={handleCheck}
                name="news"
                color="primary"
              />
            }
            label="News"
          />
          <FormControlLabel
            control= {
              <Checkbox
                checked={check.latestAwards}
                onChange={handleCheck}
                name="latestAwards"
                color="primary"
              />
            }
            label="Latest Awards"
          />
          <FormControlLabel
            control= {
              <Checkbox
                checked={check.recentlyPublished}
                onChange={handleCheck}
                name="recentlyPublished"
                color="primary"
              />
            }
            label="Recently Published"
          />
        </div>
      </FormGroup>
    </div>
  )
}

export default CardsSelection
