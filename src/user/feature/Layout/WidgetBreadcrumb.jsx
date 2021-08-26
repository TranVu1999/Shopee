import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const WidgetContent = styled.div`
    font-size: .8125rem;
    color: #333;
`;

const BreadcrumbBox = styled.li`
    display: inline-flex;
    align-items: center;
    margin-right: 5px;

    text-transform: capitalize;

    a{
        transition: all .3s ease;
        margin-right: 5px;
    }

    span{
        font-size: 1.25rem;
    }

    &:last-child{
        span{
            display: none;
        }
    }
`;

WidgetBreadcrumb.propTypes = {
    items: PropTypes.array,
};

WidgetBreadcrumb.defaultProps = {
    items: []
}

function WidgetBreadcrumb(props) {

    const {items} = props;

    // Render
    const renderItems = () =>{
        return items.map(item =>{
            return (
                <BreadcrumbBox>
                    <Link to={item.url}>{item.title}</Link>
                    <span aria-hidden="true" className="arrow_carrot-right"></span>
                </BreadcrumbBox>
            );
        });
    }

    return (<WidgetContent>{renderItems()}</WidgetContent>);
}

export default WidgetBreadcrumb;