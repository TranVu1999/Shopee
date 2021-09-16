import React, { useState } from 'react';
import styled from 'styled-components';
import {useForm} from 'react-hook-form';
import * as Yup from 'yup';
import {yupResolver } from '@hookform/resolvers/yup';
import {useHistory} from 'react-router-dom';

// components
import TitleContent from '../components/TitleContent';
import InputLimitBox from '../components/InputLimitBox2';
import ListCategoryOption from '../features/Product/ListCategoryOption';

const WidgetForm = styled.form`
    padding: 1.125rem 1.5rem;
    font-size: .875rem;
`;

const WidgetRow = styled.div`
    &>span{
        margin-top: .375rem;
        margin-right: 1rem;
        white-space: nowrap;
    }
`;

function ProductCategory() {
    // validate
    const validationSchema = Yup.object().shape({
        productName: Yup.string()
                    .required("Không được để trống tên sản phẩm")
                    .max(120, "Tên sản phẩm không vượt quá 120 ký tự")
                    .min(10, "Tên sản phẩm phải có ít nhất 10 ký tự")
    });
    
    // data
    const {
        handleSubmit,
        control,
    } = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            productName: "",
        }
    });
    const [listProdCate, setListProdCate] = useState(false);
    const history = useHistory();

    

    // handle event
    // handle nabigation next page
    const onHandleSubmit = data =>{
        if(setListProdCate.length){
            localStorage.setItem("productName", data.productName);
            localStorage.setItem("productCategory", JSON.stringify(listProdCate))

            history.push('/ban-hang/portal/product/new');
        }
        
    }

    const getProductCategory = listProdCate =>{
        setListProdCate(listProdCate);
    }

    return (
        <section className="owner-page-content">
            <TitleContent 
                title="Thêm 1 sản phẩm mới "
                subTitle="Vui lòng chọn ngành hàng phù hợp cho sản phẩm của bạn. "
            />

            <WidgetForm onSubmit = {handleSubmit(onHandleSubmit)}>
                <WidgetRow className="mb-5 d-flex ">
                    <span>Tên sản phẩm:</span>

                    <InputLimitBox control={control} name = "productName"/>
                </WidgetRow>

                <ListCategoryOption getProductCategory = {getProductCategory}/>

                <button 
                    className = {listProdCate.length ? "shopee-primary-btn" : "shopee-primary-btn disabled"}
                     
                > Tiếp theo </button>
            </WidgetForm>
            

        </section>
    );
}

export default ProductCategory;