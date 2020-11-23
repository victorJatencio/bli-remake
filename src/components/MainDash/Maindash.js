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

const cardComponents = [
  {
    id: 1,
    component: <CompetitiveModels />
  },
  {
    id: 2,
    component: <RecentlyViewed />
  },
  {
    id: 3,
    component: <TwitterFeed />
  },
  {
    id: 4,
    component: <Favorites />
  },
  {
    id: 5,
    component: <SoftwareEd />
  },
  {
    id: 6,
    component: <PartSearch />
  },
  {
    id: 7,
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
                          <div className="mainCard__container" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                        
                            { component }
                            
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
