import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { 
    DragDropContext, 
    Droppable, 
    Draggable 
} from "react-beautiful-dnd";

// Components
import SwitchBox from '../../components/SwitchBox';


ListCategoryCanMove.propTypes = {
    
};

// fake data generator
const getItems = count =>
    Array.from({ length: count }, (v, k) => k).map(k => ({
        id: `item-${k}`,
        content: `item ${k}`}
    )
);

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
  
    return result;
};

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: "0 .875rem",
  
    // change background colour if dragging
    background: isDragging ? "#F7F9B7" : "#fff",
  
    // styles we need to apply on draggables
    ...draggableStyle
});

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? "" : "lightgrey",
});

function ListCategoryCanMove(props) {
    // Data
    const [items, setItems] = React.useState(getItems(10));

    // handle event
    const onDragEnd = (result) => {
        // dropped outside the list
        if (!result.destination) {
            return;
        }
    
        const temp = reorder(
            items,
            result.source.index,
            result.destination.index
        );

    
        setItems(temp);
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
                {(provided, snapshot) => (
                    <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={getListStyle(snapshot.isDraggingOver)}
                    >
                    {items.map((item, index) => (
                        <Draggable key={item.id} draggableId={item.id} index={index}>
                        {(provided, snapshot) => (
                            <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={getItemStyle(
                                snapshot.isDragging,
                                provided.draggableProps.style
                            )}
                            >
                                <div className="d-flex align-items-center category-item">
                                    <div className="name">New Arrival </div>
                                    <div className="create">Hệ thống | Hàng mới về</div>
                                    <div className="amount">0</div>
                                        
                                    <div className="control">
                                        <SwitchBox/>
                                    </div>

                                    <div className="action">
                                        <button><svg xmlns="http://www.w3.org/2000/svg"><path d="M7 3a.5.5 0 0 1 .398.197l4.905 4.907a.5.5 0 0 1-.707.707L7.5 4.715V15.5a.5.5 0 1 1-1 0V4.714L2.404 8.811a.5.5 0 0 1-.707-.707l4.905-4.907A.5.5 0 0 1 7 3zm6.5-3a.5.5 0 1 1 0 1H.5a.5.5 0 0 1 0-1h13z" fill-rule="evenodd"></path></svg></button>
                                        <button><svg xmlns="http://www.w3.org/2000/svg"><path d="M7 13a.5.5 0 0 1-.398-.197L1.697 7.896a.5.5 0 0 1 .707-.707L6.5 11.285V.5a.5.5 0 1 1 1 0v10.786l4.096-4.097a.5.5 0 0 1 .707.707l-4.905 4.907A.5.5 0 0 1 7 13zM.5 16a.5.5 0 1 1 0-1h13a.5.5 0 0 1 0 1H.5z" fill-rule="evenodd"></path></svg></button>
                                    </div>
                                </div>
                            </div>
                        )}
                        </Draggable>
                    ))}
                    {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
}

export default ListCategoryCanMove;