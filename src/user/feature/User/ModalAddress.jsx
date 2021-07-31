import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// UI
import {TextField} from '@material-ui/core';
import SupperSelect from '../Layout/Input/SupperSelect';


// Images
import Map from './../../assets/image/other/map.png';
import { BorderColor, Color } from '../../theme';


const WidgetModalContent = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    padding: 1.5rem 1.5rem .75rem;

    width: 550px;
    font-size: 16px;
    background-color: #fff;

    transform: translate(-50%, -50%);
    border-radius: 2px;

    h5{
        font-size: 1.375em;
        text-transform: capitalize;
        color: rgba(0,0,0,.8);
    }
`;

const WrapInput = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;

    .MuiInputLabel-outlined{
        transform: translate(14px, calc(50% + 6px)) scale(1);
    }

    .MuiOutlinedInput-input{
        padding: 0.75rem 1rem;
    }

    .MuiFormControl-root{
        flex: 1;
    }
`;

const Banner = styled.div`
    margin-bottom: 1rem;
    img{
        width: 100%;
    }
`;

const ControlCheckbox = styled.div`
    height: 1.125rem;
    width: 1.125rem;
    padding: 0.125rem;
    
    border: 0.125px solid ${BorderColor.mainColor};
    border-radius: 4px;
    cursor: pointer;

    &:after{
        content: '';

        display: block;
        height: 0.75rem;
        width: 0.75rem;

        background-color: transparent;
        border-radius: 4px;
    }

    &.active{
        border-color: ${BorderColor.primaryColor};

        &:after{
            background-color: ${Color.mainColor};
        }
    }
`;

const Button = styled.button`
    display: inline-block;
    padding: .25rem 1rem;
    font-size: .875rem;
    text-transform: uppercase;
`;

const CommitButton = styled(Button)`
    background-color: ${Color.mainColor};
    color: #fff;
`;

ModalAddress.propTypes = {
    
};

function ModalAddress(props) {

    return (
        <WidgetModalContent>
            <h5>Địa chỉ mới</h5>

            <WrapInput>
                <TextField label = "Họ và tên" variant = "outlined"/>
                <TextField label = "Số điện thoại" variant = "outlined"/>
            </WrapInput>

            <WrapInput>
                <div className = "flex-fill"><SupperSelect/></div>
                
            </WrapInput>
            <WrapInput>
                <TextField label = "Địa chỉ cụ thể" variant = "outlined"/>
            </WrapInput>

            <Banner>
                <img src={Map} alt="map" />
            </Banner>

            <WrapInput>
                <ControlCheckbox className = "active"/>
                Đặt làm địa chỉ mặc đinh
            </WrapInput>

            <WrapInput className = "justify-content-end">
                <Button>Trở Lại</Button>
                <CommitButton>Hoàn thành</CommitButton>
                
            </WrapInput>

            
        </WidgetModalContent>
    );
}

export default ModalAddress;