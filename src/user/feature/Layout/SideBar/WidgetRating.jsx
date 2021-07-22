import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CheckBox from '../../../common/component/CheckBox';

const Star = styled.span`
    color: #ffce3d;
    margin-right: 6px;
`;


WidgetRating.propTypes = {
    
};

function WidgetRating(props) {


    const renderStars = () =>{
        let elm = [];

        for(let i = 5; i > 0; i--){
            let listStart = []

            for(let j = i; j > 0; j--){
                listStart.push(<Star className = "icon_star"/>);
            }

            for(let k = 5 - i; k > 0; k--){
                listStart.push(<Star className = "icon_star_alt"/>);
            }

            elm.push(
                <div className = "d-flex align-items-center mb-2">
                    <CheckBox/>
                    {listStart}
                </div>
            );

        }

        return elm;
    }

    return (
        <div>
            {renderStars()}
        </div>
    );
}

export default WidgetRating;