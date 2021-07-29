import React, {useState} from 'react';

// Components
import Tab from './../../feature/Layout/Tab';
import PageMainBanner from '../../feature/Sale/PageMainBanner';
import EventTime from '../../feature/Sale/EventTime';
import ListSale from '../../feature/Sale/ListSale';

// CSS
import './index.scss';


function SalePage(props) {
    const [mainBanner] = useState({
        image: "https://cf.shopee.vn/file/565a1853cc90417bbb3b5c01d139006b"
    });

    const [listEvent] = useState([
        {
            id: 1,
            startTime: "18",
            endTime: "20"
        },
        {
            id: 2,
            startTime: "20",
            endTime: "21"
        },
        {
            id: 3,
            startTime: "21",
            endTime: "23"
        },
        {
            id: 4,
            startTime: "00",
            endTime: "01"
        },
        {
            id: 5,
            startTime: "02",
            endTime: "03"
        }
    ]);

    const [listTab] = useState([
        {
            title: "Top picks",
            image: ""
        },
        {
            title: "Hang sieu sale",
            image: ""
        },
        {
            title: "chi 1k",
            image: ""
        },
        {
            title: "dong gia 9k",
            image: ""
        }
        ,
        {
            title: "duoi 59k",
            image: ""
        }
        ,
        {
            title: "duoi 99k",
            image: ""
        }
    ]);

    const [activeIndex, setActiveIndex] = useState(0);

    const [listProduct] = useState([
        {
            id: 1,
            title: "Bo san pham kem duong trang da ban dem eucerrin ulrtraw eucerrin ulrtraw",
            image: "https://cf.shopee.vn/file/e22e172ad15be22c7dc1de9320939ba8_tn",
            discount: 20,
            oldPrice: 950,
            buyNow: true,
            numSale: 50,
            numOrder: 6
        },
        {
            id: 2,
            title: "Gel duong am ban kem kiem soat dau paula's choice skin balancing",
            image: "https://cf.shopee.vn/file/47894a5dd5ea54bd91c481bf501cb3d6_tn",
            discount: 20,
            oldPrice: 850,
            buyNow: true,
            numSale: 50,
            numOrder: 16
        },
        {
            id: 3,
            title: "Vien uong dhc bo sung vitamin e nhat ban",
            image: "https://cf.shopee.vn/file/dd4fd4e3b5d9d5009ca5ac5f924df3b6_tn",
            discount: 22,
            oldPrice: 305,
            buyNow: true,
            numSale: 50,
            numOrder: 16
        },
        {
            id: 4,
            title: "binh dung nuoc the thao co ong hut va day deo",
            image: "https://cf.shopee.vn/file/3b5a6c14ec354405a8e0f2d3bb923168_tn",
            discount: 51,
            oldPrice: 99,
            buyNow: true,
            numSale: 50,
            numOrder: 12
        },
        {
            id: 5,
            title: "ao thun nam tron co cao mua he, phong cach truong thanh",
            image: "https://cf.shopee.vn/file/c51787122b21a291d2f95c8ca7f75a0a_tn",
            discount: 43,
            oldPrice: 149,
            buyNow: true,
            numSale: 50,
            numOrder: 0
        },
        {
            id: 6,
            title: "Dam vay hai day hoa nhi de thuong xinh xan rolisa",
            image: "https://cf.shopee.vn/file/127d4fbcc5c537d5484b48fedcfb2b45_tn",
            discount: 52,
            oldPrice: 229,
            buyNow: true,
            numSale: 50,
            numOrder: 4
        },
        {
            id: 7,
            title: "Ao cotton cho be trai/gai mem min tham hut mo hoi",
            image: "https://cf.shopee.vn/file/3e6f14443690d2497d42391832cb0629_tn",
            discount: 87,
            oldPrice: 68,
            buyNow: true,
            numSale: 50,
            numOrder: 31
        },
        {
            id: 8,
            title: "bang do dinh ngoc trai don gian phong cach han quoc",
            image: "https://cf.shopee.vn/file/7b47a94d3204a9b7a630ca2811084afe_tn",
            discount: 55,
            oldPrice: 20,
            buyNow: true,
            numSale: 50,
            numOrder: 40
        }
    ]);

    const onHandleChoseTab = index =>{
        if(index !== activeIndex){
            setActiveIndex(index);
        }
    }

    return (
        <div className = "mt-80 sale-page-content">
            <div className="container">
                {/* Main Banner */}
                <PageMainBanner image = {mainBanner.image}/>

                {/* Event Time */}
                <EventTime times = {listEvent}/>

                {/* Tab */}
                <Tab 
                    full = {true}
                    items = {listTab} 
                    activeIndex = {activeIndex}
                    onHandleChoseTab = {onHandleChoseTab}
                />

                {/* List Product */}
                <ListSale items = {listProduct}/>

            </div>
            
            
            
        </div>
    );
}

export default SalePage;