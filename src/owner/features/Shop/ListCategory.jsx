import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { 
    DragDropContext, 
    Droppable, 
    Draggable 
} from "react-beautiful-dnd";

// Theme
import {BorderColor} from './../../theme';

const WidgetContent = styled.div`
    font-size: .875rem;
    border: 1px solid ${BorderColor.mainColor};
    border-radius: 4px;
`;

const Header = styled.div`
    background-color: #f6f6f6;
    border-bottom: 1px solid ${BorderColor.mainColor};

    &>div{
        padding: .75rem .875rem;
    }

    .name{
        flex: 1;
    }

    .control{
        width: 8.125rem;
        box-sizing: content-box;
    }

    .amount{
        width: 8.125rem;
    }

    .created{
        width: 11.25rem;
        box-sizing: content-box;
    }

    .action{
        width: 7.375rem;
        box-sizing: content-box;
    }
`;

ListCategory.propTypes = {
    
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

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,
  
    // change background colour if dragging
    background: isDragging ? "lightgreen" : "grey",
  
    // styles we need to apply on draggables
    ...draggableStyle
});

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? "lightblue" : "lightgrey",
    padding: grid,
    width: 250
});

function ListCategory(props) {
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
        <WidgetContent>
            <Header className="d-flex">
                <div className="name">Tên danh mục</div>
                <div className="created">Tạo bởi</div>
                <div className="amount">Sản phẩm</div>
                <div className="control">Hiển thị Tắt/ Bật</div>
                <div className="action">Thao tác</div>
            </Header>

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
                                {item.content}
                                </div>
                            )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </WidgetContent>
    );
}

export default ListCategory;