import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import InputImage from './InputImage';
import InputLimitBox from '../../components/InputLimitBox';
import InputBox from '../../components/InputBox';
import InputPriceNumber from './InputPriceNumber';
import { BorderColor } from '../../theme';
import { useEffect } from 'react';

const WidgetContent = styled.div``;

const FormClassify = styled.div`
    position: relative;
    padding: 1.5rem 1.5rem;
    width: 60%;

    background-color: #FAFAFA;
    

    div.button-close{
        position: absolute;
        right: 0rem;
        top: 0rem;
        font-size: 1.25rem;
    }

    .row-input{
        margin-bottom: .5rem;

        .label{
            max-width: 5rem;
            line-height: 1.125rem;
        }

        .control-button{
            display: flex;
            justify-content: flex-end;
            width: 2.5rem;

            svg{
                height: 1rem;
                width: 1rem;
                fill: #999;
            }
        }
    }
`;

const WidgetApplyAll = styled.div`

    .group-input-apply-all{
        width: 75%;

        &>div:first-child{
            .widget-input-box{
                margin-right: -10px;
                border-radius: 4px 0 0 4px;
            }
        }
        &>div:nth-child(2){
            .widget-input-box{
                border-radius: 0;
                border-left: none;
                border-right: none;
            }
        }
        &>div:last-child{
            .widget-input-box{
                border-radius: 0 4px 4px 0;
            }
        }
    }

    

    div.shopee-primary-btn{ 
        margin-left: .75rem;
    }
`;

const WidgetTablePrice = styled.div`
    border: 1px solid ${BorderColor.mainColor};

    .header{
        background-color: #FAFAFA;
        border-bottom: 1px solid ${BorderColor.mainColor};
    }

    .row{
        margin: 0;
        border-bottom: 1px solid ${BorderColor.mainColor};

        &:last-child{
            border: none;
        }

        &>div{
            flex: 1;
        }

        .classify, .price, .inventory{
            border-right: 1px solid ${BorderColor.mainColor};
        }
    }

    .classify, .price, .inventory, .sku-classify{
        display: flex;
        padding: .625rem 0;

        width: 165px;
        align-items: center;
        justify-content: center;
    }

    .body .sub-row, .body .row{
        border-bottom: 1px solid ${BorderColor.mainColor};

        &:last-child{
            border: none;
        }

        .classify, .price, .inventory, .sku-classify{
            padding: 0;
        }

        .widget-input-box{
            border: none;
        }
    }

    
`;

const WidgetClassifyImage = styled.div`
    gap: .5rem;
`;

// Icons
const iconTrash = <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g fillRule="nonzero"><path d="M14.516 3.016h-4v-1a.998.998 0 0 0-.703-.955.99.99 0 0 0-.297-.045h-3a.998.998 0 0 0-.955.703.99.99 0 0 0-.045.297v1h-4a.5.5 0 1 0 0 1h1v10a.998.998 0 0 0 .703.955.99.99 0 0 0 .297.045h9a.998.998 0 0 0 .955-.703.99.99 0 0 0 .045-.297v-10h1a.5.5 0 1 0 0-1zm-8-1h3v1h-3v-1zm6 12h-9v-10h9v10z"></path><path d="M5.516 12.016a.5.5 0 0 0 .5-.5v-4a.5.5 0 1 0-1 0v4a.5.5 0 0 0 .5.5zM8.016 12.016a.5.5 0 0 0 .5-.5v-5a.5.5 0 1 0-1 0v5a.5.5 0 0 0 .5.5zM10.516 12.016a.5.5 0 0 0 .5-.5v-4a.5.5 0 1 0-1 0v4a.5.5 0 0 0 .5.5z"></path></g></svg>


WidgetClassifyInput.propTypes = {
    onHandleGetClassify: PropTypes.func.isRequired,
};

function WidgetClassifyInput({onHandleGetClassify}) {
    // Data
    const [listClassify, setListClassify] = useState({
        first: {
            label: "Nhóm phân loại 1",
            limit: 14,
            isOpen: true,
            classifyName: "",
            listType: [""],
            images: [null]
        },
        second: {
            label: "Nhóm phân loại 2",
            limit: 14,
            isOpen: false,
            classifyName: "",
            listType: [""]
        }
    });

    const [tablePrice, setTablePrice] = useState([
        {
            firstClassifyName: "",
            secondClassifyName: "",
            price: 0,
            sku: "",
            inventory: 0
        }
    ]);

    const [applyAll, setApplyAll] = useState({
        price: 1000,
        inventory: 50,
        sku: ""
    })


    // Effect
    useEffect(() =>{
        let tempTablePrice = [];

        if(!listClassify.second.isOpen){
            for(let item of listClassify.first.listType){
                let temp = {
                    firstClassifyName: item,
                    price: 0,
                    sku: "",
                    inventory: 0
                }

                tempTablePrice.push(temp);
            }
        }else{
            for(let firstItem of listClassify.first.listType){
                for(let secondItem of listClassify.second.listType){
                    let temp = {
                        firstClassifyName: firstItem,
                        secondClassifyName: secondItem,
                        price: 0,
                        sku: "",
                        inventory: 0
                    }
    
                    tempTablePrice.push(temp);
                }
                
            }
        }
        
        setTablePrice(tempTablePrice);

    }, [listClassify]);

    useEffect(() =>{
        if(!onHandleGetClassify) return;

        const classifies = {
            first: {
                title: listClassify.first.classifyName,
                types: listClassify.first.listType,
                images: listClassify.first.images,
            },
            second: {
                title: listClassify.second.classifyName,
                types: listClassify.second.listType,
            }
        };

        onHandleGetClassify({
            classifies: {...classifies},
            tablePrice: {...tablePrice}
        })
    }, [listClassify, tablePrice]);

    // functions
    const resetForm = (key) =>{
        let tempState = {...listClassify};
        
        if(key === "first"){
            tempState.first = {
                label: "Nhóm phân loại 1",
                limit: 14,
                isOpen: true,
                classifyName: "",
                listType: ["",]
            }
        }else{
            tempState.second = {
                label: "Nhóm phân loại 2",
                limit: 14,
                isOpen: false,
                classifyName: "",
                listType: ["",]
            }
        }

        return tempState;
    }

    const getIndexRowTablePrice = (firstClassifyName, secondClassifyName) =>{        
        return tablePrice.findIndex(item => item.firstClassifyName === firstClassifyName && item.secondClassifyName === secondClassifyName);
    }

    // handle event
    const handleCloseForm = () =>{
        let tempState = {...listClassify};

        if(tempState.second.isOpen){
            tempState.second.isOpen = false;
            tempState = {...resetForm("second")};
            setListClassify(tempState);
        }
    }

    const handleOpenForm = () =>{
        let tempState = {...listClassify};
        tempState.second.isOpen = true;
        console.log(tempState)
        setListClassify(tempState);
    }

    const handleRemoveTypeClassify = (key, indexRemove) =>{
        let tempState = {...listClassify};

        tempState[key].listType.splice(indexRemove, 1);

        setListClassify(tempState);
    }

    const addNewTypeOfClassify = classifyKey =>{
        let tempState = {...listClassify};
        tempState[classifyKey].listType.push("");

        if(classifyKey === 'first'){
            tempState[classifyKey].images.push(null);
        }
        setListClassify(tempState);
    }

    const onHandleChange = event =>{
        const {
            classifyKey, 
            type, 
            value, 
            index
        } = event;

        let tempState = {...listClassify};

        if(type === "classify-name"){
            if(value.length <= 14){
                tempState[classifyKey].classifyName = value;
                setListClassify(tempState);
            }
        }else if(type === "type-of-classify"){            

            if(value.length <= 20){
                tempState[classifyKey].listType[index] = value;

                setListClassify(tempState);
            }
        }
    }

    const onHandleGetValueTable = event =>{
        const {
            firstTypeName,
            secondTypeName,
            type,
            value
        } = event;   
        
        

        let tempTablePrice = [...tablePrice];        

        if(!listClassify.second.isOpen && firstTypeName){   
            for(let row of tempTablePrice){
                
                if(row.firstClassifyName === firstTypeName){
                    row[type] = value;
                    break;
                }
            }

            setTablePrice(tempTablePrice);
        }else if(firstTypeName && secondTypeName){
            
            for(let row of tempTablePrice){
                
                if(
                    row.firstClassifyName === firstTypeName && 
                    row.secondClassifyName === secondTypeName
                ){
                    row[type] = value;
                    break;
                }
            }
            setTablePrice(tempTablePrice);
        }
    }

    const onHandleGetImage = image => {
        const {value, index} = image;
        let tempState = {...listClassify};
        tempState.first.images[index] = value;
        
        setListClassify(tempState)
        
    }

    const handleUpdateAllChange = event => {
        const {name, value} = event;
        setApplyAll({
            ...applyAll,
            [name]: value
        })
    }

    const handleUpdateAllSubmit = () => {
        let tempTablePrice = [...tablePrice];
        for(let key in applyAll) {
            for(let rowPrice of tempTablePrice) {
                rowPrice[key] = applyAll[key];
            }
        }

        setTablePrice(tempTablePrice);
    }

    // render
    const renderListTypeOfClassify = classifyKey =>{
        const lengthType = listClassify[classifyKey].listType.length;

        if(lengthType === 1){
            const verify = {
                classifyKey: classifyKey,
                type: "type-of-classify",
                index: 0
            }

            return (
                <div className="d-flex row-input">
                    <div className="label">Phân loại hàng</div>

                    <div className="flex-fill">
                        <InputLimitBox 
                            verify = {verify}
                            limit = {20} 
                            value = {listClassify[classifyKey].listType[0]}

                            handleChange = {onHandleChange}
                        />
                    </div>

                    <div className="control-button">
                    </div>
                </div>
            );
        }
        
        return listClassify[classifyKey].listType.map((item, index) =>{
            const verify = {
                classifyKey: classifyKey,
                type: "type-of-classify",
                index: index
            }

            return (
                <div className="d-flex row-input">
                    
                    <div className="label">
                        {index === 0 && "Phân loại hàng"}
                    </div>

                    <div className="flex-fill">
                        <InputLimitBox 
                            verify = {verify}
                            limit={20} 
                            value={item}
                            handleChange = {onHandleChange}
                        />
                    </div>

                    <div className="align-items-stretch d-flex align-items-center control-button">
                        <button
                            onClick = {() => handleRemoveTypeClassify(classifyKey, index)}
                        >{iconTrash}</button>
                    </div>
                </div>
            );
        });
    }

    const renderListFormClassify = () =>{
        let elm = [];

        for(let key in listClassify){
            if(listClassify[key].isOpen){
                const verify = {
                    classifyKey: key,
                    type: "classify-name"
                };

                elm.push(
                    <div className="widget-input-row">
                        <div className="label">{listClassify[key].label}</div>
    
                        <FormClassify>
                            <div 
                                className = "button-close"
                                onClick = {handleCloseForm}
                            ><span className="icon_close"></span></div>

                            <div className="d-flex row-input">
                                <div className="label">Tên nhóm phân loại</div>
                                <div className="flex-fill">
                                    <InputLimitBox 
                                        verify = {verify}
                                        limit = {14} 
                                        value = {listClassify[key].classifyName}
                                        handleChange = {onHandleChange}
                                    />
                                </div>
                                <div className="control-button"></div>
                            </div>
                            <div className="mb-4"></div>

                            {renderListTypeOfClassify(key)}
    
                            {/* Button */}
                            <div className="d-flex row-input">
                                <div className="label"></div>
    
                                <div className="flex-fill">
                                    <div className="button-add"
                                        onClick = {() => addNewTypeOfClassify(key)}
                                    >
                                        <span aria-hidden="true" className="icon_plus_alt2"></span>
                                        Thêm phân loại hàng
                                    </div>
                                </div>
    
                                <div className="control-button">
                                </div>
                            </div>
                        </FormClassify>
    
                    </div>
                );
            }
        }

        if(!listClassify.second.isOpen){
            elm.push(<div className="widget-input-row">
                <div className="label">{listClassify.second.label}</div>

                <div style={{width: '60%'}}>
                    <button className = "button-add"
                        onClick = {() => handleOpenForm()}
                    >
                        <span aria-hidden="true" className="icon_plus_alt2"></span>
                        Thêm phân loại hàng
                    </button>
                </div>

            </div>);
        }

        return elm;
    }

    const renderSubRow = (firstClassifyName) =>{
        return listClassify.second.listType.map((item, index) =>{
            let verify = {
                firstTypeName: firstClassifyName,
                secondTypeName: item,
                type: ""
            }

            return (
                <div className="d-flex sub-row" >
                    <div className="classify">{item || "Tên"}</div>
                    <div className="price">
                        <InputPriceNumber
                            verify = {{...verify, type: "price"}}
                            value = {tablePrice[getIndexRowTablePrice(firstClassifyName, item)] ? tablePrice[getIndexRowTablePrice(firstClassifyName, item)].price : 0}
                            onHandleChange = {onHandleGetValueTable}
                        />
                    </div>
                    <div className="inventory">
                            <InputBox
                                verify = {{...verify, type: "inventory"}}
                                value = {tablePrice[getIndexRowTablePrice(firstClassifyName, item)] ? tablePrice[getIndexRowTablePrice(firstClassifyName, item)].inventory : 0}
                                onHandleChange = {onHandleGetValueTable}
                            />
                        </div>

                        <div className="sku-classify">
                            <InputBox
                                verify = {{...verify, type: "sku"}}
                                value = {tablePrice[getIndexRowTablePrice(firstClassifyName, item)] ? tablePrice[getIndexRowTablePrice(firstClassifyName, item)].sku : 0}
                                onHandleChange = {onHandleGetValueTable}
                            />
                        </div>
                </div>
            );
        })
    }

    const renderTablePrice = () =>{
        return listClassify.first.listType.map((item, index) =>{
            let verify = {
                firstTypeName: item,
                secondTypeName: "",
                type: ""
            }

            return (
                <div className="row">
                    <div className="classify" style={{flex: 1}}>{item || "Tên"}</div>

                    {!listClassify.second.isOpen && (<>
                        <div className="price">
                            <InputPriceNumber
                                verify = {{...verify, type: "price"}}
                                value = {tablePrice[index] ? tablePrice[index].price : 0}
                                onHandleChange = {onHandleGetValueTable}
                            />
                        </div>

                        <div className="inventory">
                            <InputBox
                                verify = {{...verify, type: "inventory"}}
                                value = {tablePrice[index] ? tablePrice[index].inventory : 0}
                                onHandleChange = {onHandleGetValueTable}
                            />
                        </div>

                        <div className="sku-classify">
                            <InputBox
                                verify = {{...verify, type: "sku"}}
                                value = {tablePrice[index] ? tablePrice[index].sku : 0}
                                onHandleChange = {onHandleGetValueTable}
                            />
                        </div>
                    </>)}

                    {listClassify.second.isOpen && <div style={{flex: 4}}>
                        {renderSubRow(item)} </div>
                    }
                    
                </div>
            );
        })
    }

    const renderInputImage = () =>{
        const {images, listType} = listClassify.first;
        return images.map((image, index) =>{
            return (
                <InputImage 
                    key = {index}
                    label = {listType[index] || "Phân loại..." }
                    name = "images" 
                    index = {index}
                    onGetImage = {onHandleGetImage}
                />
            );
        })
    }

    return (
        <WidgetContent>
            {renderListFormClassify()}

            {/* Apply all */}
            <div className="widget-input-row">
                <div className="label">Mẹo thiết lập phân loại hàng</div>

                <WidgetApplyAll className="flex-fill d-flex">
                    <div className="d-flex group-input-apply-all">
                        <div className="flex-fill">
                            <InputPriceNumber
                                verify = {{name: "price"}}
                                onHandleChange = {handleUpdateAllChange}
                                value = {applyAll.price}
                            />
                        </div>
                        
                        <div className="flex-fill">
                            <InputBox 
                                large 
                                verify = {{name: "inventory"}}
                                onHandleChange = {handleUpdateAllChange}
                                value = {applyAll.inventory}
                            />
                        </div>

                        <div className="flex-fill">
                            <InputBox 
                                large 
                                verify = {{name: "sku"}}
                                onHandleChange = {handleUpdateAllChange}
                                value = {applyAll.sku}
                            />
                        </div>
                    </div>   
                    <div 
                        onClick = {handleUpdateAllSubmit}
                        className="shopee-primary-btn"
                    >Áp dụng cho tất cả phân loại</div>               
                </WidgetApplyAll>
            </div>

            {/* Table Price */}
            <div className="widget-input-row">
                <div className="label">Danh sách phân loại hàng </div>

                <WidgetTablePrice className="flex-fill">
                    <div className="d-flex header row">
                        <div className="classify">{listClassify.first.classifyName || "Tên"}</div>
                        {listClassify.second.isOpen && <div className="classify">{listClassify.second.classifyName || "Tên"}</div>}
                        
                        <div className="price">Giá</div>
                        <div className="inventory">Kho hàng</div>
                        <div className="sku-classify">SKU phân loại</div>
                    </div>

                    <div className="body">
                        {renderTablePrice()}
                    </div>
                    
                </WidgetTablePrice>
            </div>

            {/* Image */}
            <div className="widget-input-row">
                <div className="label">{listClassify.first.classifyName || "Nhóm phân loại 1"}</div>

                <WidgetClassifyImage className="d-flex flex-fill">
                    {renderInputImage()}
                </WidgetClassifyImage>
            </div>
        </WidgetContent>
    );
}

export default WidgetClassifyInput;