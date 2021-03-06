import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {useForm} from 'react-hook-form';
import * as Yup from 'yup';
import {yupResolver } from '@hookform/resolvers/yup';

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

const GroupInput = styled.div``;

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
    optionalAttributes: PropTypes.array.isRequired,
    handleSubmitProduct: PropTypes.func.isRequired,
};

function WidgetAddInformation(props) {
    // validate
    const validationSchema = Yup.object().shape({
        productName: Yup.string()
                    .required("Kh??ng ???????c ????? tr???ng t??n s???n ph???m")
                    .max(120, "T??n s???n ph???m kh??ng v?????t qu?? 120 k?? t???")
                    .min(10, "T??n s???n ph???m ph???i c?? ??t nh???t 10 k?? t???"),
        productDescription: Yup.string()
                    .required("Kh??ng ???????c ????? tr???ng m?? t??? s???n ph???m")
                    .max(5000, "M?? t??? s???n ph???m kh??ng v?????t qu?? 5000 k?? t???")
                    .min(100, "M?? t??? s???n ph???m ph???i c?? ??t nh???t 100 k?? t???"),
        productPrice: Yup.number()
                    .max(1000000000, "Gi?? s???n ph???m kh??ng v?????t qu?? 100 tri???u ?????ng")
                    .min(1000, "Gi?? s???n ph???m ??t nh???t 1 ngh??n ?????ng")
                    .positive("Gi?? s???n ph???m l?? m???t s??? d????ng"),
        productInventory: Yup.number()
                    .required("Kh??ng ???????c ????? tr???ng tr?????ng n??y")
                    .min(50, "B???n ph???i c?? ??t nh???t 50 s???n ph???m")
                    .positive("D??? li???u tr?????ng n??y ph???i l?? m???t s??? d????ng"),   
        productSKU: Yup.string()
                    .required("Kh??ng ???????c ????? tr???ng tr?????ng n??y")
                    .min(5, "M?? s???n ph???m c?? ??t nh???t 5 k?? t???")
                    .max(15, "M?? s???n ph???m c?? t???i ??a 15 k?? t???"),    
    });
    
    // data
    const productCategory = JSON.parse(localStorage.getItem("productCategory"));
    const {optionalAttributes, handleSubmitProduct} = props;

    const {handleSubmit, control} = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues:{
            productName: localStorage.getItem("productName") || "",
            productDescription: "",
            productCategory,
            productPrice: 1000,
            productInventory: 50, 
            productSKU: ""
        }
    });

    const [isShowClassification, setIsShowClassification] = useState(false);
    const [isShowMorePrice, setIsShowMorePrice] = useState(false);
    const [fields, setFields] = useState({});

    const [product, setProduct] = useState({
        title: "",
        avatar: null,
        tableSize: null,
        images: [null, null, null, null, null, null, null, null],
        video: "",
        listPrice: [],
        categories: [], 
        sku: "",
        situation: "m???i",
        classification: null
    });

    // use effect
    useEffect(() =>{
        let fields = {};
        for(let attribute of optionalAttributes){

            if(!attribute.moreSelection){
                fields[attribute.nameInput] = { indexSelected: -1 };
            }else{
                fields[attribute.nameInput] = {
                    arrIndexSelected: new Array(attribute.database.length).fill(false)
                }
            }
            
            fields[attribute.nameInput] = {
                ...fields[attribute.nameInput],
                type: "mega-select-input",
                label: attribute.title,
                nameInput: attribute.nameInput,
                moreSelections: attribute.moreSelection,
                database: attribute.database,
                isExtended: attribute.isExtended,
                limitSelection: attribute.limitSelection || 0
            }
        }
        setFields(fields);

    }, [optionalAttributes]);

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

    const handleSubmitProductInfomation = prodForm =>{

        const prodInfo = {
            ...product,
            title: prodForm.productName,
            price: prodForm.productPrice,
            inventory: prodForm.productInventory,
            description: prodForm.productDescription,
            categories: prodForm.productCategory,
            sku: prodForm.productSKU, 
            optionalAttributes: {}
        }

        for(let optAttrKey in fields){
            const {
                moreSelections, 
                indexSelected, 
                arrIndexSelected,
                database
            } = fields[optAttrKey];

            if(moreSelections){
                prodInfo.optionalAttributes[optAttrKey] = [];

                let length = arrIndexSelected.length;
                for(let idx = 0; idx < length; idx++){
                    if(arrIndexSelected[idx]){
                        prodInfo.optionalAttributes[optAttrKey].push(database[idx]);
                    }
                }

            }else{
                prodInfo.optionalAttributes[optAttrKey] = "";
                if(indexSelected !== -1){
                    prodInfo.optionalAttributes[optAttrKey] = database[indexSelected] 
                }
            }
        }

        setProduct(prodInfo);
        if(handleSubmitProduct){
            handleSubmitProduct(prodInfo)
        }
    }

    const onHandleGetImage = image => {
        const {value, name, index} = image;

        switch (name){
            case "avatar":
                setProduct({
                    ...product,
                    avatar: value
                });
                break;

            case "images":
                const images = product.images;
                images[index] = value;

                setProduct({
                    ...product,
                    images
                })
                break;
            case "tableSize": 
                setProduct({
                    ...product,
                    [name]: value
                });
                break;
            default:
                break;
        }
    }

    const onHandleGetClassify = classifyData =>{
        setProduct({
            ...product,
            classification: classifyData
        })
    }

    // Handle section promo price
    const handleNotSave = () =>{
        let newProduct = {...product};
        newProduct.listPrice = [];
        setProduct(newProduct);
        setIsShowMorePrice(false);
    }

    const handleGetPromo = listPrice =>{
        setProduct({
            ...product,
            listPrice
        })
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

    const renderInputImage = () =>{
        return product.images.map((inputImage, index) =>{
            return (
                <InputImage 
                    key = {index} 
                    label = {`H??nh ???nh ${index + 1}` }
                    name = "images"
                    index = {index}
                    onGetImage = {onHandleGetImage}
                />
            );
        });
    }

    return (
        <WidgetContent onSubmit = {handleSubmit(handleSubmitProductInfomation)}>

            <GroupInput>
                <h5>Th??ng tin c?? b???n</h5>

                {/* Image */}
                <div className="widget-input-row">
                    <div className="label">H??nh ???nh s???n ph???m</div>

                    <div className="flex-fill d-flex flex-wrap" style = {{gap: '12px'}}>
                        <InputImage 
                            required 
                            name = "avatar" 
                            index = {-1}
                            onGetImage = {onHandleGetImage}
                        />
                        {renderInputImage()}                        
                    </div>
                </div>

                {/* Video */}
                <div className="widget-input-row">
                    <div className="label">Video s???n ph???m</div>

                    <div className="d-flex flex-fill">
                        <InputImage label="Video b??a" name="video"/>

                        <ul>
                            <li>1. K??ch th?????c: T???i ??a 30Mb, ????? ph??n gi???i kh??ng v?????t qu?? 1280x1280px</li>
                            <li>2. ????? d??i: 10s-60s</li>
                            <li>2. ????? d??i: 10s-60s</li>
                            <li>4. L??u ??: s???n ph???m c?? th??? hi???n th??? trong khi video ??ang ???????c x??? l??. Video s??? t??? ?????ng hi???n th??? sau khi ???? x??? l?? th??nh c??ng.</li>
                        </ul>

                        
                    </div>
                </div>

                {/* Name */}
                <div className="widget-input-row">
                    <div className="label">*T??n s???n ph???m</div>

                    <div className="flex-fill">
                        <InputLimitBox control={control} name = "productName"/>
                    </div>
                    
                </div>

                {/* description */}
                <div className="widget-input-row">
                    <div className="label">*M?? t??? s???n ph???m</div>

                    <div className="flex-fill">
                        <TextareaLimitBox control={control} name = "productDescription" large/>
                    </div>
                    
                </div>

                {/* category */}
                <div className="widget-input-row">
                    <div className="label">*Danh m???c</div>

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

                            <p>C??i ?????t thu???c t??nh s???n ph???m ch??nh x??c, <a href="#/">b???m v??o ????y ????? t??m hi???u</a> </p>
                            
                            
                        </WidgetCategory>
                    </div>
                    
                </div>

                <OptionalFields className="d-flex flex-wrap">
                    {renderOptionalFields()}
                </OptionalFields>
            </GroupInput>
    
            <GroupInput>
                <h5>Th??ng tin b??n h??ng</h5>

                {!isShowClassification && (
                    <>
                        {/* Price */}
                        <div className="widget-input-row align-items-center">
                            <div className="label">* Gi??</div>

                            <div className="w-50">
                                <InputPriceNumber control={control} name = "productPrice"/>
                            </div>
                        </div>

                        {/* Inventory */}
                        <div className="widget-input-row align-items-center">
                            <div className="label">* Kho h??ng</div>

                            <div className="w-50">
                                <InputInventoryNumber control={control} name = "productInventory"/>
                            </div>
                        </div>

                        {/* classification */}
                        <div className="widget-input-row align-items-center">
                            <div className="label">Ph??n lo???i h??ng</div>

                            <div 
                                className="w-50 button-add"
                                onClick = {() => setIsShowClassification(true)}
                            >
                                <span className="icon_plus_alt2"></span>
                                Th??m nh??m ph??n lo???i
                            </div>
                        </div>
                    </>
                    
                )}
                

                {isShowClassification && <div className="flex-fill">
                    <WidgetClassifyInput
                        onHandleGetClassify = {onHandleGetClassify}
                    />
                </div>}

                

                {/* promotion */}
                <div className="widget-input-row align-items-center">
                    <div className="label">Mua nhi???u gi???m gi??</div>

                    {!isShowMorePrice && <div 
                        className="w-50 button-add"
                        onClick = {() => setIsShowMorePrice(true)}
                    >
                        <span className="icon_plus_alt2"></span>
                        Th??m kho???ng gi??
                    </div>}
                    

                    {isShowMorePrice && <WidgetGroupPrice 
                        handleNotSave = {handleNotSave}
                        handleGetPromo = {handleGetPromo}
                    />}
                    
                </div>

                {/* Price */}
                <div className="widget-input-row align-items-center">
                    <div className="label">B???ng quy ?????i k??ch c???</div>

                    <div className="w-50">
                        <InputImage 
                            name = "tableSize" 
                            label = ""
                            onGetImage = {onHandleGetImage}
                        />
                    </div>
                </div>
            </GroupInput>

            <GroupInput>
                <h5>Th??ng tin kh??c</h5>

                {/* Situation */}
                <div className="widget-input-row align-items-center">
                    <div className="label">T??nh tr???ng</div>

                    <div className="w-50">
                        <SelectMegaBox 
                            name = "productSituation"
                            listOption = {["M???i", "???? s??? d???ng"]} 
                            indexSelected = {0} 
                            handleChoseOption = {handleChoseOption}
                        />
                    </div>
                </div>

                {/* SKU */}
                <div className="widget-input-row align-items-center">
                    <div className="label">SKU s???n ph???m</div>

                    <div className="w-50">
                        <InputBox control={control} name = "productSKU"/>
                    </div>
                </div>
            </GroupInput>

            <WidgetButtons>
                <DefaultButton>H???y</DefaultButton>
                <DefaultButton>L??u & ???n</DefaultButton>
                <SaveButton>L??u & Hi???n th???</SaveButton>
            </WidgetButtons>

        </WidgetContent>
    );
}

export default WidgetAddInformation;