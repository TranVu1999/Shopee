import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const WidgetContent = styled.div`
    position: relative;
    width: 100%;
    height: 200px;
`;

const Background = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background-image: url(${props=>props.image});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    filter: blur(2px);
`;

const Content = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    padding: 1.5rem 1.5rem;

    background-color: rgba(0,0,0,.4);
`;

const Thumbnail = styled.div`
    text-align: center;

    .image{
        position: relative;
        display: inline-block;
        width: 90px;
        height: 90px;

        &:before{
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            width: 80px;
            height: 80px;
            border: 1px solid #f5f5f5;
            border-radius: 50%;
        }

        &>img{
            border-radius: 50%;
        }

        .label{
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translate(-50%, 10%);
    
            width: 100%;
        }
    }

    .text{
        margin-top: .3125rem;

        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        color: #fff;

        p{
            margin: 0;
        }

        span{
            font-size: .75rem;
            color: hsla(0,0%,100%,.7);
            margin: .3125rem 0 .375rem; 
        }
    }

    
`;

Avatar.propTypes = {
    
};

function Avatar(props) {
    return (
        <WidgetContent>
            <Background image = {"https://cf.shopee.vn/file/218a30c1242455c3bc2af1fc8dbf1791_tn"}/>

            <Content>
                <Thumbnail>
                    <div className="image">
                        <img src="https://cf.shopee.vn/file/218a30c1242455c3bc2af1fc8dbf1791_tn" alt="store" />

                        <div className="label">
                            <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/483071c49603aa7163a7f51708bff61b.png" width="64" height="16"/>
                        </div>
                    </div>

                    <div className="text">
                        <p>atous.clothing</p>
                        <span>Online 25 giờ trước</span>
                    </div>

                    
                </Thumbnail>

            </Content>

            
        </WidgetContent>
    );
}

export default Avatar;