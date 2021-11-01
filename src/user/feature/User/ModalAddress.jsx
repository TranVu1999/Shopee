import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// UI
import {TextField} from '@material-ui/core';
import SupperSelect from '../Layout/Input/SupperSelect';


// Images
import Map from './../../assets/image/other/map.png';
import { BorderColor, Color } from '../../theme';

const WidgetWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,.14);
`;


const WidgetModalContent = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    padding: 2.5rem 2rem .75rem;

    width: 500px;
    font-size: 16px;
    background-color: #fff;

    transform: translate(-50%, -50%);
    border-radius: 2px;

    h5{
        font-size: 1.375em;
        text-transform: capitalize;
        color: rgba(0,0,0,.8);
        margin-bottom: 1.5rem;
    }
`;

const WrapInput = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;

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

const Button = styled.div`
    display: inline-block;
    padding: .375rem 1rem;
    font-size: .875rem;
    text-transform: uppercase;
    cursor: pointer;
`;

const CommitButton = styled(Button)`
    background-color: #ee4d2d;
    color: #fff;
`;

ModalAddress.propTypes = {
    onHandleClose: PropTypes.func.isRequired,
};

function ModalAddress({onHandleClose}) {
    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'initial';
        }
    }, [])

    // handle event
    const handleClose = () => {
        if(!onHandleClose) return;
        onHandleClose();
    }

    return (
        <WidgetWrapper>
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
                    <Button onClick = {handleClose}>Trở Lại</Button>
                    <CommitButton>Hoàn thành</CommitButton>
                    
                </WrapInput>

                
            </WidgetModalContent>
        </WidgetWrapper>
    );
}

export default ModalAddress;