import React from 'react';
import styled from 'styled-components';

const WidgetContainer = styled.footer`

`;

function Footer(props) {
    return (
        <WidgetContainer className="footer">
            <div className="footer--top">
                <div className="container">
                    <div className="d-flex footer__menu">
                        <div className="footer__widget">
                            <h5>Chăm sóc khách hàng</h5>
                            <ul className="menu-link">
                                <li><a href="/#">Trung Tâm Trợ Giúp</a></li>
                                <li><a href="/#">Shopee blog</a></li>
                                <li><a href="/#">Shopee Mall</a></li>
                                <li><a href="/#">Hướng dẫn mua hàng</a></li>
                                <li><a href="/#">Hướng dẫn bán hàng</a></li>
                                <li><a href="/#">Thanh Toán</a></li>
                                <li><a href="/#">Shopee Xu</a></li>
                                <li><a href="/#">Vận chuyển</a></li>
                                <li><a href="/#">Trả hàng & Hoàn tiền</a></li>
                                <li><a href="/#">Chăm sóc khách hàng</a></li>
                                <li><a href="/#">Chính sách bảo hành</a></li>
                            </ul>
                        </div>
                        <div className="footer__widget">
                            <h5>Về Shopee</h5>
                            <ul className="menu-link">
                                <li><a href="/#">Giới thiệu về shopee Việt Nam</a></li>
                                <li><a href="/#">Tuyển dụng</a></li>
                                <li><a href="/#">Điều khoản shopee</a></li>
                                <li><a href="/#">Chính sách bảo mật</a></li>
                                <li><a href="/#">Chính Hãng</a></li>
                                <li><a href="/#">Kênh người bán</a></li>
                                <li><a href="/#">Flash Sales</a></li>
                                <li><a href="/#">Chương trình liên kết shopee</a></li>
                                <li><a href="/#">Liên hệ truyền thông</a></li>
                            </ul>
                        </div>
                        <div className="footer__widget">
                            <h5>Thanh Toán</h5>
                            <ul className="d-flex menu-paypal">
                                <li><div className="footer__background footer-visa-png"/></li>
                                <li><div className="footer__background footer-mastercard-png"/></li>
                                <li><div className="footer__background footer-jcb-png"/></li>
                                <li><div className="footer__background footer-amex-png"/></li>
                                <li><div className="footer__background footer-cod-png"/></li>
                                <li><div className="footer__background footer-vn-install-png"/></li>
                                <li><div className="footer__background footer-shopeepay-png"/></li>
                            </ul>

                            <h5>Đơn vị vận chuyển</h5>
                            <ul className="d-flex menu-delivery">
                                <li><div className="footer__background footer-shopee-express-png"/></li>
                                <li><div className="footer__background footer-ghtk-png"/></li>
                                <li><div className="footer__background footer-ghn-png"/></li>
                                <li><div className="footer__background footer-viettel-png"/></li>
                                <li><div className="footer__background footer-vnpost-png"/></li>
                                <li><div className="footer__background footer-jnt-png"/></li>
                                <li><div className="footer__background footer-grab-express-png"/></li>
                                <li><div className="footer__background footer-ninja-van-png"/></li>
                                <li><div className="footer__background footer-best-express-png"/></li>
                            </ul>
                        </div>
                        <div className="footer__widget">

                            <h5>Theo dõi chúng tôi trên</h5>
                            <ul className="menu-chanel">
                                <li>
                                    <a href="#/"><div className="footer__background footer-f-png"/>Facebook</a>
                                </li>
                                <li>
                                    <a href="#/"><div className="footer__background footer-ins-png"/>Instagram</a>
                                </li>
                                <li>
                                    <a href="#/"><div className="footer__background footer-lin-png"/>LinkedIn</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__widget">

                            <h5>Tải ứng dụng Shopee Ngay thôi</h5>
                            <a href="#/" className="d-flex app-box">
                                <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/d91264e165ed6facc6178994d5afae79.png" alt="download_qr_code"/>
                                <div class="tnOn1x">
                                    <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/39f189e19764dab688d3850742f13718.png" alt="App Store"/>
                                    <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/f4f5426ce757aea491dce94201560583.png" alt="Play Store"/>
                                    <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/1ae215920a31f2fc75b00d4ee9ae8551.png" alt="App Gallery"/>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="d-flex justify-content-between  footer__copyright">
                        <p>© 2021 Shopee. Tất cả các quyền được bảo lưu.</p>
                        <div>
                            <span>Quốc gia & Khu vực</span>
                            <ul>
                                <li><a href="#/">Việt Nam</a></li>
                                <li><a href="#/">Thái Lan</a></li>
                                <li><a href="#/">Singapore</a></li>
                                <li><a href="#/">Đài Loan</a></li>
                                <li><a href="#/">Spain</a></li>
                                <li><a href="#/">Indonesia</a></li>
                                <li><a href="#/">Malaysia</a></li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="footer--bottom">
                <div className="container">
                    <div className="footer__policy">
                        <ul className="text-center">
                            <li><a href="#/">Chính sách bảo mật</a></li>
                            <li><a href="#/">Quy chế hoạt động</a></li>
                            <li><a href="#/">Chính sách vận chuyển</a></li>
                            <li><a href="#/">Chính sách trả hàng và hoàn tiền</a></li>
                        </ul>
                    </div>

                    <div className="footer__register">
                        <div className="footer__background footer-vn-registered-png"></div>
                        <div className="footer__background footer-vn-registered-png"></div>
                        <div className="footer__background footer-no-fake-png"></div>
                    </div>
                    <p className="text-center">Công ty TNHH Shopee</p>
                    <div className="text-center footer__address">
                        <p>Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai, Phường Ngọc Khánh, Quận Ba Đình, Thành phố Hà Nội, Việt Nam. Tổng đài hỗ trợ: 19001221 - Email: cskh@hotro.shopee.vn</p>
                        <p>Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Đức Trí - Điện thoại liên hệ: 024 73081221 (ext 4678)</p>
                        <p>Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư TP Hà Nội cấp lần đầu ngày 10/02/2015</p>
                        <p>© 2015 - Bản quyền thuộc về Công ty TNHH Shopee</p>
                    </div>
                </div>
                

            </div>
        </WidgetContainer>
    );
}

export default Footer;