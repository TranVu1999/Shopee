import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Modules
import formatNumber from './../../../utils/formatNumber';

// icons
const iconStart = <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" ><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"></polygon></svg>

const iconTicker = <svg enableBackground="new 0 0 12 12" viewBox="0 0 12 12" x="0" y="0" ><g><path d="m5.2 10.9c-.2 0-.5-.1-.7-.2l-4.2-3.7c-.4-.4-.5-1-.1-1.4s1-.5 1.4-.1l3.4 3 5.1-7c .3-.4 1-.5 1.4-.2s.5 1 .2 1.4l-5.7 7.9c-.2.2-.4.4-.7.4 0-.1 0-.1-.1-.1z"></path></g></svg>

const iconCart = <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" ><g><g><polyline fill="none" points=".5 .5 2.7 .5 5.2 11 12.4 11 14.5 3.5 3.7 3.5" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"></polyline><circle cx="6" cy="13.5" r="1" stroke="none"></circle><circle cx="11.5" cy="13.5" r="1" stroke="none"></circle></g><line fill="none" strokeLinecap="round" strokeMiterlimit="10" x1="7.5" x2="10.5" y1="7" y2="7"></line><line fill="none" strokeLinecap="round" strokeMiterlimit="10" x1="9" x2="9" y1="8.5" y2="5.5"></line></g></svg>

const WidgetContent = styled.div`
    padding: 25px 15px;

    p.warning{
        margin: 0;
        font-size: .875rem;
        color: #ff424f;
    }
`;

const Title = styled.h5`
    font-size: 1.25rem;
    font-weight: 500;
    max-width: 100%;

    color: rgba(0,0,0,.8);
    line-height: 1.625rem;
    word-wrap: break-word;

    .badge{
        display: inline-block;
        margin-right: .75rem;
        padding: .1875rem .25rem;

        font-size: .75rem;
        font-weight: 500;
        text-transform: capitalize;

        color: #fff;
        background-color: #ee4d2d;

        border-radius: 2px;
    }
`;

const Statistics = styled.div`
    margin-bottom: 1rem;

    label{
        position: relative;
        margin-right: 5px;
        margin-bottom: 0;

        font-size: 1.125rem;
        color: #222;

        &:after{
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;

            width: 100%;
            height: 1px;
            background-color: #222;
        }
    }

    span{
        font-size: .875rem;
        color: #767676;
        line-height: 1;
    }

    .rating{
        label{
            color: #ee4d2d;
            &:after{
                background-color: #ee4d2d;
            }
        }

        svg{
            margin: 0 1px;
            width: .875rem;
            height: .875rem;
            fill: #ee4d2d;
        }
    }

    &>div:nth-child(2){
        margin: 0 1rem;
        padding: 0 1rem;
        border-left: 1px solid rgba(0,0,0,.14);
        border-right: 1px solid rgba(0,0,0,.14);
    }

    &>div:last-child{
        label:after{
            display: none;
        }
    }
`;

const PriceBox = styled.div`
    padding: 15px 20px;
    margin-bottom: 1rem;
    background: #fafafa;

    .old{
        position: relative;
        margin-right: .875rem;
        font-size: 1rem;
        color: #929292;

        &:after{
            content: "";
            position: absolute;
            top: 50%;
            left: 0;
            transform: translate(0, -50%);

            width: 100%;
            height: 1px;
            background-color: #929292;
        }
    }

    .new{
        margin-right: .875rem;
        font-size: 1.875rem;
        font-weight: 500;
        color: #ee4d2d;
    }

    .badge{
        padding: 0 .25rem;

        font-weight: 600;
        color: #fff;
        background-color: #ee4d2d;

        line-height: 1.25rem;
    }
`;

const Row = styled.div`
    display: flex;
    padding: .5rem 1rem;
    font-size: .875rem;
`;

const Label = styled.div`
    width: 6.875rem;
    margin-right: 1.5rem;
    line-height: 1.125rem;
`;

const WidgetClassify = styled.div`
    padding: .5rem 0 0;
    margin-bottom: 1rem;
`;

const ComboPromo = styled.div`
    .promo-box{
        display: inline-block;
        padding: 0 6px;
        margin-right: 1rem;
        

        color: #ee4d2d;
        border: 1px solid #ee4d2d;
        border-radius: 2px;
        cursor: pointer;
    }

    button{
        color: #666;

        span{
            margin-top: .25rem;
            font-size: 1.125rem;
        }
    }
`;

const Delivery = styled.div`

    .thumbnail{
        margin-right: 1rem;
    }

    img{
        width: 25px;
    }

    .item{
        margin-bottom: .75rem;
        line-height: 1.25rem;

        p{
            color: #333;
            margin: 0;
        }

        span{
            margin-right: 1rem;
            text-transform: capitalize;
        }
    }
`;

const WidgetButton = styled.div`  
    
`;

const WidgetFormUpdate = styled.div`
    button{
        padding: 0 .5rem;
        font-size: 1.125rem;
        border: 1px solid rgba(0,0,0,.09);

        &:first-child{
            border-radius: 2px 0 0 2px;
        }
        &:last-child{
            border-radius: 0 2px 2px 0;
        }
    }

    .number{
        min-width: 2.5rem;
        height: 2rem; 
        line-height: 2rem;

        font-size: 1rem;
        text-align: center;
        border-top: 1px solid rgba(0,0,0,.09);
        border-bottom: 1px solid rgba(0,0,0,.09);
    }
`;

const ButtonAddToCart = styled.button`
    display: inline-block;
    min-width: 11.25rem;
    margin-right: 1rem;
    padding: .75rem 1rem;

    color: #ee4d2d;
    background-color: #FFEEE8;
    border: 1px solid #ee4d2d;
    border-radius: 2px;

    text-transform: capitalize;

    svg{
        margin-right: .5rem;
        width: 1.25rem;
        height: 1.25rem;

        
        stroke: #ee4d2d;
        fill: #ee4d2d;
    }
`;

const ButtonBuyNow = styled(ButtonAddToCart)`
    background-color: #ee4d2d;
    color: #fff;
    border: 1px solid #ee4d2d;
`;

const WidgetSkeleton = styled.div`
    .title {
        height: 53px;
        margin-bottom: 1rem;
    }

    .statistics {
        label {
            display: block;
            height: 26px;
            width: 24px;

            &:after {
                display: none;
            }
        }
        
    }

    .price-box {
        height: 58px;
    }

    .classification {
        height: 200px;
    }
`;

WidgetDetail.propTypes = {
    firstClassification: PropTypes.string,
    secondClassification: PropTypes.string,
    product: PropTypes.object,
    choseClassifyProduct: PropTypes.func,
    onAddToCart: PropTypes.func,
    addToCartNotify: PropTypes.string,
};

WidgetDetail.defaultProps = {
    product: null
}

function WidgetDetail({
    product, 
    firstClassification,
    secondClassification,
    choseClassifyProduct,
    addToCartNotify,
    onAddToCart
}) {
    const [number, setNumber] = useState(1);

    // handle event
    const handleChoseClassification = classification => {
        if(!choseClassifyProduct) return;
        choseClassifyProduct(classification)
    }

    const addToCart = () => {
        if(!onAddToCart) return;
        onAddToCart(number);
    }

    const updateAmountProduct = num => {
        
        const tempNumber = num + number;
        if(tempNumber > 0 && tempNumber < 50) {
            setNumber(tempNumber);
        }
    }

    // render
    const renderPrice = () => {
        const {price, classification} = product;

        if(classification) {
            const {tablePrice} = classification;
            const arrPrice = [];
            for(let indx in tablePrice) {
                arrPrice.push(tablePrice[indx]);
            }

            return arrPrice.reduce((minPrice, currentPrice) => {
                if(currentPrice < minPrice) {
                    return currentPrice;
                }

                return minPrice;
            }, tablePrice[0].price);
        }
        return price;
    }

    const renderClassifications = () => {
        const {classification} = product;
        if(classification) {
            const firstClassifications = classification.classifies.first;
            const secondClassifications = classification.classifies.second;

            return <WidgetClassify>
                <Row>
                    <Label>{firstClassifications.title}</Label>
                    <WidgetButton>
                        {firstClassifications.types.map(item => {
                            const {label} = item;
                            return <button
                                key = {label}
                                onClick = {() => handleChoseClassification({
                                    type: "first",
                                    value: label
                                })}
                                className = {firstClassification === label ? "product__variant--button active" : "product__variant--button"}
                            >
                                {label}
                                <div className="ticker">
                                    {iconTicker}
                                </div>
                            </button>
                        })}
                        
                    </WidgetButton>
                    
                </Row>

                {secondClassifications.title && <Row className="mb-3">
                    <Label>{firstClassifications.title}</Label>
                    <WidgetButton>
                        {secondClassifications.types.map(item => {
                            const {label} = item;
                            return <button 
                                key = {label}
                                onClick = {() => handleChoseClassification({
                                    type: "second",
                                    value: label
                                })}
                                className = {secondClassification === label ? "product__variant--button active" : "product__variant--button"}
                            >
                                {label}
                                <div className="ticker">
                                    {iconTicker}
                                </div>
                            </button>
                        })}
                        
                    </WidgetButton>
                    
                </Row>}
                


                {addToCartNotify && <Row>
                    <Label></Label>
                    <p className="warning">{addToCartNotify}</p>
                </Row>}                
            </WidgetClassify>
        }
    }

    const renderAmountProduct = () => {
        const {classification, inventory} = product;

        if(classification) {
            const {first, second} = classification.classifies;
            console.log({first})

            if(first.title && second.title && firstClassification && secondClassification) {
                const {tablePrice} = classification;
                for(let row of tablePrice) {
                    if(row.firstClassifyName === firstClassification && 
                    row.secondClassifyName === secondClassification) {
                        return row.inventory;
                    }
                }
            }else if(first.title && !second.title && firstClassification && !secondClassification){
                const {tablePrice} = classification;
                for(let row of tablePrice) {
                    if(row.firstClassifyName === firstClassification) {
                        return row.inventory;
                    }
                }
            }
        }

        return inventory;
    }
    

    return (
        <WidgetContent className="product">
            {!product && 
                <WidgetSkeleton>
                <div className="title skeleton"></div>

                <Statistics className="d-flex align-items-center statistics">
                    <div className="d-flex align-items-center rating">
                        <label className="skeleton"></label>
                        <div className="d-flex align-items-center">
                            {iconStart}
                            {iconStart}
                            {iconStart}
                            {iconStart}
                            {iconStart}
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <label className="skeleton"></label>
                        <span>????nh gi??</span>
                    </div>
                    <div className="d-flex align-items-center">
                        <label className="skeleton"></label>
                        <span>???? b??n</span>
                    </div>
                </Statistics>

                <PriceBox className="price-box skeleton"></PriceBox>

                <Row>
                    <Label>Combo khuy???n m??i</Label>

                    <ComboPromo>
                        <div className="promo-box">Mua 2 & gi???m ???5.000</div>
                        <div className="promo-box">Mua 2 & gi???m ???5.000</div>
                        <button className="d-inline-flex align-items-center">Xem th??m<span aria-hidden="true" className="arrow_triangle-down"></span></button>
                    </ComboPromo>
                </Row>

                <Row>
                    <Label>V???n chuy???n</Label>

                    <Delivery>
                        <div className="d-flex item">
                            <div className="thumbnail">
                                <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/1cdd37339544d858f4d0ade5723cd477.png" alt="icon" />
                            </div>

                            <div>
                                <p>Mi???n Ph?? V???n Chuy???n</p>
                                <div>Mi???n Ph?? V???n Chuy???n khi ????n ?????t gi?? tr??? t???i thi???u</div>
                            </div>
                        </div>
                        
                    </Delivery>
                </Row>

                <WidgetClassify className="skeleton classification"></WidgetClassify>


            </WidgetSkeleton>
            }

            {product && <>
                <Title>
                    <span className="badge">Y??u th??ch+</span>
                    <span>{product.title}</span>
                </Title>

                <Statistics className="d-flex">
                    <div className="d-flex align-items-center rating">
                        <label>5.0</label>
                        <div className="d-flex align-items-center">
                            {iconStart}
                            {iconStart}
                            {iconStart}
                            {iconStart}
                            {iconStart}
                        </div>
                    </div>
                    <div>
                        <label>{product.viewedNumber}</label>
                        <span>????nh gi??</span>
                    </div>
                    <div>
                        <label>{product.soldNumber}</label>
                        <span>???? b??n</span>
                    </div>
                </Statistics>

                <PriceBox className="d-flex align-items-center">
                    <span className="old">
                        <small>???</small>
                        199.000
                    </span>
                    <span className="new">
                        <small>???</small>
                        {formatNumber.convertToMoney(renderPrice())}
                    </span>
                    <span className="badge">23% gi???m</span>
                </PriceBox>

                <Row>
                    <Label>Combo khuy???n m??i</Label>

                    <ComboPromo>
                        <div className="promo-box">Mua 2 & gi???m ???5.000</div>
                        <div className="promo-box">Mua 2 & gi???m ???5.000</div>
                        <button className="d-inline-flex align-items-center">Xem th??m<span aria-hidden="true" className="arrow_triangle-down"></span></button>
                    </ComboPromo>
                </Row>

                <Row>
                    <Label>V???n chuy???n</Label>

                    <Delivery>
                        <div className="d-flex item">
                            <div className="thumbnail">
                                <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/1cdd37339544d858f4d0ade5723cd477.png" alt="icon" />
                            </div>

                            <div>
                                <p>Mi???n Ph?? V???n Chuy???n</p>
                                <div>Mi???n Ph?? V???n Chuy???n khi ????n ?????t gi?? tr??? t???i thi???u</div>
                            </div>
                        </div>
                        
                    </Delivery>
                </Row>

                {renderClassifications()}

                <Row className="mb-4">
                    <Label>S??? l?????ng</Label>

                    <WidgetFormUpdate className="d-flex align-items-center">
                        <div className="d-flex mr-3">
                            <button 
                                className="btn-minus"
                                onClick = {() => updateAmountProduct(-1)}
                            ><span aria-hidden="true" className="icon_minus-06"></span></button>
                            <div className="number">{number}</div>
                            <button 
                                className="btn-plus"
                                onClick = {() => updateAmountProduct(1)}
                            ><span aria-hidden="true" className="icon_plus"></span></button>
                        </div>

                        <span>{renderAmountProduct()} s???n ph???m c?? s???n</span>
                    
                    </WidgetFormUpdate>
                </Row>
            </>}                

            <div>
                <ButtonAddToCart onClick = {addToCart}>
                    {iconCart}
                    <span>th??m v??o gi??? h??ng</span>
                </ButtonAddToCart>
                <ButtonBuyNow>
                    <span>Mua Ngay</span>
                </ButtonBuyNow>
            </div>

            

        </WidgetContent>
    );
}

export default WidgetDetail;