import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {useForm} from 'react-hook-form';
import * as Yup from 'yup';
import {yupResolver } from '@hookform/resolvers/yup';
import {useHistory} from 'react-router-dom';

// Components
import InputImage from './InputImage';
import SelectMegaBox from './SelectMegaBox';
import InputLimitBox from './../../components/InputLimitBox2';
import InputBox from './../../components/InputBox2';
import TextareaLimitBox from './../../components/TextareaLimitBox2';
import InputPriceNumber from './InputPriceNumber2';
import InputInventoryNumber from './InputInventoryNumber2';
import WidgetClassifyInput from './WidgetClassifyInput';
import WidgetGroupPrice from './WidgetGroupPrice';

const WidgetContent = styled.form`
    background-color: #F6F6F6; 

    &>div{
        box-shadow: 0 .2rem .4rem rgba(0,0,0,.09);
        padding: 2rem 2.5rem;
        margin-bottom: 1.5rem;
        background-color: #fff;
    }
`;

const GroupInput = styled.div`

`;

const OptionalFields = styled.div``;

const WidgetCategory = styled.div`
    .arrow_carrot-right{
        margin: 0 .5rem;
        font-size: 1.125rem;
    }

    button{
        margin-left: .5rem;
        font-size: 1.125rem;
        color: #b7b7b7;
    }

    p{
        margin: .25rem 0 0;
        color: #b7b7b7;

        a{
            color: #2673dd;
        }
    }
`;

const WidgetButtons = styled.div`
    position: sticky;
    bottom: 0;
    left: 0;

    font-size: .875rem;
    text-align: right;
`;

const DefaultButton = styled.button`
    margin-left: 1rem;
    padding: .25rem 0;
    min-width: 8rem;

    color: #333;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
`;
const SaveButton = styled(DefaultButton)`
    background-color: #ee4d2d;
    border-color: #ee4d2d;
    color: #fff;
`;

WidgetAddInformation.propTypes = {
    
};

function WidgetAddInformation(props) {
    // validate
    const validationSchema = Yup.object().shape({
        productName: Yup.string()
                    .required("Không được để trống tên sản phẩm")
                    .max(120, "Tên sản phẩm không vượt quá 120 ký tự")
                    .min(10, "Tên sản phẩm phải có ít nhất 10 ký tự"),
        productDescription: Yup.string()
                    .required("Không được để trống mô tả sản phẩm")
                    .max(5000, "Mô tả sản phẩm không vượt quá 5000 ký tự")
                    .min(100, "Mô tả sản phẩm phải có ít nhất 100 ký tự"),
        productPrice: Yup.number()
                    .max(1000000000, "Giá sản phẩm không vượt quá 100 triệu đồng")
                    .min(1000, "Giá sản phẩm ít nhất 1 nghìn đồng")
                    .positive("Giá sản phẩm là một số dương"),
        productInventory: Yup.number()
                    .required("Không được để trống trường này")
                    .min(5, "Bạn phải có ít nhất 5 sản phẩm")
                    .positive("Dữ liệ trường này phải là một số dương"),        
    });
    
    // data
    const productCategory = JSON.parse(localStorage.getItem("productCategory"));

    const {handleSubmit, control} = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues:{
            productName: localStorage.getItem("productName") || "",
            productDescription: "",
            productCategory,
            productPrice: 1000,
            productInventory: 5
        }
    });
    const [isShowClassification, setIsShowClassification] = useState(false);
    const [isShowMorePrice, setIsShowMorePrice] = useState(false);
    const [fields, setFields] = useState({
        brand: {
            type: "mega-select-input",
            label: "*Thương hiệu",
            nameInput: "brand",
            moreSelections: false,
            indexSelected: -1,
            database: [
                "AAA JEANS",
                "ABC",
                "ADDA",
                "ADORE DRESS",
                "ADRIENNE VITTADINI",
                "AFTERBEFORE",
                "AFTF BASIC",
                "Alice",
                "Ameo",
                "Anadi Home",
                "Angelavic",
                "Angelic Pretty",
            ],
            isExtended: true
        },

        originPlace: {
            type: "mega-select-input",
            label: "Xuất xứ",
            nameInput: "originPlace",
            moreSelections: false,
            indexSelected: -1,
            database: [
                "Indonesia",
                "Nhật Bản",
                "Hàn Quốc",
                "Đài Loan",
                "Việt Nam",
                "Thái Lan "
            ]
        },
        
        material: {
            type: "mega-select-input",
            label: "Chất liệu",
            nameInput: "material",
            limitSelection: 5,
            moreSelections: true,
            database: [
                "voan",
                "chinos",
                "Cotton",
                "Denim",
                "Lông vũ",
                "Nỉ",
                "Lông cừu",
                "Nỉ mỏng",
                "kaki",
                "Đan",
                "Ren",
                "Da",
            ],
            arrIndexSelected: [],
            isExtended: true,
        },

        coppedTop: {
            type: "mega-select-input",
            label: "Cropped Top",
            nameInput: "coppedTop",
            moreSelections: false,
            indexSelected: -1,
            database: [
                "Không",
                "Có",
            ],
            isExtended: false,
        },

        petite: {
            type: "mega-select-input",
            label: "Petite",
            nameInput: "petite",
            moreSelections: false,
            indexSelected: -1,
            database: [
                "Không",
                "Có",
            ],
        },

        pattern: {
            type: "mega-select-input",
            label: "Mẫu",
            nameInput: "pattern",
            limitSelection: 5,
            moreSelections: true,
            database: [
                "Họa tiết",
                "Sọc caro",
                "Hoa",
                "Trơn",
                "Chấm bi",
                "In",
                "Sọc",
                "Nhuộm",
            ],
            arrIndexSelected: [],
            isExtended: true,
        },

        season: {
            type: "mega-select-input",
            label: "Mùa",
            nameInput: "season",
            limitSelection: 5,
            moreSelections: true,
            database: [
                "Mùa đông",
                "Mùa hè",
                "Mùa xuân",
                "Mùa Thu",
            ],
            arrIndexSelected: [],
        },

        style: {
            type: "mega-select-input",
            label: "Phong cách",
            nameInput: "style",
            moreSelections: false,
            indexSelected: -1,
            database: [
                "Thể thao",
                "Cơ bản",
                "Boho",
                "Tối giản",
                "Hàn Quốc",
                "Retro",
                "sexy",
                "Đường phố",
                "Công sở",
                "Cổ điển",
            ],
            isExtended: true,
        },

        shirtLength: {
            type: "mega-select-input",
            label: "Chiều dài áo",
            nameInput: "shirtLength",
            moreSelections: false,
            indexSelected: -1,
            database: [
                "Dài",
                "Đều đặn",
            ]
        },
        
    });

    const [product, setProduct] = useState({
        listPrice: []
    })


    // use effect
    useEffect(() =>{
        function updateState(){
            let stateTemp = {...fields};
            for(let [key, value] of Object.entries(stateTemp)){
                if(value.moreSelections){
                    stateTemp[key] = {
                        ...stateTemp[key], 
                        arrIndexSelected: new Array(stateTemp[key].database.length).fill(false),
                    }
                }
            }
            
            setFields({...stateTemp});
        }
        updateState();

    }, [])

    // handle event
    const handleChoseOption = event =>{
        let stateTemp = {...fields};

        for(let [key, value] of Object.entries(stateTemp)){
            if(value.nameInput === event.name){
                // update for multi selections input
                if(value.moreSelections){
                    let listSelected = value.arrIndexSelected.filter(item => item);
                    stateTemp[key].arrIndexSelected[event.index] = !stateTemp[key].arrIndexSelected[event.index];

                    if(listSelected.length > stateTemp[key].limitSelection){
                        stateTemp[key].arrIndexSelected[event.index] = !stateTemp[key].arrIndexSelected[event.index];
                    }

                }else{ // update for single selection input
                    stateTemp[key].indexSelected = event.index;
                }

                break;
            }
        }
        setFields({...stateTemp});
    }

    const handleSubmitProductInfomation = product =>{
        console.log({product})
    }

    const handleNotSave = () =>{
        let newProduct = {...product};
        newProduct.listPrice = [];
        setProduct(newProduct);
        setIsShowMorePrice(false);
    }

    // render
    const renderOptionalFields = () =>{
        let elm = [];
        for(let [key, value] of Object.entries(fields)){
            elm.push(
                <div className="w-50 widget-input-row align-items-center" key = {key}>
                    <div className="label">{value.label} </div>

                    <div className="flex-fill">
                        <SelectMegaBox 
                            name = {value.nameInput} 
                            listOption = {value.database} 
                            limit = {value.limitSelection}
                            arrIndexSelected = {value.arrIndexSelected}
                            indexSelected = {value.indexSelected} 
                            isExtended = {value.isExtended}
                            handleChoseOption = {handleChoseOption}
                        />
                    </div>
                </div>
            );
        }

        return elm;
    }

    return (
        <WidgetContent onSubmit = {handleSubmit(handleSubmitProductInfomation)}>

            <GroupInput>
                <h5>Thông tin cơ bản</h5>

                {/* Image */}
                <div className="widget-input-row">
                    <div className="label">Hình ảnh sản phẩm</div>

                    <div className="flex-fill d-flex flex-wrap" style = {{gap: '12px'}}>
                        <InputImage required/>
                        <InputImage label="Hình ảnh 1" name="images"/>
                        <InputImage label="Hình ảnh 2" name="images"/>
                        <InputImage label="Hình ảnh 3" name="images"/>
                        <InputImage label="Hình ảnh 4" name="images"/>
                        <InputImage label="Hình ảnh 5" name="images"/>
                        <InputImage label="Hình ảnh 6" name="images"/>
                        <InputImage label="Hình ảnh 7" name="images"/>
                        <InputImage label="Hình ảnh 8" name="images"/>
                    </div>
                </div>

                {/* Video */}
                <div className="widget-input-row">
                    <div className="label">Video sản phẩm</div>

                    <div className="d-flex flex-fill">
                        <InputImage label="Video bìa" name="video"/>

                        <ul>
                            <li>1. Kích thước: Tối đa 30Mb, độ phân giải không vượt quá 1280x1280px</li>
                            <li>2. Độ dài: 10s-60s</li>
                            <li>2. Độ dài: 10s-60s</li>
                            <li>4. Lưu ý: sản phẩm có thể hiển thị trong khi video đang được xử lý. Video sẽ tự động hiển thị sau khi đã xử lý thành công.</li>
                        </ul>

                        
                    </div>
                </div>

                {/* Name */}
                <div className="widget-input-row">
                    <div className="label">*Tên sản phẩm</div>

                    <div className="flex-fill">
                        <InputLimitBox control={control} name = "productName"/>
                    </div>
                    
                </div>

                {/* description */}
                <div className="widget-input-row">
                    <div className="label">*Mô tả sản phẩm</div>

                    <div className="flex-fill">
                        <TextareaLimitBox control={control} name = "productDescription" large/>
                    </div>
                    
                </div>

                {/* category */}
                <div className="widget-input-row">
                    <div className="label">*Danh mục</div>

                    <div className="flex-fill">
                        <WidgetCategory>
                            <div className="d-flex">
                                {productCategory.map(item =>{
                                    return (
                                        <div className="d-flex align-items-center">
                                            {item}
                                            <span className="arrow_carrot-right"></span>
                                        </div>
                                    );
                                })}

                                <button><span className="icon icon-pencil"></span></button>
                            </div>

                            <p>Cài đặt thuộc tính sản phẩm chính xác, <a href="#/">bấm vào đây để tìm hiểu</a> </p>
                            
                            
                        </WidgetCategory>
                    </div>
                    
                </div>

                <OptionalFields className="d-flex flex-wrap">
                    {renderOptionalFields()}
                </OptionalFields>
            </GroupInput>
    
            <GroupInput>
                <h5>Thông tin bán hàng</h5>

                {!isShowClassification && (
                    <>
                        {/* Price */}
                        <div className="widget-input-row align-items-center">
                            <div className="label">* Giá</div>

                            <div className="w-50">
                                <InputPriceNumber control={control} name = "productPrice"/>
                            </div>
                        </div>

                        {/* Inventory */}
                        <div className="widget-input-row align-items-center">
                            <div className="label">* Kho hàng</div>

                            <div className="w-50">
                                <InputInventoryNumber control={control} name = "productInventory"/>
                            </div>
                        </div>

                        {/* classification */}
                        <div className="widget-input-row align-items-center">
                            <div className="label">Phân loại hàng</div>

                            <div 
                                className="w-50 button-add"
                                onClick = {() => setIsShowClassification(true)}
                            >
                                <span className="icon_plus_alt2"></span>
                                Thêm nhóm phân loại
                            </div>
                        </div>
                    </>
                    
                )}
                

                {isShowClassification && <div className="flex-fill"><WidgetClassifyInput/></div>}

                

                {/* promotion */}
                <div className="widget-input-row align-items-center">
                    <div className="label">Mua nhiều giảm giá</div>

                    {!isShowMorePrice && <div 
                        className="w-50 button-add"
                        onClick = {() => setIsShowMorePrice(true)}
                    >
                        <span className="icon_plus_alt2"></span>
                        Thêm khoảng giá
                    </div>}
                    

                    {isShowMorePrice && <WidgetGroupPrice 
                        handleNotSave = {handleNotSave}
                    />}
                    
                </div>
            </GroupInput>

            <GroupInput>
                <h5>Thông tin khác</h5>

                {/* Situation */}
                <div className="widget-input-row align-items-center">
                    <div className="label">Tình trạng</div>

                    <div className="w-50">
                        <SelectMegaBox 
                            name = "productSituation"
                            listOption = {["Mới", "Đã sử dụng"]} 
                            indexSelected = {0} 
                            handleChoseOption = {handleChoseOption}
                        />
                    </div>
                </div>

                {/* SKU */}
                <div className="widget-input-row align-items-center">
                    <div className="label">SKU sản phẩm</div>

                    <div className="w-50">
                        <InputBox control={control} name = "productSKU"/>
                    </div>
                </div>
            </GroupInput>

            <WidgetButtons>
                <DefaultButton>Hủy</DefaultButton>
                <DefaultButton>Lưu & Ẩn</DefaultButton>
                <SaveButton>Lưu & Hiển thị</SaveButton>
            </WidgetButtons>

        </WidgetContent>
    );
}

export default WidgetAddInformation;