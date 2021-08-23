import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const WidgetContent = styled.div`
    text-align: center;

    a{
        display: block;
        height: 222px;

        .thumbnail{
            height: calc(100% - 50px);

            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
        }

        .text{
            display: -webkit-box;
            text-overflow: ellipsis;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            word-wrap: break-word;
            overflow: hidden;
            
            width: 100%;
            height: 27px;

            font-size: 18px;

            color: #d0011b;

            line-height: 27px;
        }
    }
`;



Thumbnail.propTypes = {
    link: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
};

Thumbnail.defaultProps = {
    link: "#/",
    image: "",
    title: ""
}

function Thumbnail(props) {

    const {title, link, image} = props;

    return (
        <WidgetContent className = "store-thumbnail-content">
            <a href = {link}>
                <div 
                    className="thumbnail" 
                    style = {{backgroundImage: `url(${image})`}}
                ></div>
                <div className="text">{title}</div>
            </a>
        </WidgetContent>
    );
}

export default Thumbnail;