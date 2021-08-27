import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Modules
import Number from '../../util/number';

const WidgetContent = styled.div`
    padding: 1.125rem 1.5rem;
`;

const Title = styled.div`
    margin-bottom: 1.5rem;

    h5{
        margin-right: 1rem;
        margin-bottom: 0;

        font-size: 1.125rem;
        color: rgba(0,0,0,.8);
    }

    .page-product--badge{
        padding: 0 .25rem;
        font-size: .75rem;
        line-height: 1.125rem;
    }

    a{
        color: #ee4d2d;
        font-size: .875rem;

        span{
            margin-top: .125rem;
            font-size: 1.125rem;
        }
    }
`;

const ListProduct = styled.div`
    gap: 1rem;
`;

const Product = styled.div`
    width: calc((100% - 5rem) / 6);
    font-size: .875rem;

    .thumbnail{
        margin-bottom: .625rem;
        height: 11rem;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }

    .text{
        color: rgba(0,0,0,.8);
    }

    .name{
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;

        height: 40px;
        margin-bottom: .5rem;

        font-weight: 400;
        word-wrap: break-word;
        overflow: hidden;
        line-height: 1.25rem;
    }

    .price{
        .old{
            position: relative;
            margin-right: .75rem;
            color: rgba(0,0,0,.54);

            &:after{
                content: "";
                position: absolute;
                top: 50%;
                left: 0;
                transform: translate(0, 50%);

                width: 100%;
                height: 1px;
                background-color: rgba(0,0,0,.54);
            }
        }

        .new{
            color: #ee4d2d;
        }
    }
`;

ComboPromo.propTypes = {
    listComboPromo: PropTypes.array.isRequired,
};

function ComboPromo({listComboPromo}) {
    // render
    const renderListComboPromo = () =>{        
        return listComboPromo.map(item =>{

            const remainPrice = item.price - (item.price * item.discount / 100);

            return (
                <Product key = {item.id}>
                    <div 
                        className="thumbnail"
                        style = {{backgroundImage: `url(${item.image})`}}
                    />

                    <div className="text">
                        <div className="name">
                            <span>{item.title}</span>
                        </div>
                        <div className="d-flex price">
                            <div className="old">
                                <small>₫</small>
                                {Number.convertToMoney(item.price)}
                            </div>
                            <div className="new">
                                <small>₫</small>
                                {Number.convertToMoney(remainPrice)}
                            </div>
                        </div>
                    </div>
                </Product>
            );
        })
    }   

    return (
        <WidgetContent>
            <Title className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                    <h5>Combo khuyến mãi</h5>
                    <div>
                        <div className="page-product--badge">
                            Mua 2 & giảm ₫5.000
                        </div>
                    </div>
                </div>
                <a href="#/" className="d-flex align-items-center">
                    Xem tất cả
                    <span aria-hidden="true" className="arrow_carrot-right"></span>
                </a>
            </Title>

            <ListProduct className="d-flex">
                {renderListComboPromo()}
            </ListProduct>
        </WidgetContent>
    );
}

export default ComboPromo;