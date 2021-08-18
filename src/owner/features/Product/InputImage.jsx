import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const WidgetContent = styled.div`
    width: 5rem;
    font-size: .875rem;
`;

const WidgetThumbnail = styled.div`
    position: relative;
    height: 5rem;
    margin-bottom: .25rem;
    
    border-radius: 4px;
    border: 1px ${props=>props.hasImage ? "solid #d5d5d5" : "dashed #1791f2"};
    cursor: pointer;

    .width-button-edit{
        display: none;
    }

    &:hover{
        .width-button-edit{
            display: flex;
        }
    }
`;

const WidgetAddImageButton = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    border-radius: 4px;

    button{
        display: block;
        width: 100%;
        height: 100%;
        font-size: 1.5rem;
        color: #1791f2;
    }
`;

const WidgetImage = styled(WidgetAddImageButton)`
    background-image: url(${props=>props.image});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`;

const WidgetButtonUpdate = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    padding: .375rem 0;

    width: 100%;
    background-color: rgba(0,0,0,.5);

    button{
        display: flex;
        align-items: center;
        justify-content: center;

        width: 50%;
        color: #fff;        

        &:first-child{
            border-right: 1px solid #fff;
        }
    }
`;

const WidgetText = styled.div`
    text-align: center;
`;

InputImage.propTypes = {
    label: PropTypes.string.isRequired,
    required: PropTypes.bool,
};

InputImage.defaultProps = {
    label: "Ảnh bìa",
    required: false,
}

function InputImage({label, required}) {
    // Data
    const inputFile = React.useRef();
    const [image, setImage] = React.useState("");


    // handle event
    const handleOpenInputFile = () =>{
        if(inputFile.current){
            inputFile.current.click();
        }
    }

    const handleGetImage = event =>{
        const files = Array.from(event.target.files);
        setImage(URL.createObjectURL(files[0]));
    }

    return (
        <WidgetContent>
            <input 
                type="file" 
                ref={inputFile} 
                style={{display: "none"}}
                onChange = {handleGetImage}
            />
            <WidgetThumbnail hasImage = {image !== ""}>

                {image && <WidgetImage image = {image}/>}

                {image && <WidgetButtonUpdate className="align-items-center justify-content-center width-button-edit">
                    <button><span aria-hidden="true" className="icon_pencil-edit"></span></button>
                    <button><span aria-hidden="true" className="icon_trash_alt"></span></button>
                </WidgetButtonUpdate>}                
                
                {!image && <WidgetAddImageButton>
                    <button
                        onClick = {handleOpenInputFile}
                    ><span aria-hidden="true" className="icon_plus_alt2"></span></button>
                </WidgetAddImageButton>}
                

            </WidgetThumbnail>

            <WidgetText>
                <span> {required && "*"}{label}</span>
            </WidgetText>
        </WidgetContent>
    );
}

export default InputImage;