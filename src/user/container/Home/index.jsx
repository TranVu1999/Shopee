import React from 'react';
import { useState } from 'react';

// Components
import Title from '../../common/component/Title';
import Banner from '../../common/component/Banner';
import SearchTrend from '../../feature/Home/SearchTrend';
import SliderTopSearch from '../../feature/Home/SliderTopSearch';
import SliderProductCategory from '../../feature/Home/SliderProductCategory';
import SliderMainBanner from '../../feature/Layout/SliderMainBanner';
import RightMainBanner from '../../feature/Home/RightMainBanner';
import FlashSale from '../../feature/Home/FlashSale';
import ProductHint from '../../feature/Home/ProductHint';
import Mall from '../../feature/Home/Mall';
import WidgetSliderBrand from '../../feature/Home/WidgetSliderBrand';

HomePage.propTypes = {
    
};

function HomePage(props) {

    const [listSlideMainBanner] = useState([

        {
            id: 1,
            url: "#/",
            image: "https://cf.shopee.vn/file/10803746301c970cd90c632396dc2098_xxhdpi"
        },
        {
            id: 2,
            url: "#/",
            image: "https://cf.shopee.vn/file/014918fae7cced891e6693169e83dee2_xxhdpi"
        },
        {
            id: 3,
            url: "#/",
            image: "https://cf.shopee.vn/file/2ed4706219a64e8cb091ca15db34ac8c_xxhdpi"
        },
        {
            id: 4,
            url: "#/",
            image: "https://cf.shopee.vn/file/ea662a09cd9e491b6ce6d50ddabeebef_xxhdpi"
        },
        {
            id: 5,
            url: "#/",
            image: "https://cf.shopee.vn/file/721437c36ef2f2efc6268b3cfea867a3_xxhdpi"
        }
    ]);

    const [listRightMainBanner] = useState([
        {
            link: "#/",
            image: "https://cf.shopee.vn/file/287d62725ad627660224f9145d573702_xhdpi"
        },
        {
            link: "#/",
            image: "https://cf.shopee.vn/file/194b364c8f78fc69b108ee7d22f9a804_xhdpi"
        }
    ]);

    const [listBanner] = useState([
        "https://cf.shopee.vn/file/6244c2f7d47b00fef4b1dd617bd94367",
        "https://cf.shopee.vn/file/2ab46fa4127d4329adf07c6b0fc51114",
        "https://cf.shopee.vn/file/367df3234b5f4524e037efd3b1fce22e"

    ]);

    const [listTopSearch] = useState([
        {
            id: 1,
            title: "Sticker Dan Trang Tri So De Thuong",
            numSold: 48,
            images: [
                "https://cf.shopee.vn/file/c8b868df63f54c3135863a1df818bde3_tn",
                "https://cf.shopee.vn/file/1c9a4357a6f921411ce139f28e24eca1_tn",
                "https://cf.shopee.vn/file/d2787b8c98200f1f8d62c6736f04d7db_tn"
            ]
        },
        {
            id: 2,
            title: "Tui Dung Com Giu Nhiet",
            numSold: 6,
            images: [
                "https://cf.shopee.vn/file/1c23ccb76031614584cbdd977e31bd7a_tn",
                "https://cf.shopee.vn/file/6d1416daa515aaf1a3c1b6c5fc47e07b_tn",
                "https://cf.shopee.vn/file/d12aab828a40413ccb274521fc55eccd_tn"
            ]
        },
        {
            id: 3,
            title: "Tui Dung Com Giu Nhiet",
            numSold: 6,
            images: [
                "https://cf.shopee.vn/file/362669996dc2f2f98c47cdc37f6da6d3_tn",
                "https://cf.shopee.vn/file/f03a91132ed1fd13bd36e704f4a52b6e_tn",
                "https://cf.shopee.vn/file/8824e9807942671de4dde9c65c716579_tn"
            ]
        },
        {
            id: 4,
            title: "Sticker Dan Trang Tri So De Thuong",
            numSold: 48,
            images: [
                "https://cf.shopee.vn/file/c8b868df63f54c3135863a1df818bde3_tn",
                "https://cf.shopee.vn/file/1c9a4357a6f921411ce139f28e24eca1_tn",
                "https://cf.shopee.vn/file/d2787b8c98200f1f8d62c6736f04d7db_tn"
            ]
        },
        {
            id: 5,
            title: "Tui Dung Com Giu Nhiet",
            numSold: 6,
            images: [
                "https://cf.shopee.vn/file/1c23ccb76031614584cbdd977e31bd7a_tn",
                "https://cf.shopee.vn/file/6d1416daa515aaf1a3c1b6c5fc47e07b_tn",
                "https://cf.shopee.vn/file/d12aab828a40413ccb274521fc55eccd_tn"
            ]
        },
        {
            id: 6,
            title: "Tui Dung Com Giu Nhiet",
            numSold: 6,
            images: [
                "https://cf.shopee.vn/file/362669996dc2f2f98c47cdc37f6da6d3_tn",
                "https://cf.shopee.vn/file/f03a91132ed1fd13bd36e704f4a52b6e_tn",
                "https://cf.shopee.vn/file/8824e9807942671de4dde9c65c716579_tn"
            ]
        }
    ]);

    const [listBrand] = useState([
        {
            id: 1,
            image: "https://cf.shopee.vn/file/f84f0971c5898444983eb5cca6b387a1_tn",
        },
        {
            id: 2,
            image: "https://cf.shopee.vn/file/3d8abcc0870a0a3aeedb8d76f7e67ebc_tn"
        },
        {
            id: 3,
            image: "https://cf.shopee.vn/file/f84f0971c5898444983eb5cca6b387a1_tn",
        },
        {
            id: 4,
            image: "https://cf.shopee.vn/file/3d8abcc0870a0a3aeedb8d76f7e67ebc_tn"
        },
        {
            id: 5,
            image: "https://cf.shopee.vn/file/f84f0971c5898444983eb5cca6b387a1_tn",
        },
        {
            id: 6,
            image: "https://cf.shopee.vn/file/3d8abcc0870a0a3aeedb8d76f7e67ebc_tn"
        },
        {
            id: 7,
            image: "https://cf.shopee.vn/file/f84f0971c5898444983eb5cca6b387a1_tn",
        },
        {
            id: 8,
            image: "https://cf.shopee.vn/file/3d8abcc0870a0a3aeedb8d76f7e67ebc_tn"
        },
        {
            id: 9,
            image: "https://cf.shopee.vn/file/f84f0971c5898444983eb5cca6b387a1_tn",
        },
        {
            id: 10,
            image: "https://cf.shopee.vn/file/3d8abcc0870a0a3aeedb8d76f7e67ebc_tn"
        }
        ,{
            id: 11,
            image: "https://cf.shopee.vn/file/3d8abcc0870a0a3aeedb8d76f7e67ebc_tn"
        }
    ])

    const [listProductCategory] = useState([
        {
            id: 1,
            image: "https://cf.shopee.vn/file/687f3967b7c2fe6a134a2c11894eea4b_tn",
            title: "Thoi trang nam"
        },
        {
            id: 2,
            image: "https://cf.shopee.vn/file/75ea42f9eca124e9cb3cde744c060e4d_tn",
            title: "Thoi trang nu"
        },
        {
            id: 3,
            image: "https://cf.shopee.vn/file/31234a27876fb89cd522d7e3db1ba5ca_tn",
            title: "Dien thoai & phu kien"
        },
        {
            id: 4,
            image: "https://cf.shopee.vn/file/099edde1ab31df35bc255912bab54a5e_tn",
            title: "Me & be"
        }
        ,
        {
            id: 5,
            image: "https://cf.shopee.vn/file/978b9e4cb61c611aaaf58664fae133c5_tn",
            title: "Thiet bi dien tu"
        }
        ,
        {
            id: 6,
            image: "https://cf.shopee.vn/file/24b194a695ea59d384768b7b471d563f_tn",
            title: "nha cua & doi song"
        }
        ,
        {
            id: 7,
            image: "https://cf.shopee.vn/file/c3f3edfaa9f6dafc4825b77d8449999d_tn",
            title: "May tinh & laptop"
        }
        ,
        {
            id: 8,
            image: "https://cf.shopee.vn/file/c765998fda99b2be9eb6e348df29af28_tn",
            title: "lam dep"
        }
        ,
        {
            id: 9,
            image: "https://cf.shopee.vn/file/ec14dd4fc238e676e43be2a911414d4d_tn",
            title: "May anh & may quay phim"
        }
        ,
        {
            id: 10,
            image: "https://cf.shopee.vn/file/bf87b50b463f646bb7fb8a1a606d9ed2_tn",
            title: "Suc khoe"
        }
        ,
        {
            id: 11,
            image: "https://cf.shopee.vn/file/86c294aae72ca1db5f541790f7796260_tn",
            title: "Dong ho"
        }
        ,
        {
            id: 12,
            image: "https://cf.shopee.vn/file/48630b7c76a7b62bc070c9e227097847_tn",
            title: "giay dep nu"
        }
        ,
        {
            id: 13,
            image: "https://cf.shopee.vn/file/74ca517e1fa74dc4d974e5d03c3139de_tn",
            title: "Giay dep nam"
        }
        ,
        {
            id: 14,
            image: "https://cf.shopee.vn/file/fa6ada2555e8e51f369718bbc92ccc52_tn",
            title: "Tui vi nu"
        }
        ,
        {
            id: 15,
            image: "https://cf.shopee.vn/file/7abfbfee3c4844652b4a8245e473d857_tn",
            title: "Thiet bi dien gia dung"
        }
        ,
        {
            id: 16,
            image: "https://cf.shopee.vn/file/8e71245b9659ea72c1b4e737be5cf42e_tn",
            title: "phu kien & trang suc nu"
        }
        ,
        {
            id: 17,
            image: "https://cf.shopee.vn/file/6cb7e633f8b63757463b676bd19a50e4_tn",
            title: "The thao & du lich"
        }
        ,
        {
            id: 18,
            image: "https://cf.shopee.vn/file/c432168ee788f903f1ea024487f2c889_tn",
            title: "Bach hoa online"
        }
        ,
        {
            id: 19,
            image: "https://cf.shopee.vn/file/3fb459e3449905545701b418e8220334_tn",
            title: "O to & xe may & xe dap"
        }
        ,
        {
            id: 20,
            image: "https://cf.shopee.vn/file/36013311815c55d303b0e6c62d6a8139_tn",
            title: "Nha sach online"
        }
        ,
        {
            id: 21,
            image: "https://cf.shopee.vn/file/18fd9d878ad946db2f1bf4e33760c86f_tn",
            title: "Ba lo & tui vi nam"
        }
        ,
        {
            id: 22,
            image: "https://cf.shopee.vn/file/4540f87aa3cbe99db739f9e8dd2cdaf0_tn",
            title: "Thoi trang tre em"
        }
        ,
        {
            id: 23,
            image: "https://cf.shopee.vn/file/ce8f8abc726cafff671d0e5311caa684_tn",
            title: "Do choi"
        }
        ,
        {
            id: 24,
            image: "https://cf.shopee.vn/file/cd8e0d2e6c14c4904058ae20821d0763_tn",
            title: "giat giu & cham soc nha cua"
        }
        ,
        {
            id: 25,
            image: "https://cf.shopee.vn/file/cdf21b1bf4bfff257efe29054ecea1ec_tn",
            title: "Cham soc thu cung"
        }
        ,
        {
            id: 26,
            image: "https://cf.shopee.vn/file/b0f78c3136d2d78d49af71dd1c3f38c1_tn",
            title: "Voucher & dich vu"
        }
    ]);

    const [listSearchTrend] = useState([
        {
            id: 1,
            title: "Goi ke dau giuong",
            image: "https://cf.shopee.vn/file/f373c174eeb70b9d093d26851e984c78",
            number: 94
        },
        {
            id: 2,
            title: "Chan goi van phong",
            image: "https://cf.shopee.vn/file/e9782c26f66a431ab1c1d06c14ca8b49",
            number: 2
        },
        {
            id: 3,
            title: "Quan-dui nu",
            image: "https://cf.shopee.vn/file/9e5899400e49e8b53db493d41410aff7",
            number: 359
        },
        {
            id: 4,
            title: "SOMI Nu",
            image: "https://cf.shopee.vn/file/4122b4ed9be44c32ab8b01bc5df0e20c",
            number: 569
        },
        {
            id: 5,
            title: "Dep Nam",
            image: "https://cf.shopee.vn/file/b20937664f366b79a4c41b7bde49c510",
            number: 2
        }
    ]);

    const [listProduct] = useState([
        {
            id: 1,
            title: "Paper Pouch (The good approach)",
            img: "https://res.cloudinary.com/doem0ysxl/image/upload/v1611851630/BaristaCoffee/shop/prod2_xocw36.jpg",
            price: 24.00,
            discount: 50,
            numOrder: 128
        },
        {
            id: 2,
            title: "Kho heo chay toi dac biet TOKYOLIFE TolyoSelect",
            img: "https://cf.shopee.vn/file/ea9500849bf4d871dae72724fd29ca49_tn",
            price: 24.00,
            discount: 50,
            numOrder: 128
        },
        {
            id: 3,
            title: "Dam ngan tay phong kieu Retro Phap Thiet ke xinh xan kho cuong lai",
            img: "https://cf.shopee.vn/file/6e9402796a259240eee3d318ddc5b879_tn",
            price: 165,
            discount: 25,
            numOrder: 5
        },
        {
            id: 4,
            title: "Vay 2 day babydoll dang suong Korean - V8",
            img: "https://cf.shopee.vn/file/adfe6fdb185fa4a0e05d7899f18a417e_tn",
            price: 69.00,
            discount: 34,
            numOrder: 4300
        },
        {
            id: 5,
            title: "Dam nu dang om Phoi khoa Keo kieu Vintage Thoi Trang So 1",
            img: "https://cf.shopee.vn/file/a5bcdad5e07cd5a7aa17897a07da19b2_tn",
            price: 99.00,
            discount: 18,
            numOrder: 15
        },
        {
            id: 6,
            title: "[Anh that/Tu chup] Vay hoa nhi - Vay hoa nhi Vintage Sieu to",
            img: "https://cf.shopee.vn/file/1115de74f11030de5611528ddfc59a09_tn",
            price: 159.00,
            discount: 36,
            numOrder: 114
        },
        {
            id: 7,
            title: "Tui sach nu mini, deo cheo phoi quai ngoc nhan tao cu chuoi",
            img: "https://cf.shopee.vn/file/8429cf96e9b200b58e74293f0e42263e_tn",
            price: 55.00,
            discount: 56,
            numOrder: 946
        },
        {
            id: 8,
            title: "Quan dui - Short nu kaki Cai Cuc dang A, Quan Coc nu sieu dep",
            img: "https://cf.shopee.vn/file/5d8081f33d2d5994ec5cf145511bc17e_tn",
            price: 82.00,
            discount: 13,
            numOrder: 3
        },
        {
            id: 9,
            title: "Giay da bong",
            img: "https://cf.shopee.vn/file/cfd352c72697bfa056fe09c1bc5df1af_tn",
            price: 39.0,
            numOrder: 504
        },
        {
            id: 10,
            title: "Paper Pouch (The good approach)",
            img: "https://res.cloudinary.com/doem0ysxl/image/upload/v1611851630/BaristaCoffee/shop/prod2_xocw36.jpg",
            price: 24.00,
            discount: 50,
            numOrder: 128
        },
        {
            id: 11,
            title: "Kho heo chay toi dac biet TOKYOLIFE TolyoSelect",
            img: "https://cf.shopee.vn/file/ea9500849bf4d871dae72724fd29ca49_tn",
            price: 24.00,
            discount: 50,
            numOrder: 128
        },
        {
            id: 12,
            title: "Dam ngan tay phong kieu Retro Phap Thiet ke xinh xan kho cuong lai",
            img: "https://cf.shopee.vn/file/6e9402796a259240eee3d318ddc5b879_tn",
            price: 165,
            discount: 25,
            numOrder: 5
        },
        {
            id: 13,
            title: "Vay 2 day babydoll dang suong Korean - V8",
            img: "https://cf.shopee.vn/file/adfe6fdb185fa4a0e05d7899f18a417e_tn",
            price: 69.00,
            discount: 34,
            numOrder: 4300
        },
        {
            id: 14,
            title: "Dam nu dang om Phoi khoa Keo kieu Vintage Thoi Trang So 1",
            img: "https://cf.shopee.vn/file/a5bcdad5e07cd5a7aa17897a07da19b2_tn",
            price: 99.00,
            discount: 18,
            numOrder: 15
        },
        {
            id: 15,
            title: "[Anh that/Tu chup] Vay hoa nhi - Vay hoa nhi Vintage Sieu to",
            img: "https://cf.shopee.vn/file/1115de74f11030de5611528ddfc59a09_tn",
            price: 159.00,
            discount: 36,
            numOrder: 114
        },
        {
            id: 16,
            title: "Tui sach nu mini, deo cheo phoi quai ngoc nhan tao cu chuoi",
            img: "https://cf.shopee.vn/file/8429cf96e9b200b58e74293f0e42263e_tn",
            price: 55.00,
            discount: 56,
            numOrder: 946
        },
        {
            id: 17,
            title: "Quan dui - Short nu kaki Cai Cuc dang A, Quan Coc nu sieu dep",
            img: "https://cf.shopee.vn/file/5d8081f33d2d5994ec5cf145511bc17e_tn",
            price: 82.00,
            discount: 13,
            numOrder: 3
        },
        {
            id: 18,
            title: "Giay da bong",
            img: "https://cf.shopee.vn/file/cfd352c72697bfa056fe09c1bc5df1af_tn",
            price: 39.0,
            numOrder: 504
        },
        {
            id: 19,
            title: "Dam nu dang om Phoi khoa Keo kieu Vintage Thoi Trang So 1",
            img: "https://cf.shopee.vn/file/a5bcdad5e07cd5a7aa17897a07da19b2_tn",
            price: 99.00,
            discount: 18,
            numOrder: 15
        },
        {
            id: 20,
            title: "[Anh that/Tu chup] Vay hoa nhi - Vay hoa nhi Vintage Sieu to",
            img: "https://cf.shopee.vn/file/1115de74f11030de5611528ddfc59a09_tn",
            price: 159.00,
            discount: 36,
            numOrder: 114
        },
        {
            id: 21,
            title: "Tui sach nu mini, deo cheo phoi quai ngoc nhan tao cu chuoi",
            img: "https://cf.shopee.vn/file/8429cf96e9b200b58e74293f0e42263e_tn",
            price: 55.00,
            discount: 56,
            numOrder: 946
        },
        {
            id: 22,
            title: "Quan dui - Short nu kaki Cai Cuc dang A, Quan Coc nu sieu dep",
            img: "https://cf.shopee.vn/file/5d8081f33d2d5994ec5cf145511bc17e_tn",
            price: 82.00,
            discount: 13,
            numOrder: 3
        },
        {
            id: 23,
            title: "Giay da bong",
            img: "https://cf.shopee.vn/file/cfd352c72697bfa056fe09c1bc5df1af_tn",
            price: 39.0,
            numOrder: 504
        },
        {
            id: 24,
            title: "Quan dui - Short nu kaki Cai Cuc dang A, Quan Coc nu sieu dep",
            img: "https://cf.shopee.vn/file/5d8081f33d2d5994ec5cf145511bc17e_tn",
            price: 82.00,
            discount: 13,
            numOrder: 3
        },
    ]);

    const [listMallBanner] = useState([
        {
            id: 1,
            link: "#/",
            image: "https://cf.shopee.vn/file/4f4efc2611559f52003bdec8c8aacc3e"
        },
        {
            id: 2,
            link: "#/",
            image: "https://cf.shopee.vn/file/7cf362b618a87b23e8cb2d54618b9ea7"
        },
        {
            id: 3,
            link: "#/",
            image: "https://cf.shopee.vn/file/dd15a59cae9cc77e395c45504f2c794a"
        },
        {
            id: 4,
            link: "#/",
            image: "https://cf.shopee.vn/file/8d2714f86081ab4942603cb0ccf8188c"
        },
        {
            id: 5,
            link: "#/",
            image: "https://cf.shopee.vn/file/a12a445377d061eee8b17761fdfca51b"
        }  
    ]);

    const [listMallProduct] = useState([
        {
            id: 1,
            title: "Tiec sale van nhiet",
            image: "https://cf.shopee.vn/file/a9d7516451e62493642e952657bb5e23_xhdpi",
            link: "#/"
        },
        {
            id: 2,
            title: "Mua 1 duoc 5",
            image: "https://cf.shopee.vn/file/c474ec0355ee45a0afbe004e9c397e43_xhdpi",
            link: "#/"
        },
        {
            id: 3,
            title: "Giam den 50%",
            image: "https://cf.shopee.vn/file/7d5ddd21cc10e484de60e12d6c58734e_xhdpi",
            link: "#/"
        },
        {
            id: 4,
            title: "Mua 1 duoc 2",
            image: "https://cf.shopee.vn/file/15f744f65785b5e6554aa4ed93304ff1_xhdpi",
            link: "#/"
        },
        {
            id: 5,
            title: "Qua tang ao polo 0d",
            image: "https://cf.shopee.vn/file/8160017f13ba5f4856f45bb310ec3e0a_xhdpi",
            link: "#/"
        },
        {
            id: 6,
            title: "Gam den 35%",
            image: "https://cf.shopee.vn/file/0a3a0dd8a1ece9d0c8586da0c9012071_xhdpi",
            link: "#/"
        },
        {
            id: 7,
            title: "Deal to nhu loc",
            image: "https://cf.shopee.vn/file/592110bba2bf243c2bba27e8d21f7e34_xhdpi",
            link: "#/"
        },
        {
            id: 8,
            title: "Vali sale khung den 50%",
            image: "https://cf.shopee.vn/file/f118c875eb77af284acd354037a07408_xhdpi",
            link: "#/"
        },
        {
            id: 9,
            title: "Mua 1 tang 1",
            image: "https://cf.shopee.vn/file/616257fe44a6732cc4b3be5ce8c566a7_xhdpi",
            link: "#/"
        },
        {
            id: 10,
            title: "Uu dai den 50%",
            image: "https://cf.shopee.vn/file/fa9c764c779b85f6b258f2221e4e4a25_xhdpi",
            link: "#/"
        },
        {
            id: 11,
            title: "Giam den 50%",
            image: "https://cf.shopee.vn/file/364f074e866b51b79609d0a1d7ba2149_xhdpi",
            link: "#/"
        },
        {
            id: 12,
            title: "DHC mua 2 giam 1",
            image: "https://cf.shopee.vn/file/77cb556d0f415c8a022ef9afa5827df0_xhdpi",
            link: "#/"
        },
        {
            id: 13,
            title: "Mua la co qua",
            image: "https://cf.shopee.vn/file/ff8bcb7ff7f3d8d780873b07f387cabb_xhdpi",
            link: "#/"
        },
        {
            id: 14,
            title: "Da khoe sach mun",
            image: "https://cf.shopee.vn/file/c5355c3595e546617d2bebe305893b5f_xhdpi",
            link: "#/"
        },
        {
            id: 15,
            title: "Uu dai den 40%",
            image: "https://cf.shopee.vn/file/ef7770faee7381bcfaac606c2ba59ebc_xhdpi",
            link: "#/"
        },
        {
            id: 18,
            title: "Duong da dich thuc",
            image: "https://cf.shopee.vn/file/dfc76413fb2dc7ff207271d3ca6eb70b_xhdpi",
            link: "#/"
        },
    ]);

    const [listFlashSale] = useState([
        {
            id: 1,
            image: "https://cf.shopee.vn/file/751825ad2c43a2b9609e0936ca23cc62_tn",
            price: 539,
            numOrder: 5,
            numSale: 50,
            link: "#/",
            discount: 40
        },
        {
            id: 2,
            image: "https://cf.shopee.vn/file/904566ca82c7a83bfb4bb313207db8d7_tn",
            price: 539,
            numOrder: 2,
            numSale: 100,
            link: "#/",
            discount: 38
        },
        {
            id: 3,
            image: "https://cf.shopee.vn/file/62d47fd854c272af2f431eaff2430ed5_tn",
            price: 115,
            numOrder: 13,
            numSale: 50,
            link: "#/",
            discount: 28
        },
        {
            id: 4,
            image: "https://cf.shopee.vn/file/26eafd8d728ae505b4faf8bcd216bd93_tn",
            price: 1,
            numOrder: 45,
            numSale: 50,
            link: "#/",
            discount: 40
        },
        {
            id: 5,
            image: "https://cf.shopee.vn/file/84f5f657148a434b700d2109217b0302_tn",
            price: 29,
            numOrder: 29,
            numSale: 50,
            link: "#/",
            discount: 68
        },
        {
            id: 6,
            image: "https://cf.shopee.vn/file/4ffe24459bc98afa38f64f1a35ac78e7_tn",
            price: 142,
            numOrder: 40,
            numSale: 100,
            link: "#/",
            discount: 53
        },
        {
            id: 7,
            image: "https://cf.shopee.vn/file/4503f53b0b1fe3502c3c3e842aa1392f_tn",
            price: 142,
            numOrder: 97,
            numSale: 100,
            link: "#/",
            discount: 96
        }
    ]);
    

    return (

        <div className="page-content">
            {/* Full Banner */}
            <div className = "full-home-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-8 pr-1">
                            <SliderMainBanner items = {listSlideMainBanner}/>
                        </div>
                        <div className="col-4 pl-1">
                            <RightMainBanner items = {listRightMainBanner}/>
                        </div>
                    </div>
                </div>
            </div>
            

            {/* Slider Brand */}
            <section className = "mb-3 slider-brand">
                <div className="pt-3 bg-white container">
                    <Title title = {"Cua hang duoc yeu thich nhat"} link = "#/"/>
                    {/* <SliderBrand items = {listBrand}/> */}
                    <WidgetSliderBrand items = {listBrand}/>
                </div>
            </section>

            {/* Large Banner */}
            <section className = "mb-3 large-banner">
                <div className="container" style = {{height: "110px"}}>
                    <Banner link = "#/" image = "https://cf.shopee.vn/file/9c078b39474a7b12a33c380ab7ccf1d8_xxhdpi"/>
                </div>
            </section>

            {/* Mall */}
            <section className="mb-3 mall">
                <div className="bg-white container">
                    <Mall listMallBanner = {listMallBanner} listProduct = {listMallProduct}/>
                </div>
            </section>
            


            {/* Slider ProductCategory */}         
            <section className = "mb-3 slider-product-category">
                <div className="pt-3 bg-white container">
                    <Title title = {"Danh Muc San Pham"}/>
                    <SliderProductCategory items = {listProductCategory}/>
                </div>
            </section>

            {/* Flash Sale */}
            <section className="flash-sale">
                <div className="bg-white container">
                    <FlashSale items = {listFlashSale}/>
                </div>
            </section>



            {/* Banner */}
            <section className = "banner">
                <div className="py-3 container">
                    <Banner listBanner = {listBanner}/>
                </div>
            </section>
            
            {/* Top Search */}
            <section className="top-search">
                <div className="bg-white container">
                    <Title title = {"Tim kiem hang dau "} link = "/top-products"/>
                    <SliderTopSearch items = {listTopSearch}/>
                </div>
            </section>
           
           {/* Search Trend */}
            <section className = "mb-5 search-trend">
                <div className="pt-3 bg-white container">
                    <Title title = {"Xu Huong tim kien hang dau"} link = "#/"/>

                    <SearchTrend items = {listSearchTrend}/>
                </div>
            </section>

            {/* Product Hint */}
            <section className="product-hint">
                <div className="bg-white container">
                    <ProductHint items = {listProduct}/>
                </div>
            </section>
        </div>
            
    );
}

export default HomePage;