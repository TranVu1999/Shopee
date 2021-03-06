import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

const WidgetLetter = styled.div`
    width: 100px;
    height: 100px;

    text-align: center;
    font-size: 60px;
    line-height: 43px;
`;

const WidgetStore = styled(Link)`
    display: block;
    width: 20%;
    padding: 0 20px;
    margin-bottom: 25px;

    text-align: center;
    transition: all .3s ease;    

    &:hover{
        color: #c7a17a;
        div{
            border-color: #c7a17a;
        }
    }
`;

const WidgetImage = styled.div`
    position: relative;

    min-height: 95px;
    margin-bottom: 10px;
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;

    border: 1px solid #d5d5d5;
    transition: all .3s ease;
    overflow: hidden;

    .label{
        position: absolute;
        top: -33px;
        left: -33px;
        transform: rotate(-45deg);

        padding-top: 40px;
        height: 65px;
        width: 65px;

        text-transform: capitalize;
        text-align: center;

        background-color: #d0011b;
        color: #fff;

    }
`;


WidgetListStoreByLetter.propTypes = {
    letter: PropTypes.string,
    listStore: PropTypes.array,
};

WidgetListStoreByLetter.defaultProps = {
    letter: "A",
    listStore: []
}

function WidgetListStoreByLetter(props) {
    const {letter, listStore} = props;

    // Render
    const renderListStore = () =>{
        return listStore.map(item =>{
            return (
                <WidgetStore key = {item.title} to = "/store-detail">
                    <WidgetImage image = {item.image}>
                        {item.new && <div className="label">Mới</div>}
                        
                    </WidgetImage>

                    <span>{item.title}</span>
                </WidgetStore>
            );
        });
    }

    return (
        <div className = "d-flex">
            <WidgetLetter id = {letter}>{letter}</WidgetLetter>

            <div 
                className="d-flex flex-wrap flex-fill" 
                style = {{marginRight: "-20px"}}
            >
                {renderListStore()}
            </div>
        </div>
    );
}

export default WidgetListStoreByLetter;