import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import Analysis from './Analysis';
import Information from './Information';

// Module
import {uploadImage} from './../../../utils/firebase';

const WidgetContent = styled.div`
    padding: 1.124rem 1.5rem;
    gap: 1.5rem;
`;

const WidgetLeft = styled.div``;

const WidgetRight = styled.div`
    &>button{
        padding: .25rem 1.5rem;
        line-height: 1.5rem;

        color: #fff;
        background-color: #ee4d2d;
        border-color: #ee4d2d;
        border-radius: 4px;
    }
`;

Profile.propTypes = {
    shop: PropTypes.object.isRequired,
};

function Profile({shop}) {
    // data
    const [shopInfo, setShopInfo] = useState({...shop});

    // effect
    useEffect(() =>{
        setShopInfo({...shop});
        
    }, [shop])

    const {
        avatar,
        username,
        createdDate,
        backgroundImage,

        brand, 
        description, 
        images,
        analysis
    } = shopInfo;

    

    

    // handle event
    const handleChangeInput = data =>{
        const {name, value} = data;
        setShopInfo({
            ...shopInfo,
            [name]: {
                value,
                error: ""
            }
        })
    }

    const handleBlurInput = data =>{
        const {name} = data;
        
        let error = "";
        let lengthString = 0;

        switch(name){
            case "brand":
                lengthString = brand.value.length;
                if(!lengthString){
                    error = "Không được để trống ô này."
                }else if(lengthString < 5 || lengthString > 30){
                    error = "Tên Shop mới phải có từ 5-30 ký tự."
                }
                break;
            default:
                break;
        }

        if(error){
            
            let tempShopInfo = {
                ...shopInfo,
                [name]: {
                    value: shopInfo[name].value,
                    error
                }
            };

            setShopInfo(tempShopInfo);
        }

    }

    const handleChangeImage = data =>{
        const {name, value, indexImage} = data;

        let tempImages = [...images];

        switch(name){
            case "images":
                const {type} = data;

                switch(type){

                    case "move":
                        const lengthImage = images.length;
                        if(value === -1 && indexImage === 0) return;
                        if(value === 1 && indexImage === lengthImage - 1) return;

                        const tempImage = tempImages[indexImage];
                        if(value === 1){
                            tempImages[indexImage] = tempImages[indexImage + 1];
                            tempImages[indexImage + 1] = tempImage 
                        }else if(value === -1){
                            tempImages[indexImage] = tempImages[indexImage - 1];
                            tempImages[indexImage - 1] = tempImage 
                        }
                        
                        setShopInfo({
                            ...shopInfo,
                            images: tempImages
                        })
                        break;
                    case "remove":
                        tempImages.splice(indexImage, 1);
                        setShopInfo({
                            ...shopInfo,
                            images: tempImages
                        })
                        break;    
                    default:
                        uploadImage(value, (urlImage) =>{
                            if(indexImage === -1){
                                tempImages.push(urlImage);
                            }else{
                                tempImages[indexImage] = urlImage
                            }
                            setShopInfo({
                                ...shopInfo,
                                images: tempImages
                            })
                            
                        })
                        break;
                }
                
                break;

            case "avatar":
            case "backgroundImage":
                uploadImage(value, (urlImage) =>{
                    setShopInfo({
                        ...shopInfo,
                        [name]: urlImage
                    })
                })
                break;
            default:
                break;
        }
    }

    const handleSave = () =>{

    }

    return (
        <WidgetContent className="d-flex">
            <WidgetLeft>
                <Analysis 
                    analysis = {analysis}
                    avatar = {avatar}
                    username = {username}
                    createdDate = {createdDate}
                    backgroundImage = {backgroundImage}

                    handleChangeImage = {handleChangeImage}
                />
            </WidgetLeft>

            <WidgetRight className="flex-fill">
                <Information
                    brand = {brand}
                    description = {description}
                    images = {images}

                    handleChangeInput = {handleChangeInput}
                    handleBlurInput = {handleBlurInput}
                    handleChangeImage = {handleChangeImage}
                />
                <button
                    onClick = {handleSave}
                >Lưu</button>
            </WidgetRight>
        </WidgetContent>
    );
}

export default Profile;