import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListLetter = styled.div`
    border-top: 2px solid #555;
    border-bottom: 2px solid #555;
    padding-bottom: 20px;
`;

const WidgetAmountStore = styled.div`
    padding: 8px 8px;
`;

const Letter = styled.div`
    font-size: 24px;
`;


WidgetAlphabet.propTypes = {
    numStore: PropTypes.number,
};

WidgetAlphabet.defaultProps = {
    numStore: 0
}

function WidgetAlphabet(props) {
    const {numStore} = props;

    // Render
    const renderListLetter = () =>{
        const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "#"]

        return letters.map(item =>{
            return (
                <Letter key = {item}>{item}</Letter>
            );
        });
    }

    return (
        <ListLetter>
            <WidgetAmountStore>Hien thi {numStore} cua hang</WidgetAmountStore>

            <div className = "d-flex justify-content-between">
                {renderListLetter()}
            </div>
        </ListLetter>
    );
}

export default WidgetAlphabet;