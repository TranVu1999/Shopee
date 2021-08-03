import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

// Theme
import {BorderColor, Color} from './../../theme';

const WidgetContent = styled.div`
    padding-left: 3rem;
    font-size: 16px;
`;

const Post = styled.div`
    padding: 1.5em 0em 1em;
    border-bottom: 1px solid ${BorderColor.mainColor};
    cursor: pointer;

    &:hover{
        color: ${Color.mainColor}
    }
`;

ListPost.propTypes = {
    items: PropTypes.array,
};

ListPost.defaultProps = {
    items: []
};

function ListPost(props) {
    const {items} = props;

    // Render
    const renderListPost = () => {
        return items.map(item =>{
            return (
                <Post key = {item.id}>{item.title}</Post>
            );
        })
    };

    return (
        <WidgetContent>
            <h5 className="page-article--header">Bài viết</h5>
            {renderListPost()}
        </WidgetContent>
    );
}

export default ListPost;
