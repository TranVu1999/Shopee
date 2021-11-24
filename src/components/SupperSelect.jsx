import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'


// Theme
import {Color, BorderColor} from './../theme/index';

// Hooks
import useOutsideElement from './../hooks/outsideElement';

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
    province: PropTypes.string.isRequired,
    district: PropTypes.string.isRequired,
    ward: PropTypes.string.isRequired,
    onHanldeChoseAdministrativeUnit: PropTypes.func.isRequired,
    listOption: PropTypes.array.isRequired,
    onHanldeSubmit: PropTypes.func.isRequired,
};


function SupperSelect({
    province,
    district,
    ward,
    listOption, 
    onHanldeChoseAdministrativeUnit,
    onHanldeSubmit
}) {
    const [listProvince, setListProvince] = useState([]);
    const [listDistrict, setListDistrict] = useState([]);
    const [listWard, setListWard] = useState([]);

    // State
    const [address, setAddress] = useState({   
        indexTab: 0,     
        province,
        district,
        ward 
    });

    // effect
    useEffect(() => {
        switch(address.indexTab) {
            case 0:
                setListProvince(listOption);
                break;
            case 1:
                setListDistrict(listOption);
                break;
            case 2:
                setListWard(listOption);
                break;
            default:
                break;
        }
    }, [listOption])

    useEffect(() => {
        const {province, district, ward} = address;
        if(onHanldeSubmit && province && district && ward) {
            onHanldeSubmit({
                province,
                district,
                ward
            })
        }
    }, [address])

    // Custom Hooks
    const {visible, setVisible, ref} = useOutsideElement(false);

    // Functions
    const OpenOptionBox = () =>{
        setVisible(true);
    }

    const onchange = span =>{
        if(!onHanldeChoseAdministrativeUnit) return;
        if(address.indexTab === 0){
            onHanldeChoseAdministrativeUnit({type: "province", code: span.code});
            setAddress({
                ...address, 
                province: span.name, 
                district: "",
                ward: "",
                indexTab: 1
            })
        };

        if(address.indexTab === 1){
            onHanldeChoseAdministrativeUnit({type: "district", code: span.code});
            setAddress({
                ...address, 
                district: span.name, 
                ward: "",
                indexTab: 2
            })
        };

        if(address.indexTab === 2){
            setAddress({...address, ward: span.name})
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

    const renderListOption = () => {
        if(listOption) {
            let tempListOption = [];
            const {indexTab} = address;
            if(indexTab === 0) {
                tempListOption = listProvince;
            } else if(indexTab === 1) {
                tempListOption = listDistrict;
            } else if(indexTab === 2) {
                tempListOption = listWard;
            }

            return tempListOption.map(opt => {
                return <Option 
                    key = {opt._id}
                    onClick = {() => {onchange(opt)}}
                >{opt.name}</Option>
            });
        }
        
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

                    <WidgetOption>{renderListOption()}</WidgetOption>
                </ToggleSelect>
            ) : ""}
        </WidgetContent>
    );
}

export default SupperSelect;