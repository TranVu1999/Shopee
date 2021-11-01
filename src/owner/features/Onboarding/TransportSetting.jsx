import React from 'react';
import styled from 'styled-components';

// Components
import TitleContent from '../../components/TitleContent';
import ChoseTransport from './../Transport/ChoseTransport';


const WidgetButton = styled.div`
    padding: 1rem 0;
    justify-content: flex-end;
    gap: .875rem;
    border-top: 1px solid #e5e5e5;

    .btn {
        min-width: 5rem;
        font-size: .875rem;
        border: 1px solid #e5e5e5;
    }

    .btn-save {
        min-width: 6rem;
        border-color: #ee4d2d;
        background-color: #ee4d2d;
        color: #fff;
    }

`;


function TransportSetting() {
    // Data
    const [listTransport] = React.useState([
        {
            id: 1,
            brand: "BEST Express",
            isChose: false,
            description: [
                {
                    key: "Khối lượng tối đa",
                    value: "120kg/đơn hàng "
                },
                {
                    key: "Kích thước tối đa",
                    value: "180*80*80(cm) (Tương ứng: Dài*rộng*cao)"
                },
                {
                    key: "Giá trị đơn hàng tối đa",
                    value: "30 triệu đồng"
                },
                {
                    key: "Thời gian hoạt động",
                    value: "Thứ Hai-Thứ Bảy"
                },
                {
                    key: "Hỗ trợ",
                    value: "1900 1031"
                }
            ]
        },
        {
            id: 3,
            brand: "Giao Hàng Nhanh",
            isChose: false,
            description: [
                {
                    key: "Khối lượng tối đa",
                    value: "100kg/đơn hàng "
                },
                {
                    key: "Kích thước tối đa",
                    value: "mỗi chiều không quá 200cm"
                },
                {
                    key: "Giá trị đơn hàng tối đa",
                    value: "20 triệu đồng"
                },
                {
                    key: "Lưu ý",
                    value: "Không vận chuyển đồ uống và thực phẩm tươi"
                },
                {
                    key: "Hỗ trợ",
                    value: "1800 6328"
                }
            ]
        },
        {
            id: 4,
            brand: "Giao Hàng Tiết Kiệm ",
            isChose: false,
            description: [
                {
                    key: "Khối lượng tối đa",
                    value: "20kg/đơn hàng"
                },
                {
                    key: "Kích thước tối đa",
                    value: "Mỗi chiều không quá 100cm"
                },
                {
                    key: "Giá trị đơn hàng tối đa",
                    value: "30 triệu đồng"
                },
                {
                    key: "Lưu ý",
                    value: "Không vận chuyển đồ uống và thực phẩm tươi"
                },
                {
                    key: "Hỗ trợ",
                    value: "1800 6092"
                }
            ]
        },
        {
            id: 5,
            brand: "NowShip",
            isChose: false,
            description: [
                {
                    key: "Khối lượng tối đa",
                    value: "30kg/đơn hàng, kích thước mỗi chiều không quá 60cm'"
                },
                {
                    key: "Giá trị đơn hàng tối đa",
                    value: "30 triệu đồng"
                },
                {
                    key: "Thời gian hoạt động",
                    value: "Thứ Hai-Chủ Nhật"
                },
                {
                    key: "Lưu ý",
                    value: "vui lòng xác định vị trí lấy hàng trên bản đồ khi bật kênh vận chuyển này"
                }
            ]
        },
        {
            id: 6,
            brand: "Ninja Van",
            isChose: false,
            description: [
                {
                    key: "Khối lượng tối đa",
                    value: "100kg/đơn hàng "
                },
                {
                    key: "Kích thước tối đa",
                    value: "Mỗi chiều không quá 150cm"
                },
                {
                    key: "Giá trị đơn hàng tối đa",
                    value: "50 triệu đồng"
                },
                {
                    key: "Thời gian hoạt động",
                    value: "Thứ Hai-Chủ Nhật"
                },
                {
                    key: "Hỗ trợ",
                    value: "1900 988 928"
                }
            ]
        },
        {
            id: 7,
            brand: "VNPost Nhanh ",
            isChose: false,
            description: [
                {
                    key: "Cân nặng tối đa",
                    value: "200kg/đơn hàng"
                },
                {
                    key: "Giá trị đơn hàng tối đa",
                    value: "100 triệu đồng"
                },
                {
                    key: "Lưu ý",
                    value: "Không vận chuyển đồ uống và thực phẩm tươi"
                },
                {
                    key: "Hỗ trợ",
                    value: "1900 54 54 81"
                }
            ]
        },
        {
            id: 8,
            brand: "VNPost Tiết Kiệm ",
            isChose: false,
            description: [
                {
                    key: "Cân nặng tối đa",
                    value: "200kg/đơn hàng"
                },
                {
                    key: "Giá trị đơn hàng tối đa",
                    value: "100 triệu đồng"
                },
                {
                    key: "Lưu ý",
                    value: "Không vận chuyển đồ uống và thực phẩm tươi"
                },
                {
                    key: "Hỗ trợ",
                    value: "1900 54 54 81"
                }
            ]
        },
        {
            id: 9,
            brand: "J&T Express ",
            isChose: false,
            description: [
                {
                    key: "Khối lượng tối đa",
                    value: "70kg/đơn hàng, kích thước mỗi chiều không quá 140cm"
                },
                {
                    key: "Giá trị đơn hàng tối đa",
                    value: "50 triệu đồng"
                },
                {
                    key: "Thời gian hoạt động",
                    value: "Thứ Hai-Chủ Nhật"
                },
                {
                    key: "Hỗ trợ",
                    value: "19001088"
                }
            ]
        },
        {
            id: 10,
            brand: "GrabExpress",
            isChose: false,
            description: [
                {
                    key: "Khối lượng tối đa",
                    value: "30kg/đơn hàng, kích thước mỗi chiều không quá 60cm"
                },
                {
                    key: "Giá trị đơn hàng tối đa",
                    value: "10 triệu đồng"
                },
                {
                    key: "Thời gian hoạt động",
                    value: "Thứ Hai-Chủ Nhật (24hrs)"
                },
                {
                    key: "Lưu ý",
                    value: "vui lòng xác định vị trí lấy hàng trên bản đồ khi bật kênh vận chuyển này"
                }
            ]
        }
    ]);

    return (
        <section>
            <ChoseTransport listTransport = {listTransport}/>

            <WidgetButton className = "d-flex align-items-center">
                <div className = "btn">Lưu</div>
                <button className = "btn btn-save">Tiếp theo</button>
            </WidgetButton>
        </section>
    );
}

export default TransportSetting;