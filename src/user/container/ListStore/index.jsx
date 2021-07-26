import React from 'react';
import { useState } from 'react';

// Components
import WidgetBreadcrumb from '../../feature/Layout/WidgetBreadcrumb';
import WidgetAlphabet from '../../feature/ListStore/WidgetAlphabet';
import WidgetListStore from '../../feature/ListStore/WidgetListStore';

const titleStyle = {
    fontSize: "32px",
    margin: "40px 0px 50px",
}

function ListStorePage(props) {
    const [breadcrumb] = useState([
        {
            title: "Shopee",
            url: "#/"
        },
        {
            title: "Tat ca cua hang",
            url: "#/"
        },
        {
            title: "Thoi Trang Nam",
            url: "#/"
        }
    ]);

    const [listStore] = useState([
        {
            title: "Afast Viet Nam",
            image: "https://cf.shopee.vn/file/520da097555edc0f286bb11b08eff168",
            url: "#/"
        },
        {
            title: "Akuba",
            image: "https://cf.shopee.vn/file/991fc20ef09150a1e6d16aa03ea68620",
            url: "#/"
        },
        {
            title: "Amazing",
            image: "https://cf.shopee.vn/file/5af447cbacbb9147fa80af155287e32f",
            url: "#/"
        },
        {
            title: "Amihouse",
            image: "https://cf.shopee.vn/file/8e0635d0e0e48b1227287b766ad0ec67",
            url: "#/"
        },
        {
            title: "Aokang",
            image: "https://cf.shopee.vn/file/f06127c92f03d23fd9d9d8dd1dbd9516",
            url: "#/"
        },
        {
            title: "Aremi",
            image: "https://cf.shopee.vn/file/48f200699bf2108b66ad2a3b7d390da9",
            url: "#/"
        },
        {
            title: "Aristino",
            image: "https://cf.shopee.vn/file/7a865cf07ca7d9cc73b030a546eeb542",
            url: "#/"
        },
        {
            title: "Armous Clothing",
            image: "https://cf.shopee.vn/file/9b435136439b4f4319da1156f27ade14",
            url: "#/"
        },
        {
            title: "Asala",
            image: "https://cf.shopee.vn/file/b5bef91d5f7c97d6b10e4c37c58506a7",
            url: "#/"
        },
        {
            title: "Anh Tho",
            image: "https://cf.shopee.vn/file/c70052c81ab446213aeb8a1e54711270",
            url: "#/"
        },
        {
            title: "B-Pack",
            image: "https://cf.shopee.vn/file/7a5f3b8a72a4e1b5c4fb9f4fe760de46",
            url: "#/"
        }
    ])

    return (
        <div className = "mt-80 mb-5 list-store-page-content">
            <div className="container">
                {/* Breadcrumb */}
                <WidgetBreadcrumb items = {breadcrumb}/>

                <h5 style = {titleStyle}>Thoi Trang Nam</h5>

                <WidgetAlphabet numStore = {listStore.length}/>
                <div className="mt-5"></div>

                <WidgetListStore listStore = {listStore}/>
                
            </div>
            
        </div>
    );
}

export default ListStorePage;