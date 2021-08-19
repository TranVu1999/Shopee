import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import InputImage from './InputImage';
import SelectMegaBox from './SelectMegaBox';
import InputLimitBox from './../../components/InputLimitBox';
import TextareaLimitBox from './../../components/TextareaLimitBox';
import InputPriceNumber from './InputPriceNumber';
import InputInventoryNumber from './InputInventoryNumber';
import WidgetClassifyInput from './WidgetClassifyInput';

const WidgetContent = styled.div`
    background-color: #F6F6F6; 

    &>div{
        box-shadow: 0 .2rem .4rem rgba(0,0,0,.09);
        padding: 2rem 2.5rem;
        margin-bottom: 1.5rem;
        background-color: #fff;
    }
`;

const OptionalFields = styled.div``;

const WidgetCategory = styled.div`
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


WidgetAddInformation.propTypes = {
    
};

function WidgetAddInformation(props) {
    // data
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
        
    })

    // use effect
    React.useEffect(() =>{
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

    // render
    const renderOptionalFields = () =>{
        let elm = [];
        for(let [key, value] of Object.entries(fields)){
            elm.push(
                <div className="widget-input-row align-items-center" key = {key}>
                    <div className="label">{value.label} </div>

                    <div style={{width: '50%'}}>
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
        <WidgetContent>

            <div>
                <h5>Thông tin cơ bản </h5>

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

                    <div className="d-flex">
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
                        <InputLimitBox value="Dinhr cuar ddinhr luon" limit={120}/>
                    </div>
                    
                </div>

                {/* description */}
                <div className="widget-input-row">
                    <div className="label">*Mô tả sản phẩm</div>

                    <div className="flex-fill">
                        <TextareaLimitBox value="" limit={3000} large/>
                    </div>
                    
                </div>

                {/* category */}
                <div className="widget-input-row">
                    <div className="label">*Danh mục</div>

                    <div className="flex-fill">
                        <WidgetCategory>
                            <div>
                                <span>Thời Trang Nữ
                                    <span aria-hidden="true" className="arrow_carrot-right"></span>
                                </span>
                                <span>Áo<span aria-hidden="true" className="arrow_carrot-right"></span></span>
                                <span>Áo hai dây và ba lỗ</span>
                                <button><span className="icon icon-pencil"></span></button>
                            </div>
                            <p>Cài đặt thuộc tính sản phẩm chính xác, <a href="#/">bấm vào đây để tìm hiểu</a> </p>
                            
                            
                        </WidgetCategory>
                    </div>
                    
                </div>




                <OptionalFields>
                    {renderOptionalFields()}
                </OptionalFields>
            </div>
    
            <div>
                <h5>Thông tin bán hàng</h5>

                {/* Price */}
                <div className="widget-input-row align-items-center">
                    <div className="label">* Giá</div>

                    <div style={{width: '50%'}}>
                        <InputPriceNumber/>
                    </div>
                </div>

                {/* Inventory */}
                <div className="widget-input-row align-items-center">
                    <div className="label">* Kho hàng</div>

                    <div style={{width: '50%'}}>
                        <InputInventoryNumber/>
                    </div>
                </div>
            </div>
            
            <div>
                <WidgetClassifyInput/>
            </div>

        </WidgetContent>
    );
}

export default WidgetAddInformation;