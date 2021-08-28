import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const WidgetContent = styled.div`
    font-size: .9375rem;
    background-color: #fff;
`;

const Item = styled.div`
    position: relative;
    padding: 1rem .875rem;
    flex: 1;
    text-align: center;

    a{
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        word-wrap: break-word;
        overflow: hidden;
    }

    &:first-child{
        color: #d0011b;
        font-weight: 600;

        &:after{
            background-color: #d0011b;
        }
    }

    &:after{
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;

        width: 100%;
        height: 3px;
        background-color: transparent;
    }
`;

const MoreItem = styled(Item)`
    position: relative;
    max-width: 6rem;
    cursor: pointer;

    span.arrow_triangle-down{
        margin-top: .25rem;
        font-size: 1.125rem;
    }

    &:before{
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);

        width: 1px;
        height: 40%;
        background-color: rgba(0,0,0,.09);
    }

    .more-tab{
        position: absolute;
        right: 0;
        top: 100%;

        display: none;
        padding: .25rem 0;
        max-width: 250px;
        min-width: 250px;

        background-color: #fff;

        border: 1px solid #f8f8f8;
        border: 1px solid #d5d5d5;
        border-radius: 2px;
        box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px;

        z-index: 10;

        &:before{
            content: "";
            position: absolute;
            top: 0;
            right: 36px;
            transform: translateY(-54%) rotate(-45deg);

            width: 1rem;
            height: 1rem;

            background-color: #fff;
            
            border-right: 1px solid #d5d5d5;
            border-top: 1px solid #d5d5d5;
            border-top-right-radius: 2px;
            z-index: 0;
        }

        a{
            position: relative;
            display: block;
            padding: .25rem 1.5rem;
            text-align: left;

            &:hover{
                background-color: rgba(0,0,0,.05);
            }
        }
    }

    &:hover{
        .more-tab{
            display: block;
        }
    }
`;

TabFull.propTypes = {
    listTab: PropTypes.array.isRequired,
    moreTab: PropTypes.array,
    indexActive: PropTypes.number.isRequired,
};

TabFull.defaultProps = {
    moreTab: []
}

function TabFull({
    listTab, 
    moreTab
}) {

    // render
    const renderListTab = () =>{
        let listTabElm = [];
        
        for(let tab of listTab){
            listTabElm.push(
                <Item>
                    <Link to={tab.url}>
                        {tab.title}
                    </Link>
                </Item>
            );
        }
        return listTabElm;
    }

    const renderMoreListTab = () =>{
        let listTabElm = [];

        for(let tab of moreTab){
            listTabElm.push(
                <a href="#/">
                    {tab.title}
                </a>
            );
        }
        return listTabElm;
    }
    
    return (
        <WidgetContent className="d-flex align-items-center justify-content-between">
            {renderListTab()}
            {moreTab.length > 0 && (
                <MoreItem>
                    <div className="d-flex align-items-center label">Thêm<span aria-hidden="true" className="arrow_triangle-down"></span></div>

                    <div className="more-tab">
                        {renderMoreListTab()}
                    </div>
                </MoreItem>
            )}
        </WidgetContent>
    );
}

export default TabFull;