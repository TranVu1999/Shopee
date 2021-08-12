import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import SwitchBox from './../../components/SwitchBox';


const WidgetNotify = styled.div`
    padding: 1.1235rem 1.5rem;
    margin-top: .5rem;
    margin-left: 3rem;

    font-size: .875rem;
    background-color: #f6f6f6;
    border-radius: 4px;

    a{
        color: #2673dd;
        span{
            font-size: 1.25rem;
            color: #2673dd;
            
        }
    }
`;

ShopBasic.propTypes = {
    
};

function ShopBasic(props) {
    return (
        <div className="owner-setting-shop__widget-list-setup">
            <div className="d-flex align-items-center flex-wrap owner-setting-shop__widget-row">
                <div className="owner-setting-shop__widget-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8.165 0c.062 0 .123.016.17.056l.324.24c.293.2 1.205.788 2.481 1.312a9.43 9.43 0 0 0 3.022.656l.376.008c.162 0 .285.128.285.288v5.472C14.83 11.416 10.495 15 8.165 15S1.5 11.416 1.5 8.024V2.552c0-.16.13-.28.284-.288l.512-.014a9.548 9.548 0 0 0 2.886-.65C6.751.96 7.758.224 7.765.216l.223-.16A.29.29 0 0 1 8.165 0zm-.009 1.168c-.543.371-1.584.945-2.596 1.358-1.12.456-2.285.672-3.06.72v4.778C2.5 10.565 6.078 14 8.165 14s5.664-3.433 5.658-5.968v-4.78a10.231 10.231 0 0 1-3.062-.719c-1.013-.415-2.064-.995-2.605-1.365zm3.172 4.478a.5.5 0 0 1 .058.638l-.058.07-3.535 3.535a.499.499 0 0 1-.146.101l-.062.024-.062.015a.504.504 0 0 1-.2-.007l-.094-.033-.04-.02-.059-.04-.022-.02-1.965-1.998a.5.5 0 0 1 .645-.76l.069.06 1.585 1.613 3.18-3.178a.5.5 0 0 1 .706 0z"></path></svg>
                </div>

                <div className="flex-fill d-flex justify-content-between align-items-center owner-setting-shop__widget-text">
                    <div>
                        <p>Bảo vệ tài khoản của bạn ngay bây giờ bằng cách xác minh hoạt động đáng ngờ</p>
                        <span>Trong trường hợp hoạt động có rủi ro cao, hãy xác minh hoạt động với OTP</span>
                    </div>

                    <div>
                        <SwitchBox/>
                    </div>
                </div>
                <div className="line"></div>
            </div>

            <div className="d-flex align-items-center flex-wrap owner-setting-shop__widget-row">
                
                <div className="owner-setting-shop__widget-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M9 1c.34 0 .551-.012 1 .07.448.084.448.628.003.927C8.745 2.843 8 4.363 8 6a5 5 0 0 0 5 5c.567 0 1.103-.125 1.619-.268.528-.146.643.439.392.857A7 7 0 1 1 9 1zm-.491 1.02l-.177.017a6 6 0 1 0 4.962 10.155l.198-.214-.185.014L13 12a6 6 0 0 1-4.517-9.95l.026-.03z"></path></svg>
                </div>

                <div className="flex-fill d-flex justify-content-between align-items-center owner-setting-shop__widget-text">
                    <div>
                        <p>Chế độ Tạm nghỉ</p>
                        <span>Kích hoạt Chế độ Tạm nghỉ để ngăn khách hàng đặt đơn hàng mới. Những đơn hàng đang tiến hành vẫn phải được xử lý.</span>
                    </div>
                    <SwitchBox/>
                </div>

                <WidgetNotify className="flex-fill d-flex justify-content-between align-items-center ">
                    <span>Trả lời tự động: "Hello my friend!! Are you ok? "</span>

                    <a href="#/" className="d-flex align-items-center">
                        Thiết lập ngay
                        <span aria-hidden="true" className="arrow_carrot-right"></span>
                    </a>
                </WidgetNotify>
            </div>

        </div>

    );
}

export default ShopBasic;