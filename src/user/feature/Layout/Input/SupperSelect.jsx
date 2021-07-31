import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

// Theme
import {Color, BorderColor} from './../../../theme';

// Hooks
import useOutsideElement from './../../../hooks/outsideElement';

const WidgetContent = styled.div`
    position: relative;
    padding: .5rem 1rem;
    font-size: 16px;
    border: 1px solid ${BorderColor.mainColor};
    border-radius: 4px;
`;

const WidgetResult = styled.div`
    position: relative;
    cursor: pointer;
    font-size: .875em;

    span{
        position: absolute;
        top: 50%;
        right: 0px;
        transform: translate(0, -50%);
    }
`;

const Label = styled.label`
    position: relative;
    margin-bottom: 0;
    background-color: #fff;
    cursor: pointer;
    transition: all .3s linear;
    
    &.move{
        position: absolute;
        top: -1rem;
        transform: translate(0, -20%); 

        font-size: .875rem;
    }
`;

const Result = styled.p`
    margin: 0;
`;

const ToggleSelect = styled.div`
    position: absolute;
    left: 0px;
    top: calc(100% + 8px);
    width: 100%;

    font-size: .875em;

    color: rgba(0,0,0,.8);
    background-color: #fff;

    border-radius: 4px;
    border: 1px solid ${BorderColor.mainColor};
    box-shadow: 0 0 4px rgba(0,0,0,.14);
    z-index: 10;
`;

const Tabs = styled.div`
    display: flex;
    border-bottom: 1px solid ${BorderColor.mainColor};

    div{
        position: relative;
        padding: .75rem 0;
        text-align: center;
        flex: 1;
        cursor: pointer;

        &.active{
            color: ${Color.mainColor};

            &:after{
                content: '';
                position: absolute;
                left: 0;
                bottom: 0;
                
                width: 100%;
                height: 2px;
                background-color: ${Color.mainColor};
            }
        }
    }
`;

const WidgetOption = styled.div`
    max-height: 15rem;
    overflow-y: scroll; 

    /* width */
    &::-webkit-scrollbar {
        width: .5rem;
    }

    /* Track */
    &::-webkit-scrollbar-track {
        background: #f1f1f1; 
    }
    
    /* Handle */
    &::-webkit-scrollbar-thumb {
        border-radius: 25px;
        background: #888; 
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
    background: #555; 
    }
`;

const Option = styled.div`
    height: 2.5rem;
    padding: .75rem;

    cursor: pointer;
    line-height: 1rem;

    &:hover{
        background-color: #f5f5f5;
    }
`;

SupperSelect.propTypes = {
    
};


function SupperSelect(props) {

    // State
    const [address, setAddress] = React.useState({   
        indexTab: 0,     
        province: "",
        district: "",
        ward: "" 
    });

    // Custom Hooks
    const {visible, setVisible, ref} = useOutsideElement(false);

    // Functions
    const OpenOptionBox = () =>{
        setVisible(true);
    }

    const onchange = span =>{
        if(address.indexTab === 0){
            setAddress({...address, province: span, indexTab: 1})
        };

        if(address.indexTab === 1){
            setAddress({...address, district: span, indexTab: 2})
        };

        if(address.indexTab === 2){
            setAddress({...address, ward: span})
        };
    }

    const onHandleChoseTab = indexTab =>{
        if(
            (indexTab === 0) || 
            (indexTab === 1 && address.province) ||
            (indexTab === 2 && address.district)) 
            setAddress({...address, indexTab});

    }

    // Render
    const renderSelected = () =>{
        const {province, district, ward} = address;
        let span = "";
        
        span += province;
        span += district ? `, ${district}` : "";
        span += ward ? `, ${ward}` : "";

        return span;
    }

    return (
        <WidgetContent>
            <WidgetResult
                onClick = {OpenOptionBox}
            >
                <Label className = {address.province ? "move" : ""}> Tỉnh/ Thành phố, Quận/Huyện, Phường/Xã</Label>

                {address.province ? <Result>{renderSelected()}</Result> : ""}
                
               
                
                <span className="arrow_triangle-down"></span>
            </WidgetResult>

            {visible ? (
                <ToggleSelect ref = {ref}>
                    <Tabs>
                        <div 
                            className = {address.indexTab === 0 ? "active" : ""}
                            onClick = {() => onHandleChoseTab(0)}
                        >Tỉnh/Thành phố</div>

                        <div 
                            className = {address.indexTab === 1 ? "active" : ""}
                            onClick = {() => onHandleChoseTab(1)}
                        >Quận/Huyện</div>

                        <div 
                            className = {address.indexTab === 2 ? "active" : ""}
                            onClick = {() => onHandleChoseTab(2)}
                        >Phường/ Xã</div>
                    </Tabs>

                    <WidgetOption>
                        <Option onClick = {() => {onchange("An Giang")}}>An Giang</Option>
                        <Option>An Giang</Option>
                        <Option>An Giang</Option>
                        <Option>An Giang</Option>
                        <Option>An Giang</Option>
                        <Option>An Giang</Option>
                        <Option>An Giang</Option>
                    </WidgetOption>
                </ToggleSelect>
            ) : ""}
        </WidgetContent>
    );
}

export default SupperSelect;