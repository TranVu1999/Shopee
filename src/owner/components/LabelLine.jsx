import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const WidgetContent = styled.div`
    font-size: .875rem;

    span.number{
        color: red;
    }
`;

const Title = styled.p`
    margin: 0;
    font-size: 1rem;
    color: #333;
`;

const WidgetListLine = styled.div``;

const WidgetLabelLine = styled.p`
    position: relative;
    margin-right: 2rem;
    margin-bottom: 0;

    &:after{
        content: '';
        position: absolute;
        top: 50%;
        left: -.875rem;
        transform: translateY(-50%);

        height: .5rem;
        width: .5rem;
        border-radius: 50%;
        background-color: ${props=>props.background};
    }
`

LabelLine.propTypes = {
    listLine: PropTypes.array.isRequired,
};

function LabelLine({listLine}) {

    // render
    const renderListLine = () =>{
        let elm = [];

        for(let lineItem of listLine){
            if(lineItem.isActive){
                let line = (
                    <WidgetLabelLine key={lineItem.index} background = {lineItem.color}>{lineItem.type}</WidgetLabelLine>
                );
                elm.push(line);
            }
        }

        return elm;
    }

    const listLineLabel = renderListLine();

    return (
        <WidgetContent className="d-flex align-items-center justify-content-between">
            <Title>Biểu đồ</Title>

            <WidgetListLine className="d-flex justify-content-between">
                <div className="d-flex justify-content-between">
                    {listLineLabel}
                </div>
                <span>Đã chọn: <span className="number">{listLineLabel.length}</span> /4</span>
            </WidgetListLine>
        </WidgetContent>
    );
}

export default LabelLine;