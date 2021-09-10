import React, {useState, useRef} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Theme
import {BorderColor} from './../../theme';

// icons
const iconClose = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fillRule="evenodd" d="M8,1 C11.8659932,1 15,4.13400675 15,8 C15,11.8659932 11.8659932,15 8,15 C4.13400675,15 1,11.8659932 1,8 C1,4.13400675 4.13400675,1 8,1 Z M8.00070711,7.29218611 L5.87867966,5.17157288 C5.68341751,4.97631073 5.36683502,4.97631073 5.17157288,5.17157288 C4.99800652,5.34513923 4.97872137,5.61456363 5.11371742,5.80943177 L5.17157288,5.87867966 L7.29289322,8 L5.17157288,10.1213203 C4.97631073,10.3165825 4.97631073,10.633165 5.17157288,10.8284271 C5.34513923,11.0019935 5.61456363,11.0212786 5.80943177,10.8862826 L5.87867966,10.8284271 L8,8.70710678 L10.1213203,10.8284271 C10.3165825,11.0236893 10.633165,11.0236893 10.8284271,10.8284271 C11.0019935,10.6548608 11.0212786,10.3854364 10.8862826,10.1905682 L10.8284271,10.1213203 L8.70710678,8 L10.8284271,5.87867966 C11.0236893,5.68341751 11.0236893,5.36683502 10.8284271,5.17157288 C10.6548608,4.99800652 10.3854364,4.97872137 10.1905682,5.11371742 L10.1213203,5.17157288 L8.00070711,7.29218611 L5.87867966,5.17157288 L8.00070711,7.29218611 Z"></path></svg>

const WidgetContent = styled.div`
    position: relative;
    padding: .5rem;
    width: 198px;
    height: 168px;

    background-color: #EEEEEE;

    border: 1px dashed #d8d8d8;
    border-radius: 4px;
    cursor: pointer;

    input{
        display: none
    }

    div.button-remove{
        position: absolute;
        top: -15px;
        right: -10px;
        display: none;

        svg{
            height: 1rem;
            width: 1rem;
            fill: #b7b7b7;
        }
    }

    &:hover{
        border: 1px solid #d8d8d8;

        div.button-remove{
            display: block;
        }
    }
`;

const Label = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 100%;

    font-size: 12px;
    text-align: center;

    font-weight: 500;
    color: #b7b7b7;

    span{
        font-size: 2rem;
    }
`;

const WidgetButtonAdd = styled(Label)`
    padding: 0 1rem;

    button{
        width: 10rem;
        padding: .125rem 0;

        font-size: .75rem;

        color: #333;
        background-color: transparent;

        border: 1px solid ${BorderColor.mainColor};
        border-radius: 4px;

        &:first-child{
            margin-bottom: .5rem;
        }

        &:hover{
            border-color: #ee4d2d;
            color: #ee4d2d;
        }
    }

`;

const Thumbnail = styled.div`
    position: absolute;
    top: .5rem;
    left: 50%;
    transform: translateX(-50%);

    height: 80%;
    width: calc(100% - 1rem);
    background-image: url(${props=>props.image});

    background-size: cover;
    background-position: center;
    border-radius: 4px;

    button{
        position: absolute;
        bottom: 0;
        left: 0;

        width: 100%;
        padding: .5rem 0;

        font-size: .75rem;

        color: #fff;
        background-color: rgba(0,0,0,.5);
    }
`;

const WidgetButtonMove = styled.div`
    position: absolute;
    bottom: 0;
    width: calc(100% - 1rem);

    button{
        color: #999;
    }
    
`;



WidgetDescriptionImage.propTypes = {
    image: PropTypes.string,
    handleChangeImage: PropTypes.func.isRequired,
    verify: PropTypes.object.isRequired,
};

WidgetDescriptionImage.defaultProps = {
    image: ""
}

function WidgetDescriptionImage({
    image,
    handleChangeImage,
    verify
}) {

    // Data
    const [isHover, setIsHover] = useState(false);
    const imageRef = useRef(null);

    // handle event
    const handleMouseOver = () =>{
        setIsHover(true);
    }
    const handleMouseLeave = () =>{
        setIsHover(false);
    }

    const openInputImageBox = (type) =>{
        if(imageRef.current){
            imageRef.current.click();
        }
    }

    const handleUploadImage = event =>{
        if(handleChangeImage){
            const data = {
                ...verify,
                value: event.target.files[0]
            }

            handleChangeImage(data);
        }
    }

    const handleMoveImage = type =>{
        if(handleChangeImage){
            const data = {
                ...verify,
                type: "move",
                value: type // direction: 1 is move-right, -1 is move-left
            }

            handleChangeImage(data);
        }
    }

    const handleRemove = () =>{
        if(handleChangeImage){
            const data = {
                ...verify,
                type: "remove",
            }

            handleChangeImage(data);
        }
    }

    return (
        <WidgetContent
            onMouseOver = {handleMouseOver}
            onMouseLeave = {handleMouseLeave}
        >
            <input 
                type = "file" 
                ref = {imageRef}
                onChange = {handleUploadImage}
            />

            {image && <div 
                className = "button-remove"
                onClick = {handleRemove}
            >
                {iconClose}
            </div>}

            {image && <Thumbnail image = {image}>
                <button onClick = {() => openInputImageBox("update")}>Thay đổi hình ảnh</button>
            </Thumbnail>}
            

            {(!isHover && !image) && <Label>
                <span aria-hidden="true" className="icon_plus"></span>
                <p>Thêm Hình ảnh & Video (0/5)</p>
            </Label>}

            {(isHover && !image) && <WidgetButtonAdd>
                <button
                    onClick = {() => openInputImageBox("add-new")}
                >Tải hình ảnh</button>
                <button>Thêm URL Video YouTube</button>
            </WidgetButtonAdd>}

            {image && <WidgetButtonMove className="d-flex justify-content-around">
                <button
                    onClick = {() =>handleMoveImage(-1)}
                ><span className="icon icon-arrow-left"></span></button> 
                <button
                    onClick = {() =>handleMoveImage(1)}
                ><span className="icon icon-arrow-right"></span></button> 
            </WidgetButtonMove>}
            
            
        </WidgetContent>
    );
}

export default WidgetDescriptionImage;