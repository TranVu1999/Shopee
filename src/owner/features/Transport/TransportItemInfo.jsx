import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Theme
import {BorderColor} from './../../theme';
import SwitchBox from '../../components/SwitchBox';

const WidgetContent = styled.div`
    padding: .875rem 1.5rem;
    margin-bottom: 1rem;
    
    font-size: .875rem;
    border: 1px solid ${BorderColor.mainColor};
    border-radius: 4px;

    button{
        margin-left: 2rem;
        font-size: 1.5rem;
    }
`;

const Detail = styled.div`
    margin-top: 1rem;
    border-top: 1px solid ${BorderColor.mainColor};
`;

const Text = styled.div`
    padding: 1.125rem 1.5rem 1.125rem 0;
    border-right: 1px solid ${BorderColor.mainColor};

    label{
        margin-right: .5rem;
        color: #333;
    }
`;

const Control = styled.div`
    padding: 1.125rem 0 0 1.5rem;
`;

TransportItemInfo.propTypes = {
    content: PropTypes.object.isRequired,
};

function TransportItemInfo({content}) {
    // Data
    const [isShowDetail, setIsShowDetail] = React.useState(false);
    const [isActiveTransport, setIsActiveTransport] = React.useState(false);

    // Render
    const renderDetail = () =>{
        return content.description.map(item =>{
            return <div key={item.key}>
                <label>{item.key}:</label>
                <span>{item.value}</span>
            </div>
        })
    }

    return (
        <WidgetContent>
            <div className="d-flex align-items-center justify-content-between">
                <span>{content.brand}</span>

                <div className="d-flex align-items-center">

                    {!isShowDetail && <SwitchBox 
                        isActive={isActiveTransport} 
                        handleSwitch={() => {setIsActiveTransport(!isActiveTransport)}}
                    />}

                    <button 
                        onClick = {() => {setIsShowDetail(!isShowDetail)}}
                    ><span aria-hidden="true" className="arrow_carrot-down"></span></button>
                </div>
            </div>
           

            <Detail style={{display: isShowDetail ? "flex" : "none"}}>
                <Text className="flex-fill">
                    {renderDetail()}
                </Text>

                <Control className="flex-fill d-flex justify-content-between">
                    <span>Kích hoạt đơn vị vận chuyển này </span>
                    <SwitchBox 
                        isActive={isActiveTransport} 
                        handleSwitch={() => {setIsActiveTransport(!isActiveTransport)}}
                    />
                </Control>
            </Detail>


        </WidgetContent>
    );
}

export default TransportItemInfo;