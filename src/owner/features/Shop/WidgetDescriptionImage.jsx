import React, {useState, useRef} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Theme
import {BorderColor} from './../../theme';

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
        display: none;
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

    const openInputImageBox = () =>{
        if(imageRef.current){
            imageRef.current.click();
        }
    }

    const handleChange = event =>{
        if(handleChangeImage){
            const data = {
                ...verify,
                type: "add-new",
                value: event.target.files[0]
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
                onChange = {handleChange}
            />

            {image && <Thumbnail image = {image}>
                <button>Thay đổi hình ảnh</button>
            </Thumbnail>}
            

            {(!isHover && !image) && <Label>
                <span aria-hidden="true" className="icon_plus"></span>
                <p>Thêm Hình ảnh & Video (0/5)</p>
            </Label>}

            {(isHover && !image) && <WidgetButtonAdd>
                <button
                    onClick = {openInputImageBox}
                >Tải hình ảnh</button>
                <button>Thêm URL Video YouTube</button>
            </WidgetButtonAdd>}

            {image && <WidgetButtonMove className="d-flex justify-content-around">
                <button><span class="icon icon-arrow-left"></span></button> 
                <button><span class="icon icon-arrow-right"></span></button> 
            </WidgetButtonMove>}
            
            
        </WidgetContent>
    );
}

export default WidgetDescriptionImage;