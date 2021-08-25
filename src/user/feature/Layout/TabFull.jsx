import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const WidgetContent = styled.div`
    font-size: .9375rem;
`;

const Item = styled.div`
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
`;

TabFull.propTypes = {
    listTab: PropTypes.array.isRequired,
    moreTab: PropTypes.array,
};

TabFull.defaultProps = {
    moreTab: []
}

function TabFull({listTab, moreTab}) {

    // render
    const renderListTab = () =>{
        let listTabElm = [];
        
        for(let tab of listTab){
            listTabElm.push(
                <Item>
                    <a href="#/">
                        {tab.title}
                    </a>
                </Item>
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
                </MoreItem>
            )}
        </WidgetContent>
    );
}

export default TabFull;