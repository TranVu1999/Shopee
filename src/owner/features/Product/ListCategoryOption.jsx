import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Theme
import {BorderColor} from './../../theme';
import { useEffect } from 'react';

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

const Button = styled.button`
    padding: .5rem 1.5rem;

    color: #fff;
    background-color: #ee4d2d;
    border-radius: 4px;
    
`;

ListCategoryOption.propTypes = {
    categories: PropTypes.array.isRequired,
    getProductCategory: PropTypes.func.isRequired,
};

function ListCategoryOption({categories, getProductCategory}) {
    // Data
    const listCategory = [
        {
            title: "Thời Trang Nữ",
            subList: [
                {
                    title: "Áo",
                    subList: [
                        {
                            title: "Áo hai dây và ba lỗ",
                            subList: []
                        },
                        {
                            title: "Áo ống",
                            subList: []
                        },
                        {
                            title: "Áo thun",
                            subList: []
                        },
                        {
                            title: "Áo sơ mi",
                            subList: []
                        },
                        {
                            title: "Áo polo",
                            subList: []
                        },
                        {
                            title: "Áo liền thân",
                            subList: []
                        },
                        {
                            title: "Khác",
                            subList: []
                        } 
                    ]
                },
                {
                    title: "Quần",
                    subList: [
                        {
                            title: "Quần legging",
                            subList: []
                        },
                        {
                            title: "Quần dài",
                            subList: []
                        },
                        {
                            title: "Khác",
                            subList: []
                        }
                    ]
                },
                {
                    title: "Quần đùi",
                    subList: [
                        {
                            title: "Quần đùi",
                            subList: []
                        },
                        {
                            title: "Quần váy",
                            subList: []
                        },
                        {
                            title: "Khác",
                            subList: []
                        }
                    ]
                },
                {
                    title: "Váy",
                    subList: []
                },
                {
                    title: "Quần jeans",
                    subList: []
                },
                {
                    title: "Váy cưới",
                    subList: []
                },
                {
                    title: "Đồ liền thân",
                    subList: [
                        {
                            title: "Đồ bay (Jumpsuits)",
                            subList: []
                        },
                        {
                            title: "Đồ bay ngắn (playsuits)",
                            subList: []
                        },
                        {
                            title: "Quần yếm",
                            subList: []
                        },
                        {
                            title: "Khác",
                            subList: []
                        }
                    ]
                },
                {
                    title: "Áo khoác",
                    subList: [
                        {
                            title: "Áo khoác mùa đông ",
                            subList: []
                        },
                        {
                            title: "Áo choàng ",
                            subList: []
                        },
                        {
                            title: "Áo blazer",
                            subList: []
                        },
                        {
                            title: "Áo khoác ngoài ",
                            subList: []
                        },
                        {
                            title: "Áo vest",
                            subList: []
                        },
                        {
                            title: "Khác",
                            subList: []
                        }
                    ]
                },
                {
                    title: "Áo len",
                    subList: []
                },
                {
                    title: "Hoodie và Áo nỉ ",
                    subList: [
                        {
                            title: "Áo khoác nỉ ",
                            subList: []
                        },
                        {
                            title: "Áo hoodies",
                            subList: []
                        },
                        {
                            title: "Khác",
                            subList: []
                        }
                    ]
                },
                {
                    title: "Bộ",
                    subList: [
                        {
                            title: "Bộ đồ đôi ",
                            subList: []
                        },
                        {
                            title: "Bộ đồ gia đình ",
                            subList: []
                        },
                        {
                            title: "Đồ lẻ ",
                            subList: []
                        },
                        {
                            title: "Khác",
                            subList: []
                        }
                    ]
                },
                {
                    title: "Đồ lót ",
                    subList: [
                        {
                            title: "Bộ đồ lót ",
                            subList: []
                        },
                        {
                            title: "Áo ngực ",
                            subList: []
                        },
                        {
                            title: "Quần lót ",
                            subList: []
                        },
                        {
                            title: "Đồ lót giữ nhiệt ",
                            subList: []
                        },
                        {
                            title: "Phụ kiện đồ lót ",
                            subList: [
                                {
                                    title: "Dây áo lót ",
                                    subList: []
                                },
                                {
                                    title: "Miếng mút rời ",
                                    subList: []
                                },
                                {
                                    title: "Miếng dán ngực ",
                                    subList: []
                                },
                                {
                                    title: "Khác",
                                    subList: []
                                }
                            ]
                        },
                        {
                            title: "Đồ định hình ",
                            subList: []
                        },
                        {
                            title: "Đồ lót bảo hộ",
                            subList: []
                        },
                        {
                            title: "Đồ lót gợi cảm ",
                            subList: []
                        },
                        {
                            title: "Khác",
                            subList: []
                        }
                    ]
                },
                {
                    title: "Đồ ngủ ",
                    subList: [
                        {
                            title: "Pyjama ",
                            subList: []
                        },
                        {
                            title: "Váy ngủ ",
                            subList: []
                        },
                        {
                            title: "Áo choàng ngủ, Áo khoác kimono ",
                            subList: []
                        },
                        {
                            title: "Khác",
                            subList: []
                        }
                    ]
                },
                {
                    title: "Đồ Bầu ",
                    subList: [
                        {
                            title: "Áo ngực cho con bú ",
                            subList: []
                        },
                        {
                            title: "Đầm bầu ",
                            subList: []
                        },
                        {
                            title: "Áo bầu ",
                            subList: []
                        },
                        {
                            title: "Đồ mặc cho con bú ",
                            subList: []
                        },
                        {
                            title: "Bộ đồ bầu ",
                            subList: []
                        },
                        {
                            title: "Quần bầu, Váy bầu",
                            subList: []
                        },
                        {
                            title: "Khác",
                            subList: []
                        }
                    ]
                },
                {
                    title: "Đồ truyền thống ",
                    subList: [
                        {
                            title: "Áo ",
                            subList: []
                        },
                        {
                            title: "Quần và chân váy ",
                            subList: []
                        },
                        {
                            title: "Bộ ",
                            subList: []
                        },
                        {
                            title: "Đầm ",
                            subList: []
                        },
                        {
                            title: "Khác",
                            subList: []
                        }
                    ]
                },
                {
                    title: "Đồ hóa trang",
                    subList: []
                },
                {
                    title: "Vải ",
                    subList: [
                        {
                            title: "Vải cotton",
                            subList: []
                        },
                        {
                            title: "Vải len ",
                            subList: []
                        },
                        {
                            title: "Vải nhung, lụa, satin ",
                            subList: []
                        },
                        {
                            title: "Vải da ",
                            subList: []
                        },
                        {
                            title: "Vải nylon",
                            subList: []
                        },
                        {
                            title: "Vải denim ",
                            subList: []
                        },
                        {
                            title: "Vải canvas ",
                            subList: []
                        },
                        {
                            title: "Khác",
                            subList: []
                        },
                    ]
                },
                {
                    title: "Vớ/ Tất ",
                    subList: [
                        {
                            title: "Tất ",
                            subList: []
                        },
                        {
                            title: "Quần tất ",
                            subList: []
                        },
                        {
                            title: "Khác",
                            subList: []
                        },
                    ]
                },
            ]
        },
        {
            title: "Thời Trang Nam",
            subList: [
                {
                    title: "Quần jean ",
                    subList: []
                },
                {
                    title: "Hoodie & Áo nỉ ",
                    subList: [
                        {
                            title: "Áo hoodie ",
                            subList: []
                        },
                        {
                            title: "Áo nỉ ",
                            subList: []
                        },
                        {
                            title: "Khác ",
                            subList: []
                        },
                    ]
                },
                {
                    title: "Áo len ",
                    subList: []
                },
                {
                    title: "Áo khoác ",
                    subList: [
                        {
                            title: "Áo khoác mùa đông & Áo choàng ",
                            subList: []
                        },
                        {
                            title: "Áo khoác",
                            subList: []
                        },
                        {
                            title: "Áo khoác vest",
                            subList: []
                        },
                        {
                            title: "Khác ",
                            subList: []
                        },
                    ]
                },
                {
                    title: "Com lê ",
                    subList: [
                        {
                            title: "Bộ Com lê ",
                            subList: []
                        },
                        {
                            title: "Áo Khoác & Blazer ",
                            subList: []
                        },
                        {
                            title: "Quần âu ",
                            subList: []
                        },
                        {
                            title: "Áo vest & Gi lê ",
                            subList: []
                        },
                        {
                            title: "Khác ",
                            subList: []
                        },                        
                    ]
                },
                {
                    title: "Quần dài ",
                    subList: [
                        {
                            title: "Quần túi hộp ",
                            subList: []
                        },
                        {
                            title: "Quần jogger ",
                            subList: []
                        },
                        {
                            title: "Quần dài ",
                            subList: []
                        },
                        {
                            title: "Khác ",
                            subList: []
                        },  
                    ]
                },
                {
                    title: "Quần đùi",
                    subList: []
                },
                {
                    title: "Áo ",
                    subList: [
                        {
                            title: "Áo sơ mi",
                            subList: []
                        },
                        {
                            title: "Áo polo ",
                            subList: []
                        },
                        {
                            title: "Áo thun",
                            subList: []
                        },
                        {
                            title: "Áo ba lỗ ",
                            subList: []
                        },
                        {
                            title: "Khác",
                            subList: []
                        }, 
                    ]
                },
                {
                    title: "Đồ lót ",
                    subList: [
                        {
                            title: "Quần lót ",
                            subList: []
                        },
                        {
                            title: "Áo lót ",
                            subList: []
                        },
                        {
                            title: "Đồ lót giữ nhiệt ",
                            subList: []
                        },
                        {
                            title: "Khác",
                            subList: []
                        },
                    ]
                },
                {
                    title: "Đồ ngủ",
                    subList: []
                }, 
                {
                    title: "Bộ ",
                    subList: []
                }, 
                {
                    title: "Trang phục truyền thống",
                    subList: [
                        {
                            title: "Áo ",
                            subList: []
                        }, 
                        {
                            title: "Quần ",
                            subList: []
                        }, 
                        {
                            title: "Bộ ",
                            subList: []
                        }, 
                        {
                            title: "Khác ",
                            subList: []
                        }, 
                    ]
                }, 
                {
                    title: "Đồ hóa trang ",
                    subList: []
                }, 
                {
                    title: "Trang phục ngành nghề ",
                    subList: []
                }, 
                {
                    title: "Khác ",
                    subList: []
                }, 
                {
                    title: "Vớ/ Tất ",
                    subList: []
                },    
            ]
        },
        {
            title: "Sắc Đẹp ",
            subList: [
                {
                    title: "Chăm sóc tay, chân & móng ",
                    subList: [
                        {
                            title: "Chăm sóc tay",
                            subList: [
                                {
                                    title: "Mặt nạ cho tay ",
                                    subList: []
                                },
                                {
                                    title: "Kem dưỡng, dầu dưỡng & sữa dưỡng ",
                                    subList: []
                                },
                                {
                                    title: "Xà phòng rửa tay ",
                                    subList: []
                                },
                                {
                                    title: "Khác ",
                                    subList: []
                                },
                            ]
                        },
                        {
                            title: "Chăm sóc chân ",
                            subList: [
                                {
                                    title: "Khử mùi hôi chân ",
                                    subList: []
                                },
                                {
                                    title: "Mặt nạ cho chân ",
                                    subList: []
                                },
                                {
                                    title: "Kem dưỡng, dầu dưỡng & sữa dưỡng ",
                                    subList: []
                                },
                                {
                                    title: "Khác ",
                                    subList: []
                                },
                            ]
                        },
                        {
                            title: "Chăm sóc móng ",
                            subList: [
                                {
                                    title: "Sơn nền & sơn bóng ",
                                    subList: []
                                },
                                {
                                    title: "Sơn móng ",
                                    subList: []
                                },
                                {
                                    title: "Dụng cụ tẩy sơn móng ",
                                    subList: []
                                },
                                {
                                    title: "Dưỡng móng ",
                                    subList: []
                                },
                                {
                                    title: "Móng giả ",
                                    subList: []
                                },
                                {
                                    title: "Hình dán móng ",
                                    subList: []
                                },
                                {
                                    title: "Dụng cụ & thiết bị làm móng ",
                                    subList: []
                                },
                                {
                                    title: "Khác ",
                                    subList: []
                                },
                            ]
                        },
                    ]
                },
            ]
        },
    ]

    const [indexActive, setIndexActive] = React.useState([-1, -1, -1, -1, -1]);

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
                getProductCategory(getCategory());
            }else if(getProductCategory){
                getProductCategory([]);
            }
        }
        
    }, [indexActive]);


    // handle event
    const handleChoseCategory = (index, level) =>{

        let tempIndexActive = [...indexActive];
        tempIndexActive[level] = index;

        let length = indexActive.length;
        for(let i = level + 1; i < length; i++){
            tempIndexActive[i] = -1;
        }
        setIndexActive(tempIndexActive);
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
        let elmWidget = (<ListCategory>
            {
                listCategory.map((category, index) =>{
                    let lengthSub = category.subCategories.length;
                    return (
                        <div 
                            key = {category._id}
                            onClick = {() => handleChoseCategory(index, level)}
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
                    {renderListCategory(categories, 0)}
                    {renderListLevel()}
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