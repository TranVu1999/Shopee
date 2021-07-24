import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BreadcrumbBox = styled.li`
    display: inline-flex;
    align-items: center;
    margin-right: 5px;

    text-transform: capitalize;

    a{
        transition: all .3s ease;
        margin-right: 5px;

        &:hover{
            color: #c7a17a;
        }
    }

    span{
        font-size: 24px;
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
                    <a href={item.url}>{item.title}</a>
                    <span aria-hidden="true" className="arrow_carrot-right"></span>
                </BreadcrumbBox>
            );
        });
    }

    return (<ul className = "mt-2">{renderItems()}</ul>);
}

export default WidgetBreadcrumb;