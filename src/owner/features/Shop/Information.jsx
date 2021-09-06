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
    // data
    const [shopInfo, setShopInfo] = useState({
        
        images: [
            "https://thumbs.dreamstime.com/b/autumn-landscape-fall-scene-trees-leaves-sunlight-rays-foggy-forest-151793239.jpg",
            "https://firebasestorage.googleapis.com/v0/b/shopee-5da7d.appspot.com/o/images%2Fpic3.jpeg?alt=media&token=83517c22-14bc-487e-b83c-8021b5a63745"
        ]
    });

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
        console.log({data})
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
        return images.map((url, index) =>{
            const verify = {
                indexImage: index,
                name: "images"
            }

            return (
                <WidgetDescriptionImage 
                    key = {index}
                    image = {url}
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
                    placeholder="Nhập mô tả hoặc thông tin về Shop của bạn tại đây"
                    verify = {{name: "description"}}
                    handleChange = {onHandleChange}
                />
            </WidgetInputGroup>
        </WidgetContent>
    );
}

export default Information;