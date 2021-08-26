import React, { useState, useEffect, lazy } from 'react';
import styled from 'styled-components';
import {useParams} from 'react-router-dom';

// Components
import WidgetBreadcrumb from '../feature/Layout/WidgetBreadcrumb';
import WidgetAlphabet from '../feature/ListStore/WidgetAlphabet';
import WidgetListStore from '../feature/ListStore/WidgetListStore';

const ListTypeStore = lazy(() => import("../feature/ListStore/ListTypeStore"))

const Title = styled.h5`
    margin: 25px 0 40px;
    font-size: 1.75rem;
    color: #333;
`;

function ListStore(props) {
    // data
    const {alias} = useParams();
    
    const [breadcrumb, setBreadcrumb] = useState(() =>{
        let breadcrumb = [
            { title: "Shopee", url: "#/" },
            { title: "Tất cả cửa hàng", url: "/list-store" }
        ]

        if(alias){
            breadcrumb.push({
                title: "Thể Thao & Du Lịch",
                url: "#/"
            })
        }

        return breadcrumb;
    });

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
        },
        {
            title: "Highway Menswear",
            image: "https://cf.shopee.vn/file/7c912d0d2819cc9b5b1d23b237926215",
            url: "#/",
        },
        {
            title: "HLA Official Store ",
            image: "https://cf.shopee.vn/file/39ca1252aeadac2e1d41340801d2d0db",
            url: "#/",
        },
        {
            title: "Hussio",
            image: "https://cf.shopee.vn/file/ee5eb370c7c0c4014816233f08eadf50",
            url: "#/",
        },
        {
            title: "Insidemen",
            image: "https://cf.shopee.vn/file/b18eb18b7949c7920dd678e0c10b2854",
            url: "#/",
        },
        {
            title: "Ivy Moda",
            image: "https://cf.shopee.vn/file/435c3a65423cae5d32d46ada62bede67",
            url: "#/",
        },
        {
            title: "John Henry ",
            image: "https://cf.shopee.vn/file/75a0294546e7ec1b2d606d63c5a02ee5",
            url: "#/",
        },
        {
            title: "Just Men",
            image: "https://cf.shopee.vn/file/dab9af9e9248bf8d1a37ad7eddb48a54",
            url: "#/",
        },
        {
            title: "Katusco",
            image: "https://cf.shopee.vn/file/507b42607f9ac99038d1c5010a812f5b",
            url: "#/",
        },
        {
            title: "Kojiba",
            image: "https://cf.shopee.vn/file/4eb1fd88a044d66267f56fa26be01ea0",
            url: "#/",
        },
        {
            title: "Krik",
            image: "https://cf.shopee.vn/file/70456d8b9c7110c3c78b2f53d5e9aaca",
            url: "#/",
        },
        {
            title: "Kwin",
            image: "https://cf.shopee.vn/file/bf498e19425c87ad76f88ba3ad57ad20",
            url: "#/",
        },
        {
            title: "Lados",
            image: "https://cf.shopee.vn/file/e071f123aed82dcc2210b301310dc024",
            url: "#/",
        },
        {
            title: "Laroma",
            image: "https://cf.shopee.vn/file/6cf227871394a10968636591db711b30",
            url: "#/",
        },
        {
            title: "Latashop",
            image: "https://cf.shopee.vn/file/8a4831239f71cd4046e4d01a136df753",
            url: "#/",
        },
        {
            title: "LAVIC",
            image: "https://cf.shopee.vn/file/d10256fd31e2965ebccf3cfc089559e0",
            url: "#/",
        },
        {
            title: "Laza",
            image: "https://cf.shopee.vn/file/6039426eaf9217510caa5ccfea0a8eb2",
            url: "#/",
        },
        {
            title: "LDV",
            image: "https://cf.shopee.vn/file/9281cb9044872ec390c54489d4aeed1e",
            url: "#/",
        },
        {
            title: "Levi's",
            image: "https://cf.shopee.vn/file/d14ef9dc3ec2100fc23d2a5a7344ccf0",
            url: "#/",
        },
        {
            title: "Lucacy",
            image: "https://cf.shopee.vn/file/4c83031f48cfdbcf0fd6f726de50553d",
            url: "#/",
        },
        {
            title: "Mando",
            image: "https://cf.shopee.vn/file/0671ab96c0cfa1d4dd8908033b5dd4dc",
            url: "#/",
        },
        {
            title: "Manticano",
            image: "https://cf.shopee.vn/file/3dd207a5dd04fabb767d53f558892d31",
            url: "#/",
        },
        {
            title: "Mark Ryden ",
            image: "https://cf.shopee.vn/file/86ab7dd1f82d2da22ccb73bfa1a80060",
            url: "#/",
        },
        {
            title: "MK Clever",
            image: "https://cf.shopee.vn/file/e7a635a2bf6bc3fcefe784e0e00eb0ea",
            url: "#/",
        },
        {
            title: "N7 Official",
            image: "https://cf.shopee.vn/file/0c3ac5e0b55a20c3400e525195d08d98",
            url: "#/",
        },
        {
            title: "Narsis",
            image: "https://cf.shopee.vn/file/c76a162a6e1ca7a0f8caff9b7aefa647",
            url: "#/",
        },
        {
            title: "Nexx & Dee",
            image: "https://cf.shopee.vn/file/3768f3120eac6b908d490d1c96ee7ab5",
            url: "#/",
        },
        {
            title: "Novelty",
            image: "https://cf.shopee.vn/file/1f3053087d2c29769e041e945d35ecd6",
            url: "#/",
        },
        {
            title: "OnOff",
            image: "https://cf.shopee.vn/file/860222879bb7d896286f28cc304f9e38",
            url: "#/",
        },
        {
            title: "Ontop Brand",
            image: "https://cf.shopee.vn/file/38a05e00eed063899a7b8319255be631",
            url: "#/",
        },
        {
            title: "Owen",
            image: "https://cf.shopee.vn/file/ddc75185f9fb776d74e7483c4bea3187",
            url: "#/",
        },
        {
            title: "Phan Nguyễn",
            image: "https://cf.shopee.vn/file/b591ea2855f21ee3d7ee94524d7be7bd",
            url: "#/",
        },
        {
            title: "Phát Tiến",
            image: "https://cf.shopee.vn/file/ca392bd8505ef7f47217018b2e5ce910",
            url: "#/",
        },
        {
            title: "Phúc An",
            image: "https://cf.shopee.vn/file/eec38ffd421d135d52907ba4ff94a9ac",
            url: "#/",
        },
        {
            title: "Pigo",
            image: "https://cf.shopee.vn/file/2f4bb9998ede242973ffc9dc8ebbe5ed",
            url: "#/",
        },
        {
            title: "Pious",
            image: "https://cf.shopee.vn/file/880211f9f91d801bf8f8ed4ca5b2c885",
            url: "#/",
        },
        {
            title: "Pmax Official Store",
            image: "https://cf.shopee.vn/file/8c55e482cca6ffa55ebc4e7272f49929",
            url: "#/",
        },
        {
            title: "Polido Việt Nam ",
            image: "https://cf.shopee.vn/file/e29e81b6577af87aa6184b52b77ce787",
            url: "#/",
        },
        {
            title: "Pumen Official Store",
            image: "https://cf.shopee.vn/file/7dbbd56c268f389236b58bab41e6049c",
            url: "#/",
        },
        {
            title: "Rainbow",
            image: "https://cf.shopee.vn/file/e2b3229ddfbfa6da300482777928c332",
            url: "#/",
        },
        {
            title: "Rough",
            image: "https://cf.shopee.vn/file/5ae4a69caf8172da365898519b0d6b17",
            url: "#/",
        }
    ]);

    const [listTypeStore, setListTypeStore] = useState([
        {
            id: "lstpc1",
            title: "Thể Thao & Du Lịch",
            alias: "the-thao-&-du-lich"
        },
        {
            id: "lstpc2",
            title: "Sắc Đẹp",
            alias: "sac-dep"
        },
        {
            id: "lstpc3",
            title: "Thời Trang Nữ",
            alias: "thoi-trang-nu"
        },
        {
            id: "lstpc4",
            title: "Nhà Sách Online",
            alias: "nha-sach-online"
        },
        {
            id: "lstpc5",
            title: "Đồng Hồ",
            alias: "dong-ho"
        },
        {
            id: "lstpc6",
            title: "Thời Trang Nam",
            alias: "thoi-trang-nam"
        },
        {
            id: "lstpc7",
            title: "Thể Thao & Du Lịch",
            alias: "the-thao-&-du-lich"
        },
        {
            id: "lstpc8",
            title: "Sức Khỏe",
            alias: "suc-khoe"
        },
        {
            id: "lstpc9",
            title: "Ô tô - xe máy - xe đạp",
            alias: "oto-xe-may-xe-dap"
        },
        {
            id: "lstpc10",
            title: "Máy tính & Laptop",
            alias: "may-tinh&laptop"
        },
        {
            id: "lstpc11",
            title: "Túi Ví Nữ",
            alias: "tui-vi-nu"
        },
        {
            id: "lstpc12",
            title: "Thể Thao & Du Lịch",
            alias: "the-thao-&-du-lich"
        },
        {
            id: "lstpc13",
            title: "Thời trang trẻ em",
            alias: "thoi-trang-tre-em"
        },
        {
            id: "lstpc14",
            title: "Thiết Bị Điện Tử",
            alias: "thiet-bi-dien-tu"
        },
        {
            id: "lstpc15",
            title: "Giày Dép Nữ",
            alias: "giay-dep-nu"
        },
        {
            id: "lstpc16",
            title: "Bách hóa Online",
            alias: "back-hoa-online"
        },
        {
            id: "lstpc17",
            title: "Voucher & Dịch vụ",
            alias: "voucher&dich-vu"
        },
        {
            id: "lstpc18",
            title: "Mẹ & Bé",
            alias: "me&be"
        },
        {
            id: "lstpc19",
            title: "Điện Thoại và Phụ Kiện",
            alias: "dien-thoai&phu-kien"
        },
        {
            id: "lstpc20",
            title: "Giày Dép Nam",
            alias: "giay-dep-nam"
        },
        {
            id: "lstpc21",
            title: "Thiết Bị Điện Gia Dụng",
            alias: "thiet-bi-gia-dung"
        },
        {
            id: "lstpc22",
            title: "Nhà Cửa & Đời Sống",
            alias: "nha-cua&doi-song"
        },
        {
            id: "lstpc23",
            title: "Máy ảnh - Máy quay phim",
            alias: "may-anh&may-quay-phim"
        },
        {
            id: "lstpc24",
            title: "Thú cưng",
            alias: "thu-cung"
        },
        {
            id: "lstpc25",
            title: "Phụ Kiện & Trang Sức Nữ",
            alias: "phu-kien&trang-suc-nu"
        },
        {
            id: "lstpc26",
            title: "Đồ chơi",
            alias: "do-choi"
        },
        {
            id: "lstpc27",
            title: "Giặt giũ & Chăm sóc nhà cửa",
            alias: "giat-giu&cham-soc-nha-cua"
        },

    ]);

    // effect
    useEffect(() =>{
        let breadcrumb = [
            { title: "Shopee", url: "#/" },
            { title: "Tất cả cửa hàng", url: "/list-store" }
        ]

        if(alias){
            breadcrumb.push({
                title: "Thể Thao & Du Lịch",
                url: "#/"
            })
        }

        setBreadcrumb(breadcrumb);
    }, [alias])


    return (
        <section className = "user-page-content mb-5 list-store-page-content">
            <div className="container">
                {/* Breadcrumb */}
                <WidgetBreadcrumb items = {breadcrumb}/>

                <Title>{alias ? "Thể Thao & Du Lịch" : "Tất cả cửa hàng"}</Title>
                {!alias && <ListTypeStore listTypeStore = {listTypeStore}/>}
               

                <WidgetAlphabet numStore = {listStore.length}/>
                <div className="mt-5"></div>

                <WidgetListStore listStore = {listStore}/>
                
            </div>
            
        </section>
    );
}

export default ListStore;