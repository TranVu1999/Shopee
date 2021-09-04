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

    &>button{
        padding: .25rem 1.5rem;
        line-height: 1.5rem;

        color: #fff;
        background-color: #ee4d2d;
        border-color: #ee4d2d;
        border-radius: 4px;
    }
`;

const WidgetInputGroup = styled.div`
    margin-bottom: 1.5rem;
`;


Information.propTypes = {
    
};

function Information(props) {
    // data
    const [shopInfo, setShopInfo] = useState({
        brand: {value: "", error: ""}
    });

    const {brand} = shopInfo;

    // handle event
    const handleChange = data =>{
        const {name, value} = data;

        let tempShopInfo = {
            ...shopInfo,
            [name]: {
                value,
                error: ""
            }
        }
        setShopInfo(tempShopInfo);
    }

    const handleBlur = data =>{
        const {name} = data;
        console.log({name})
        
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



    return (
        <WidgetContent>
            <WidgetInputGroup>
                <label>Tên Shop</label>
                <InputLimitBox 
                    limit = {30} 
                    value = {brand.value}
                    error = {brand.error}
                    handleChange = {handleChange}
                    handleBlur = {handleBlur}
                    verify = {{name: "brand"}}
                />
            </WidgetInputGroup>

            <WidgetInputGroup>
                <label>
                    <span className="mr-2">Mô tả hình ảnh và video</span>
                    <NotifyPopup content="Ảnh và video mà bạn tải lên sẽ được hiển thị trên trang cửa hàng của bạn ở cả phiên bản trên máy tính và ứng dụng. "/>
                </label>

                <div className="d-flex flex-wrap" style={{gap: "15px"}}>
                    <WidgetDescriptionImage image="https://thumbs.dreamstime.com/b/autumn-landscape-fall-scene-trees-leaves-sunlight-rays-foggy-forest-151793239.jpg"/>
                    <WidgetDescriptionImage image="https://thumbs.dreamstime.com/b/autumn-landscape-fall-scene-trees-leaves-sunlight-rays-foggy-forest-151793239.jpg"/>
                    <WidgetDescriptionImage image="https://thumbs.dreamstime.com/b/autumn-landscape-fall-scene-trees-leaves-sunlight-rays-foggy-forest-151793239.jpg"/>

                    <WidgetDescriptionImage/>
                </div>
            </WidgetInputGroup>

            <WidgetInputGroup>
                <label>Mô tả Shop </label>
                <TextareaLimitBox 
                    limit={500} 
                    value="" 
                    placeholder="Nhập mô tả hoặc thông tin về Shop của bạn tại đây"
                />
            </WidgetInputGroup>

            <button>Lưu</button>
        </WidgetContent>
    );
}

export default Information;