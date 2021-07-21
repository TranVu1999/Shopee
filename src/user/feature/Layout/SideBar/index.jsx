import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import SidebarWidget from '../../../common/component/SidebarWidget';

// CSS
import './index.scss';

const CheckBox = styled.div`
    margin-right: 8px;
    height: 16px;
    width: 16px;

    background-color: #fff;
    
    border: 1px solid #d5d5d5;
    border-radius: 2px;
`;

SideBar.propTypes = {
    choseCategory: PropTypes.number,
    listCategory: PropTypes.array,
    listAddress: PropTypes.array,
    listBrand: PropTypes.array,
};

SideBar.defaultProps = {
    choseCategory: 0,
    listCategory: [],
    listAddress: [],
    listBrand: []
}

function SideBar(props) {
    const {
        listCategory, 
        choseCategory,
        listAddress,
        listBrand
    } = props;

    // GLOBAL VARIABLES
    const lengthCategory = listCategory.length;
    const lengthAddress = listAddress.length;
    const lengthBrand = listBrand.length;

    // STATE
    const [isShowFullCategory, setIsShowFullCategory] = useState(lengthCategory > 6);
    const [isShowFullAddress, setIsShowFullAddress] = useState(lengthAddress > 4);
    const [isShowFullBrand, setIsShowFullBrand] = useState(lengthBrand > 4);

    // SET STATE
    const showFullSidebar = type =>{
        switch (type){
            case "brand":
                setIsShowFullBrand(!isShowFullBrand);
                break;

            case "address":
                setIsShowFullAddress(!isShowFullAddress);
                break;

            case "category":
                setIsShowFullCategory(!isShowFullCategory);
                break;
            default:
                setIsShowFullCategory(!isShowFullCategory);
        }
    }

    // RENDER
    const showElmMore = (isShow, type) => {
        return isShow ? (
            <span
                onClick = {() => {showFullSidebar(type)}}
            >
                Xem them 
                <span aria-hidden="true" className="arrow_carrot-down"></span>
            </span>
        ) : (
            <span
                onClick = {() => {showFullSidebar(type)}}
            >
                Rut Gon 
                <span aria-hidden="true" className="arrow_carrot-up"></span>
            </span>
        )
    }

    const renderListCategory = () => {
        let elm = [];

        if(isShowFullCategory){
            elm = listCategory.slice(0, 6).map((item, index) =>{
                return (
                    <li 
                        key = {item} 
                        className = {choseCategory === index ? "active" : ""}
                    >
                        <span>{item}</span>
                    </li>
                );
            });
        }else{
            elm = listCategory.map((item, index) =>{
                return (
                    <li 
                        key = {item} 
                        className = {choseCategory === index ? "active" : ""}
                    >
                        <span>{item}</span>
                    </li>
                );
            });
        }
        

        let showMoreElm = lengthCategory > 6 ? (
            <li>
                {showElmMore(isShowFullCategory, "category")}
            </li>
        ) : "";

        elm.push(showMoreElm);

        return elm;

    }

    const renderListCheckBox = (type, maxLength) =>{
        let elm = [];
        let isShowMore = false;
        let length = 0;
        let items = [];

        switch(type){
            case "address":
                isShowMore = isShowFullAddress;
                length = lengthAddress;
                items = listAddress;
                break;
            case "brand":
                isShowMore = isShowFullBrand;
                length = lengthBrand;
                items = listBrand;
                break;
            default:
                break;
        }


        if(isShowMore){
            elm = items.slice(0, maxLength).map(item =>{
                return (
                    <li 
                        className = "d-flex align-items-center"
                        key = {item}
                    >
                        <CheckBox/>
                        <span>{item}</span>
                    </li>
                );
            });
            
        }else{
            elm = items.map(item =>{
                return (
                    <li 
                        className = "d-flex align-items-center"
                        key = {item}
                    >
                        <CheckBox/>
                        <span>{item}</span>
                    </li>
                );
            });
        }

        let showMoreElm = length > maxLength ? (
            <li> {showElmMore(isShowMore, type)}</li>
        ) : "";

        elm.push(showMoreElm);

        return elm;
    }

    return (
        <div className = "sidebar-content">
            
            {/* Product Category */}
            <div className="mb-20 sidebar-widget">
                <SidebarWidget icon = {(<span aria-hidden="true" className="mr-2 icon_ul"></span>)} title = "Tat ca danh muc"/>

                <ul className="list-category">
                    {renderListCategory()}
                </ul>
            </div>


            {/* Saleroom  */}
            <div className="sidebar-widget">
                <SidebarWidget icon = {(<span aria-hidden="true" className="mr-2 icon_hourglass"></span>)} title = "Bo loc tim kiem"/>

                <span className="label">Noi ban</span>
                <ul className="list-check">
                    {renderListCheckBox("address", 4)}
                </ul>

                <div className="line"></div>

                <span className="label">Thuong Hieu</span>
                <ul className="list-check">
                    {renderListCheckBox("brand", 4)}
                </ul>
            </div>
            
        </div>
    );
}

export default SideBar;