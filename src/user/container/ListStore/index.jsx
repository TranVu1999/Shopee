import React, { useState } from 'react';
import styled from 'styled-components';


// Components
import WidgetBreadcrumb from '../../feature/Layout/WidgetBreadcrumb';
import WidgetAlphabet from '../../feature/ListStore/WidgetAlphabet';
import WidgetListStore from '../../feature/ListStore/WidgetListStore';

const WidgetContent = styled.div``;

const Title = styled.h5`
    margin: 25px 0 40px;
    font-size: 1.75rem;
    color: #333;
    
`;

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
            title: "Anh Thơ",
            image: "https://cf.shopee.vn/file/c70052c81ab446213aeb8a1e54711270",
            url: "#/"
        },
        {
            title: "B-Pack",
            image: "https://cf.shopee.vn/file/7a5f3b8a72a4e1b5c4fb9f4fe760de46",
            url: "#/"
        },
        {
            title: "Bad Habits Store",
            image: "https://cf.shopee.vn/file/aa3447cd66a9aeaf02807358f76e801f",
            url: "#/"
        },
        {
            title: "Bad Rabbit Club",
            image: "https://cf.shopee.vn/file/9fbc44c5fda8c8a0a6e5cdfc35249bed",
            url: "#/"
        },
        {
            title: "Basis Premium Store",
            image: "https://cf.shopee.vn/file/b676e79803c8c596afed806644deb2de",
            url: "#/"
        },
        {
            title: "Batino",
            image: "https://cf.shopee.vn/file/e0affcbe60f935e8a717b1d5da75fb5c",
            url: "#/"
        },
        {
            title: "Ben & Tod ",
            image: "https://cf.shopee.vn/file/db2ac19a055a6f3a453d04cb5a846058",
            url: "#/"
        },
        {
            title: "Beverly Hills Polo Club",
            image: "https://cf.shopee.vn/file/ed3779fc90f264dbaa538ccb24b4f80b",
            url: "#/"
        },
        {
            title: "Bi Luxury",
            image: "https://cf.shopee.vn/file/dcb6014c56264e43fc0ff2d1aac01152",
            url: "#/"
        },
        {
            title: "Birdybag",
            image: "https://cf.shopee.vn/file/1c2bdc665398416e2765c9a9f5b89036",
            url: "#/"
        },
        {
            title: "Bizmen",
            image: "https://cf.shopee.vn/file/8507b127515b0a0250b74ee95063ab6a",
            url: "#/"
        },
        {
            title: "Blentino",
            image: "https://cf.shopee.vn/file/90b87c52e1899e6754ee5fe6b56d495a",
            url: "#/"
        },
        {
            title: "Bonado",
            image: "https://cf.shopee.vn/file/9a4ad8a6291ce786c11dac193b45d5c7",
            url: "#/"
        },
        {
            title: "BOTEE",
            image: "https://cf.shopee.vn/file/320874b400b7140fc0f6339f0836311a",
            url: "#/"
        },
        {
            title: "Canifa",
            image: "https://cf.shopee.vn/file/77d1717d7732b547cf3d2dcb0d95118b",
            url: "#/"
        },
        {
            title: "Ceffylo",
            image: "https://cf.shopee.vn/file/ca46ee0aaabd634a3bfabaf2959a13d0",
            url: "#/"
        },
        {
            title: "CERA Y",
            image: "https://cf.shopee.vn/file/b5919c57c2e7bf82222e1ea7a96b4fea",
            url: "#/"
        },
        {
            title: "Chenny",
            image: "https://cf.shopee.vn/file/876700b1b6eafffe78e4cfaff78c71a9",
            url: "#/"
        },
        {
            title: "CIZA",
            image: "https://cf.shopee.vn/file/e47006720872248b6330427b8e872a8c",
            url: "#/"
        },
        {
            title: "Coolmate",
            image: "https://cf.shopee.vn/file/63072c90d0ed6f1acdbc301f4e35f890",
            url: "#/"
        },
        {
            title: "Cotton Goods",
            image: "https://cf.shopee.vn/file/41ca88d8477905ed6a53eaa12c1a1243",
            url: "#/"
        },
        {
            title: "CR7",
            image: "https://cf.shopee.vn/file/2acd3f03bf238a2046f5e2276230165f",
            url: "#/"
        },
        {
            title: "DAVIES",
            image: "https://cf.shopee.vn/file/c808db8c80c0ab3f3e88f4f558fe09c6",
            url: "#/"
        },
        {
            title: "DAVIES",
            image: "https://cf.shopee.vn/file/c808db8c80c0ab3f3e88f4f558fe09c6",
            url: "#/"
        },
        {
            title: "Determinant",
            image: "https://cf.shopee.vn/file/76c470be212bf4f2148d64511916325a",
            url: "#/"
        },
        {
            title: "Dilano Store",
            image: "https://cf.shopee.vn/file/8894f52e46b065e593dde81996f6f332",
            url: "#/"
        },
        {
            title: "Disney Golf",
            image: "https://cf.shopee.vn/file/b74927315b06c1ad228a15921da092a6",
            url: "#/"
        },
        {
            title: "DSQUARED2",
            image: "https://cf.shopee.vn/file/1739bfcf97f010b4805aa4c533d5608c",
            url: "#/"
        },
        {
            title: "Dunlop",
            image: "https://cf.shopee.vn/file/c2684ed34a9a6c4366702b37daed6371",
            url: "#/"
        },
        {
            title: "Everest",
            image: "https://cf.shopee.vn/file/ee67615b2871ae017c69e87184c84102",
            url: "#/"
        },
        {
            title: "F8888",
            image: "https://cf.shopee.vn/file/9417161c2616cedec0ddfd119c5f2a3f",
            url: "#/"
        },
        {
            title: "Fashion Mart",
            image: "https://cf.shopee.vn/file/dfcd52924dbbc165a1b37039c457ec4b",
            url: "#/"
        },
        {
            title: "Fasvin",
            image: "https://cf.shopee.vn/file/4aeaca8a8ce949f710c5e1a72d9670f7",
            url: "#/"
        },
        {
            title: "Feaer Denim",
            image: "https://cf.shopee.vn/file/eaf39f8d15c2031626c9470fdfcf253a",
            url: "#/"
        },
        {
            title: "Flasbacks Official Store",
            image: "https://cf.shopee.vn/file/af9b838443ae6d719c9545a82efe7591",
            url: "#/"
        },
        {
            title: "Fortune Mouse",
            image: "https://cf.shopee.vn/file/12d0ad1af373a7a83683b19b62ab3a87",
            url: "#/"
        },
        {
            title: "Frey",
            image: "https://cf.shopee.vn/file/1322b88af9af0f20eea423b56fbfda01",
            url: "#/"
        },
        {
            title: "FTT Leather",
            image: "https://cf.shopee.vn/file/fbba2e2ae04ffbe283aba292e485a1af",
            url: "#/"
        },
        {
            title: "FTT Leather",
            image: "https://cf.shopee.vn/file/fbba2e2ae04ffbe283aba292e485a1af",
            url: "#/"
        },
        {
            title: "Gen Viet",
            image: "https://cf.shopee.vn/file/b30c2e7440552e726ddb48d8633321ed",
            url: "#/"
        },
        {
            title: "GenZ",
            image: "https://cf.shopee.vn/file/4a0969055ff346dea8396015ee1560c8",
            url: "#/"
        },
        {
            title: "Giordano",
            image: "https://cf.shopee.vn/file/ae65749f2ce0ad33971977a9d4df34dd",
            url: "#/"
        },
        {
            title: "GKM Fashion",
            image: "https://cf.shopee.vn/file/e77cf09b2de1ee54db2ef3313ae5bcc2",
            url: "#/"
        },
        {
            title: "GUZADO",
            image: "https://cf.shopee.vn/file/21c730c26e8d3a6fab107a6ea75c057a",
            url: "#/",
            new: true
        },
        {
            title: "Hanama",
            image: "https://cf.shopee.vn/file/ce45f18560c43be160ce2bce380f4fbf",
            url: "#/",
        },
        {
            title: "Hanoi Riot",
            image: "https://cf.shopee.vn/file/56455a2319b902b6a407199e3c6ad45d",
            url: "#/",
        },
        {
            title: "Haras",
            image: "https://cf.shopee.vn/file/58655e4b2935d4e57044f285769511f0",
            url: "#/",
        },
        {
            title: "Heboz",
            image: "https://cf.shopee.vn/file/b0651a5c8fcb06a7425ff216f3a3b42f",
            url: "#/",
        },
        {
            title: "Heika",
            image: "https://cf.shopee.vn/file/c5a4fe46f05a1eee4839fe46032ae9b0",
            url: "#/",
        }
    ])

    return (
        <WidgetContent className = "user-page-content mb-5 list-store-page-content">
            <div className="container">
                {/* Breadcrumb */}
                <WidgetBreadcrumb items = {breadcrumb}/>

                <Title>Thời Trang Nam</Title>

                <WidgetAlphabet numStore = {listStore.length}/>
                <div className="mt-5"></div>

                <WidgetListStore listStore = {listStore}/>
                
            </div>
            
        </WidgetContent>
    );
}

export default ListStorePage;