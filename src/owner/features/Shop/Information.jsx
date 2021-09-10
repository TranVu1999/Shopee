import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import InputLimitBox from '../../components/InputLimitBox';
import NotifyPopup from '../../components/NotifyPopup';
import TextareaLimitBox from '../../components/TextareaLimitBox';
import WidgetDescriptionImage from './WidgetDescriptionImage';


const WidgetContent = styled.div`
    font-size: .875rem;

    label{
        font-size: 1rem;
    }
`;

const WidgetInputGroup = styled.div`
    margin-bottom: 1.5rem;
`;


Information.propTypes = {
    brand: PropTypes.object.isRequired,
    description: PropTypes.object.isRequired,
    images: PropTypes.array.isRequired,

    handleChangeInput: PropTypes.func.isRequired,
    handleChangeImage: PropTypes.func.isRequired,
    handleBlurInput: PropTypes.func.isRequired,
};

function Information({
    brand,
    description,
    images,
    handleChangeInput,
    handleChangeImage,
    handleBlurInput
}) {

    // handle event
    const onHandleChange = data =>{
        if(handleChangeInput){
            handleChangeInput({
                name: data.name,
                value: data.value
            })
        }
    }

    const onHandleBlur = data =>{
        if(handleBlurInput){
            handleBlurInput({
                name: data.name
            })
        }        
    }

    const onHandleChangeImage = data =>{
        if(handleChangeImage){
            handleChangeImage(data);
        }
    }

    // render
    const renderListInputImage = () =>{
        return images.map((image, index) =>{
            const verify = {
                indexImage: index,
                name: "images"
            }

            return (
                <WidgetDescriptionImage 
                    key = {index}
                    image = {image.url}
                    verify = {verify}
                    handleChangeImage = {onHandleChangeImage}
                />
            );
        })
    }

    return (
        <WidgetContent>
            <WidgetInputGroup>
                <label>Tên Shop</label>
                <InputLimitBox 
                    limit = {30} 
                    value = {brand.value}
                    error = {brand.error}
                    handleChange = {onHandleChange}
                    handleBlur = {onHandleBlur}
                    verify = {{name: "brand"}}
                />
            </WidgetInputGroup>

            <WidgetInputGroup>
                <label>
                    <span className="mr-2">Mô tả hình ảnh và video</span>
                    <NotifyPopup content="Ảnh và video mà bạn tải lên sẽ được hiển thị trên trang cửa hàng của bạn ở cả phiên bản trên máy tính và ứng dụng. "/>
                </label>

                <div className="d-flex flex-wrap" style={{gap: "15px"}}>
                    {renderListInputImage()}

                    <WidgetDescriptionImage
                        verify = {{
                            indexImage: -1,
                            name: "images"
                        }}
                        handleChangeImage = {handleChangeImage}
                    />
                </div>
            </WidgetInputGroup>

            <WidgetInputGroup>
                <label>Mô tả Shop </label>
                <TextareaLimitBox 
                    limit = {500} 
                    value = {description.value} 
                    error = {description.error}
                    placeholder="Nhập mô tả hoặc thông tin về Shop của bạn tại đây"
                    verify = {{name: "description"}}
                    handleChange = {onHandleChange}
                />
            </WidgetInputGroup>
        </WidgetContent>
    );
}

export default Information;