import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Theme
import {BorderColor} from './../../theme';

// Images
import decorationPC from './../../assets/image/decoration-pc.png';

const WidgetContent = styled.div`
    padding: 3rem 1.5rem;
    font-size: .875rem;
`;

const TabBox = styled.div`
    border-bottom: 1px solid ${BorderColor.mainColor};

    div{
        position: relative;

        padding: .5rem 1rem;
        margin-right: .25rem;

        background-color: #f6f6f6;
        border-radius: 4px 4px 0 0;
        border: 1px solid ${BorderColor.mainColor};
        border-bottom: 0;
        cursor: pointer;

        &:after{
            content: '';
            position: absolute;
            bottom: -1px;
            left: 0;

            width: 100%;
            height: 2px;
            background-color: #f6f6f6;
        }

        &.active{
            font-weight: 600;
            background-color: #fff;
            color: #ee4d2d; 

            &:after{
                background-color: #fff;
            }
        }
    }
`;

const WidgetMobileDecoration = styled.div`
    .content{
        width: 720px;
        margin: 5rem auto;
    }

    img{
        max-width: 500px;
    }

    h5{
        font-size: 1.25rem;
        font-style: italic;
        font-weight: 500;
        color: #ee4d2d;
    }
`;

const WidgetPCDecoration = styled.div`
    margin: 5rem 0;
    padding: 3rem 3rem;

    h5{
        font-size: 1.5rem;
        font-weight: 500;
        color: #333;
    }

    .notify{
        span{
            margin: .25rem .75rem 0 0;
            font-size: 1rem;
            color: #ffbf00;
        }
    }

    .time{
        padding: 1.125rem 1.5rem;
        background-color: #fafafa;
        border: 4px;

        p{
            margin: 0;
        }

        label{
            margin-right: .5rem;
            color: #b7b7b7;
        }

        span{
            color: #333;
        }
    }
`;

const Button = styled.div`
    display: inline-box;
    padding: .675rem 1.5rem;

    color: #fff;
    background-color: #ee4d2d;

    border-color: #ee4d2d;
    border-radius: 4px;
`;

Decoration.propTypes = {
    
};

function Decoration(props) {
    // Data
    const [indexActive, setIndexActive] = React.useState(0);
    return (
        <WidgetContent>
            <TabBox className="d-flex">
                <div 
                    className={indexActive === 0 && "active"}
                    onClick={() => setIndexActive(0)}
                >Phi??n b???n di ?????ng</div>
                <div 
                    className={indexActive === 1 && "active"}
                    onClick={() => setIndexActive(1)}
                >Phi??n b???n m??y t??nh</div>
            </TabBox>

            {indexActive === 0 && <WidgetMobileDecoration>
                <div className="content text-center">
                    <img src="https://deo.shopeemobile.com/shopee/shopee-seller-live-sg/rootpages/static/modules/decoration/image/decoration-homepage.77fd459.png" alt="mobile" />

                    <div className="mt-4 d-flex">
                        <div className="p-3 flex-fill">
                            <h5>T???o n??t ri??ng ?????c ????o cho Shop </h5>
                            <p>Th??? nghi???m v???i nhi???u b??? c???c v?? h??nh ???nh kh??c nhau ????? thi???t k??? n??t ri??ng ?????c ????o c???a Shop </p>
                        </div>
                        <div className="p-3 flex-fill">
                            <h5>T???o n??t ri??ng ?????c ????o cho Shop </h5>
                            <p>Th??? nghi???m v???i nhi???u b??? c???c v?? h??nh ???nh kh??c nhau ????? thi???t k??? n??t ri??ng ?????c ????o c???a Shop </p>
                        </div>
                    </div>

                    <div className="text-center">
                        <Button>Trang tr?? Trang ch??? Shop phi??n b???n di ?????ng ngay!</Button>
                    </div>
                </div>
            </WidgetMobileDecoration>}
            
            {indexActive === 1 && <WidgetPCDecoration>
                <div className="d-flex">
                    <img src={decorationPC} alt="decoration pc" />

                    <div className="ml-3 text">
                        <h5>Trang tr?? (phi??n b???n m??y t??nh) hi???n t???i</h5>

                        <div className="d-flex notify">
                            <span aria-hidden="true" className="icon_error-circle"></span>
                            <p>L??u nh??p nh???ng thi???t k??? Trang tr?? Shop. Vui l??ng ch???n "Thay ?????i Thi???t K???" ????? ??p d???ng b???n trang tr?? n??y </p>
                        </div>

                        <div className="d-inline-block mb-5 time">
                            <p>
                                <label>Th???i gian l??u l???n cu???i:</label>
                                <span>21:14 11-08-2021</span>
                            </p>
                            <p>
                                <label>Th???i gian ??p d???ng l???n cu???i:</label>
                                <span>--</span>
                            </p>
                        </div>

                        <div>
                            <Button>Ch???nh s???a trang tr??</Button>
                        </div>
                    </div>
                </div>
            </WidgetPCDecoration>}
            

        </WidgetContent>
    );
}

export default Decoration;