import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

//Components
import TabBox from '../components/TabBox';
import ListQuestion from './../features/DataCenter/ListQuestion';

// Theme
import {BorderColor} from '../theme';

const WidgetContent = styled.div`
    margin: 4rem 0 0;

    section{
        width: 79rem;
        margin: 1rem auto;
    }
`;

const WidgetTabBox = styled.div`
    background-color: #fff;
    border-bottom: 1px solid ${BorderColor.mainColor};

    &>div{
        width: 79rem;
        margin: 0 auto;
    }
`;

const WidgetSection = styled.section`
`;

const WidgetLeft = styled.div`
    flex: 1;
`;

const WidgetRight = styled.div`
    width: 24rem;
    margin-left: 1rem;
    height: 10rem;
    background-color: #fff;
`;

const WidgetHeader = styled.div``;



DataCenterLearn.propTypes = {
    
};

function DataCenterLearn(props) {
    // Data
    const [tab, setTab] = React.useState({
        indexActive: 0,
        listTab: [
            "Tổng quan",
            "Truy cập",
            "Sản phẩm",
            "Doanh thu",
            "Marketing",
            "Chat",
            "Quân Sư Bán Hàng",
            "Góc học tập",
        ]
    });
    const [listQuestion] = React.useState([
        {
            id: 1,
            title: "Các chỉ số trong Phân tích bán hàng có nghĩa là gì ?",
            description: "Vui lòng xem chi tiết trên Trung tâm hỗ trợ Người bán"
        },
        {
            id: 2,
            title: "Các số liệu trong Phân tích bán hàng được cập nhật bao lâu 1 lần?",
            description: "Các chỉ số trong mục Theo dõi trực tiếp được cập nhật sau mỗi 30 giây. Các chỉ số trong mục Chat và Sản phẩm > Dự báo được cập nhật lúc 9h sáng mỗi ngày. Các chỉ số khác được cập nhật mỗi giờ. "
        },
        {
            id: 3,
            title: "Tại sao Doanh thu trong Phân tích bán hàng không giống với Doanh thu trong mục Tài chính ?",
            description: "Doanh thu trong Phân tích bán hàng được tính trên giá trị sản phẩm Người mua phải trả sau khi đã áp dụng mã giảm giá hoặc Shopee Xu. Doanh thu trong mục Tài chính được tính trên tổng số tiền Người bán nhận được, bao gồm cả phần phí nhận được từ mã giảm giá hoặc Shopee Xu. "
        },
        {
            id: 4,
            title: "Tại sao Tỷ lệ chuyển đổi vượt quá 100% ?",
            description: "Tỷ lệ chuyển đổi phụ thuộc vào yếu tố thời gian. Ví dụ: Đơn hàng được đặt lúc 10h, nhưng được thanh toán thành công lúc 15h > tỷ lệ chuyển đổi có thể vượt quá 100%. "
        },
        {
            id: 5,
            title: "Làm thế nào để xem số liệu phân tích của tất cả sản phẩm trong Shop tôi ?",
            description: "Bạn có thể bấm “Tải dữ liệu” xuất báo cáo cho 1000 sản phẩm theo khung thời gian tự chọn. "
        },
        {
            id: 6,
            title: "Xem phân tích số liệu theo từng phân loại sản phẩm như thế nào ?",
            description: "Bạn chưa thể xem được loại phân tích này ở thời điểm hiện tại. Tính năng sẽ được cập nhật sớm nhất có thể. "
        },
        {
            id: 7,
            title: "Đơn hàng từ livestream phân bổ như thế nào?",
            description: " Đơn hàng trực tiếp là đơn hàng từ livestream được thanh toán trong vòng 7 ngày, bao gồm các sản phẩm được thêm vào giỏ hàng khi xem trực tiếp livestream hoặc phần xem lại. Đơn hàng gián tiếp là tất cả đơn hàng khác từ người xem trong vòng 24 giờ tính từ lúc bắt đầu buổi livestream. "
        },
        {
            id: 8,
            title: "Tại sao Tỉ lệ phản hồi Chat của tôi trong Phân tích bán hàng không giống như trong bảng Hiệu quả hoạt động ?",
            description: " Tỷ lệ phản hồi Chat trong Phân tích bán hàng được tính trên tổng phản hồi Chat của bạn tới Người mua cả trong thời gian Shop bật Chế độ tạm nghỉ.Tỷ lệ phản hồi Chat trong bảng Hiệu quả hoạt động được tính trên tổng trung bình các phản hồi Chat và trả giá của bạn tới Người mua trong vòng 90 ngày, không tính thời gian Shop bật chế độ tạm nghỉ. "
        },
        {
            id: 9,
            title: "Quân sư bán hàng hỗ trợ bạn những gì?",
            description: "Quân sư bán hàng sẽ giúp bạn xác định các cơ hội bán hàng mới và cách tối ưu hóa sản phẩm đăng bán. "
        }
    ]);

    // handle event
    const handleChoseTab = indexActive =>{
        if(indexActive === tab.indexActive) return;
        setTab({...tab, indexActive});
    }

    return (
        <WidgetContent>
            <WidgetTabBox>
                <div>
                    <TabBox 
                        listTab={tab.listTab} 
                        indexActive={tab.indexActive}
                        handleChoseTab = {handleChoseTab}
                    />
                </div>
            </WidgetTabBox>

            <WidgetSection className="d-flex">
                <WidgetLeft>
                    <ListQuestion listQuestion={listQuestion}/>
                </WidgetLeft>

                <WidgetRight>

                </WidgetRight>
            </WidgetSection>
            
        </WidgetContent>
    );
}

export default DataCenterLearn;