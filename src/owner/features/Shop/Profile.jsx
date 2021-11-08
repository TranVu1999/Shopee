import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import Analysis from './Analysis';
import Information from './Information';

// Module
import Validate from './../../../utils/validate';

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

    handleUpdateProfile: PropTypes.func.isRequired,
};

// return true is invalid and otherwise
const checkInputText = value =>{
    let standardizeString = value.replace(/\s+/g,' ').trim(); 
    
    return standardizeString.length < value.length;
}

function Profile({shop, handleUpdateProfile}) {
    // data
    const [shopInfo, setShopInfo] = useState({...shop});

    // effect
    useEffect(() =>{
        setShopInfo({...shop});
    }, [shop])

    const {
        avatar, username, createdDate,
        backgroundImage, brand, description, 
        images, analysis
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
        let fileReader = new FileReader();

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
                        
                        fileReader.onload = event =>{
                            const url = event.target.result;
                            const imageItem = {
                                url,
                                localImage: value
                            }

                            if(indexImage === -1){
                                tempImages.push(imageItem);
                            }else{
                                tempImages[indexImage] = imageItem;
                            }

                            setShopInfo({
                                ...shopInfo,
                                images: tempImages
                            })
                        };

                        fileReader.readAsDataURL(value);
                        break;
                }
                
                break;

            case "avatar":
            case "backgroundImage":
                fileReader.onload = event =>{
                    const url = event.target.result;
                    setShopInfo({
                        ...shopInfo,
                        [name]: {
                            url,
                            localImage: value
                        }
                    })
                };
                fileReader.readAsDataURL(value);
                break;
            default:
                break;
        }
    }

    const handleSave = () =>{
        let {brand, description} = shopInfo;

        let flag = true;

        if(!brand.value){
            flag = false;
            brand = {
                ...brand,
                error: "Vui lòng nhập tên nhãn hiệu của bạn!"
            }
        }else if(
            brand.value.replace(/\s+/g,' ').trim().length < brand.value.length
        ){
            flag = false;
            brand = {
                ...brand,
                error: "Tên thương hiệu của bạn không hợp lệ. Vui lòng nhập lại!"
            }
        }

        if(checkInputText(description.value)){
            flag = false;
            description = {
                ...description,
                error: "Mô tả của bạn không hợp lệ. Vui lòng nhập lại."
            }
        }

        if(flag){
            if(handleUpdateProfile){
                handleUpdateProfile({...shopInfo})
            }
        }else{
            setShopInfo({
                ...shopInfo,
                brand: {...brand},
                description: {...description}
            });
        }
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