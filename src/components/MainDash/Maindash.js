import React, { useState } from 'react';
import "./Maindash.css";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import BigHero from "../BigHero/BigHero";
import WidgetNav from "../WidgetNav/WidgetNav";
import CompetitiveModels from "../CompetitiveModels/CompetitiveModels";
import RecentlyViewed from "../RecentlyViewed/RecentlyViewed";
import TwitterFeed from "../TwitterFeed/TwitterFeed";
import Favorites from "../Favorites/Favorites";
import SoftwareEd from "../SoftwareEd/SoftwareEd";
import PartSearch from "../PartSearch/PartSearch";
import LatestAwards from "../LatestAwards/LatestAwards";

import Tooltip from '@material-ui/core/Tooltip';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import DragHandleIcon from '@material-ui/icons/DragHandle';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const cardComponents = [
  {
    id: 1,
    title: "Competitive Models",
    component: <CompetitiveModels />
  },
  {
    id: 2,
    title: "Recently Viewed",
    component: <RecentlyViewed />
  },
  {
    id: 3,
    title: "Twitter Feed",
    component: <TwitterFeed />
  },
  {
    id: 4,
    title: "Favorites ",
    component: <Favorites />
  },
  {
    id: 5,
    title: "Software Education",
    component: <SoftwareEd />
  },
  {
    id: 6,
    title: "Part Search",
    component: <PartSearch />
  },
  {
    id: 7,
    title: "Latest Awards",
    component: <LatestAwards />
  }
];

function Maindash() {

  const [cards, updateCards] = useState(cardComponents);

  function handleOnDragEnd(result) {
    if( !result.destination ) return;
    const items = Array.from(cards);
    const [reorderedItems] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItems);

    updateCards(items);
  }

  return (
    <div className="mainDash">
      <BigHero bkgImage="https://images.unsplash.com/photo-1603996331944-dcb02c639178?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"/>
      <WidgetNav/>

      <div className="mainDash__cardGrid">
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="droppable-1">
            {(provided) => (

              <div {...provided.droppableProps} ref={provided.innerRef}>
                {
                  cards.map(({id, component}, index) => (
                  
                      <Draggable key={id} draggableId={`${id}`} index={index}>

                        {(provided, _) => (
                          <div className="mainCard__container" {...provided.draggableProps} ref={provided.innerRef}>
                            <Card className="card_element">
                              <div className="card__headerSection" {...provided.dragHandleProps}>
                              <div className="card__utilities">
                                <Tooltip title="Text" placement="top">
                                    <HelpOutlineIcon/>
                                </Tooltip>
                                <DragHandleIcon/>
                              </div>
                              <h4>Title</h4>
                              </div>
                              <CardContent>
                                { component }
                              </CardContent>
                            </Card>
                            
                          </div>
                        )}

                      </Draggable>
                    
                  ))
                }
                {provided.placeholder}
              </div>

            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  )
}

export default Maindash
