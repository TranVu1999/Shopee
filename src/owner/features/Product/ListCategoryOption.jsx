import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import Nodata from './../../components/NoData';

// Theme
import {BorderColor} from './../../theme';


const WidgetContent = styled.div`
    .widget-list-cat{
        padding: 1.5rem .875rem;
        background-color: #FAFAFA;
    }
`;

const WidgetFilter = styled.div`
    a{
        margin-left: .125rem;
        color: #2673dd;
    }
`;

const WidgetSearchForm = styled.div`
    padding: .25rem .875rem;
    width: 350px;
    
    background-color: #fff;
    border: 1px solid ${BorderColor.mainColor};
    border-radius: 25px;

    span{
        margin-right: .5rem;
    }
`;

const WidgetListCategory = styled.div`
    padding: .25rem 0;
    background-color: #fff;
    overflow-x: scroll;
    white-space: nowrap;
`;

const ListCategory = styled.div`
    display: inline-block;
    width: 18.75rem;
    height: 20rem;

    overflow-y: scroll;
    border-right: 1px solid ${BorderColor.mainColor};

    div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 5px 16px;

        cursor: pointer;

        p{
            margin: 0;
        }

        span{
            font-size: 1.125rem;
        }

        &:hover{
            background-color: rgba(0,0,0,.2);
        }

        &.active{
            color: #ee4d2d;
        }
    }
`;

const WidgetResultSelect = styled.div`
    padding: 1.125rem 0;

    label{
        margin: 0 1rem 0 0;
    }

    li{
        display: inline-block;
        margin-right: .5rem;
        color: #ee4d2d;
        font-weight: 700;

        span{
            margin-left: .5rem;
            font-size: 1.125rem;
        }

        &:last-child{
            span{
                display: none;
            }
        }
    }

    &>span{
        color: #999;
    }
`;

ListCategoryOption.propTypes = {
    categories: PropTypes.array.isRequired,
    getProductCategory: PropTypes.func.isRequired,
};

function ListCategoryOption({categories, getProductCategory}) {
    // Data

    const [indexActive, setIndexActive] = useState([-1, -1, -1, -1, -1]);
    const [prodCatId, setprodCatId] = useState(null);

    // effect 
    // check max level
    useEffect((emitHighestLevel) =>{
        let level = indexActive.findIndex(item => item < 0) - 1;

        if(level !== -1){
            let step = 0;
            let listSubCate = [...categories];

            do{
                listSubCate = indexActive[step] > -1 ? [...listSubCate[indexActive[step]].subCategories] : [];
                step++;
            }while(step <= level);

            if(!listSubCate.length > 0 && getProductCategory){
                getProductCategory(getCategory(), prodCatId);
            }else if(getProductCategory){
                getProductCategory([]);
            }
        }
        
    }, [indexActive]);


    // handle event
    const handleChoseCategory = (index, level, prodCatId) =>{

        let tempIndexActive = [...indexActive];
        tempIndexActive[level] = index;

        let length = indexActive.length;
        for(let i = level + 1; i < length; i++){
            tempIndexActive[i] = -1;
        }
        setIndexActive(tempIndexActive);
        setprodCatId(prodCatId);
    }

    // functions
    const getCategory = () =>{
        let listProdCate = [];

        let level = indexActive.findIndex(item => item < 0) - 1;
        let step = 0;
        let listSubCate = [...categories];

        while(step <= level){
            
            let title = listSubCate[indexActive[step]].title;
            listSubCate = [...listSubCate[indexActive[step]].subCategories];
            listProdCate.push(title);
            step++;
        }
        return listProdCate;
    }

    // render
    const renderListCategory = (listCategory, level) =>{
        let elmWidget = (<ListCategory className="custom-scrollbar">
            {
                listCategory.map((category, index) =>{
                    let lengthSub = category.subCategories.length;
                    return (
                        <div 
                            key = {category._id}
                            onClick = {() => handleChoseCategory(index, level, category._id)}
                            className = {indexActive[level] === index ? "active" : ""}
                        >
                            {category.title}

                            {lengthSub > 0 && <span aria-hidden="true" className="arrow_carrot-right"></span>}
                            
                        </div>
                    );
                })
            }
        </ListCategory>);

        return elmWidget;
    }

    const renderListLevel = () =>{
        let elm = [];
        let level = indexActive.findIndex(item => item < 0) - 1;

        if(level >= 0){
            let step = 0;
            let listOptions = categories[indexActive[step]].subCategories;            

            while(step <= level && listOptions.length > 0){                
                elm.push(renderListCategory(listOptions, step + 1));
                step++;
                listOptions = indexActive[step] > -1 ? listOptions[indexActive[step]].subCategories : [];
            }
        }

        return elm;        
    }

    const elmResultSelected = getCategory();
    const lengthCat = categories.length;

    return (
        <WidgetContent>
            <div className="widget-list-cat">
                <WidgetFilter className="mb-3">
                    <WidgetSearchForm className="mr-3 d-inline-flex align-items-center">
                        <span aria-hidden="true" className="icon_search"></span>
                        <input className="flex-fill" type="text" placeholder="Tên Ngành Hàng"/>
                    </WidgetSearchForm>

                    <span> Chọn ngành hàng chính xác, <a href="#/">bấm vào đây để tìm hiểu</a></span>
                </WidgetFilter>

                <WidgetListCategory>

                    {!lengthCat && <Nodata/>}
                    {lengthCat && (
                        <>
                            {renderListCategory(categories, 0)}
                            {renderListLevel()}
                        </>
                    )}

                    
                </WidgetListCategory>  
            </div>
                      

            <WidgetResultSelect>
                <div className="d-flex align-items-center mb-3">
                    <label >Đã chọn :</label>

                    {
                        elmResultSelected.length > 0 ? elmResultSelected.map(prodCate =>{
                            return (
                                <li 
                                    key = {prodCate}
                                    className="d-inline-flex align-items-center"
                                >
              
                                    {prodCate} 
                                    <span aria-hidden="true" className="arrow_carrot-right"></span>
                                </li>
                            )
                        }) : (
                            <span>Chưa chọn ngành hàng</span>
                        )
                    }
                </div>
                
            </WidgetResultSelect>



        </WidgetContent>
    );
}

export default ListCategoryOption;