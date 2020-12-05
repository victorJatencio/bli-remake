import React, { useState } from 'react';
import "./Maindash.css";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import _ from "lodash";
import {v4} from "uuid";

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


const competitiveModels = {
  id: v4(),
  title: "Competitive Models",
  component: <CompetitiveModels />
}
const recentlyViewed = {
  id: v4(),
  title: "Recently Viewed",
  component: <RecentlyViewed />
}
const twitterFeed = {
  id: v4(),
  title: "Twitter Feed",
  component: <TwitterFeed />
}
const favorites = {
  id: v4(),
  title: "Favorites",
  component: <Favorites />
}
const softwareEd = {
  id: v4(),
  title: "Software Education",
  component: <SoftwareEd />
}
const partSearch = {
  id: v4(),
  title: "Part Search",
  component: <PartSearch />
}
const latestAwards = {
  id: v4(),
  title: "Latest Awards",
  component: <LatestAwards />
}

function Maindash() {
  const [dstate, setDstate] = useState({
    "leftCol": {
      title: "Left Column",
      items: [competitiveModels, twitterFeed, softwareEd, latestAwards]
    },
    "rightCol": {
      title: "Right Column",
      items: [recentlyViewed, favorites, partSearch]
    }
  })


  const handleDragEnd = ({destination, source}) => {
    if(!destination) {
      return
    }

    if(destination.index === source.index && destination.droppableId === source.droppableId) {
      return
    }

    // Creating a copy of items before removing from state
    const itemCopy = {...dstate[source.droppableId].items[source.index]}
    setDstate(prev => {
      prev = {...prev}

      // Remove from previous items array
      prev[source.droppableId].items.splice(source.index, 1)

      // Adding to new items array location
      prev[destination.droppableId].items.splice(destination.index, 0, itemCopy)

      return prev
    })
  }

  return (
    <div className="mainDash">
      <BigHero bkgImage="https://images.unsplash.com/photo-1603996331944-dcb02c639178?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"/>
      <WidgetNav/>

      <div className="mainDash__cardGrid">
        <DragDropContext onDragEnd={handleDragEnd}>
          {_.map(dstate, (data, key) => {
            return(
              <div key={key} className="column">
                <Droppable droppableId={key}>
                  {(provided, snapshot) => {
                    return(
                      <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className={`droppable-col ${snapshot.isDraggingOver && 'dropping'}`}
                      >
                        {data.items.map((el, index) => {
                          return(
                            <Draggable key={el.id} index={index} draggableId={el.id}>
                              {(provided) => {
                                return(
                                  <div
                                    className="drag__item"
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                  >
                                    <Card>
                                      <div className="card__headerSection">
                                        <div className="card__utilities">
                                          <Tooltip title="Text" placement="top">
                                              <HelpOutlineIcon/>
                                          </Tooltip>
                                          <span {...provided.dragHandleProps}>
                                            <DragHandleIcon/>
                                          </span>
                                        </div>
                                        <h4>{el.title}</h4>
                                      </div>
                                      <CardContent>
                                        {el.component}
                                      </CardContent>
                                    </Card>

                                  </div>
                                )
                              }}
                            </Draggable>
                          )
                        })}
                        {provided.placeholder}
                      </div>
                    )
                  }}
                </Droppable>
              </div>
            )
          })}
        </DragDropContext>
      </div>
    </div>
  )
}

export default Maindash
