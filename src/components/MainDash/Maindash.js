import React from 'react';
import "./Maindash.css";

import BigHero from "../BigHero/BigHero";
import WidgetNav from "../WidgetNav/WidgetNav";
import CompetitiveModels from "../CompetitiveModels/CompetitiveModels";

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

function Maindash() {

  const onDragEnd = (() => {
    // the only one that is required
    console.log('Hey')
  });

  return (
    <div className="mainDash">
      <BigHero bkgImage="https://images.unsplash.com/photo-1603996331944-dcb02c639178?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"/>
      <WidgetNav/>

      <div className="mainDash__cardGrid">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable-1">
            {(provided, _) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <Draggable draggableId="draggable-1" index={0}>
                  {(provided, _) => (
                    <div
                    className="draggable__item" 
                    ref={provided.innerRef} 
                    {...provided.draggableProps}>
                      <div className="draggable__handle"
                      {...provided.dragHandleProps}>
                        x
                      </div>
                      <CompetitiveModels />
                    </div>
                  )}
                </Draggable>
                <Draggable draggableId="draggable-2" index={1}>
                  {(provided, _) => (
                    <div
                    className="draggable__item" 
                    ref={provided.innerRef} 
                    {...provided.draggableProps}>
                      <div className="draggable__handle"
                      {...provided.dragHandleProps}>
                        x
                      </div>
                      <CompetitiveModels />
                    </div>
                  )}
                </Draggable>
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
