import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Modules
import Number from './../../util/number';

const StoreThumbnail = styled.div`
    position: relative;
    min-height: 135px;
    width: 33.3333333%;
`;

const StoreBackground = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.bgImage});
    border-radius: 5px;

    overflow: hidden;
    z-index: 0;

    &:after{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;

        background-color: rgba(0,0,0,.7);
    }
`;

const StoreAvatar = styled.div`
    position: relative;
    width: 80px;
    margin-right: 15px;

    img:first-child{
        background-image: url(${props => props.avatar});
        border: 3px solid rgba(255, 255, 255, .5);
        border-radius: 50%;
        height: 80px;
    }
`;

const StoreAvatarLabel = styled.img`
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 100%;
`;

const StoreText = styled.div`
    position: relative;
    padding: 10px 0;
    color: #fff;

    p{
        font-size: 24px;
        font-weight: 500;
        margin: 0;
    }

`;

const Button = styled.button`
    width: 100%;
    text-transform: uppercase;
    color: #fff;
    border: 1px solid #fff;

    span{
        margin-right: 5px;
    }
`;

WidgetStoreInformation.propTypes = {
    info: PropTypes.object,
};

WidgetStoreInformation.defaultProps = {
    info: null
}



function WidgetStoreInformation(props) {
    const {
        title,
        avatar, 
        bgImage,
        onlineTime
    } = props.info;

    const time = Number.convertToHour(onlineTime);

    return (
        <div className = "d-flex">
            <StoreThumbnail>
                <StoreBackground 
                    className = "bg-image" 
                    bgImage = {bgImage}
                />

                <div className = "d-flex mt-3 px-4">
                    <StoreAvatar>
                        <img src={avatar} alt="avatar" />
                        <StoreAvatarLabel src = {"https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/483071c49603aa7163a7f51708bff61b.png"}/>
                    </StoreAvatar>

                    <StoreText>
                        <p>{title}</p>
                        {time > 0 ? (
                            <span>Online {time} giờ trước</span>
                        ) : (
                            <span>Online {onlineTime} phut trước</span>
                        )}
                        
                        
                    </StoreText>
                </div>

                <div 
                    className = "d-flex my-3 px-4" 
                    style = {{
                        position: "relative",
                        zIndex: "1",
                        gap: "20px"
                    }}
                >
                    <Button> 
                        <span aria-hidden="true" class="icon_plus"></span>
                        Theo doi
                    </Button>
                    <Button>
                        <span aria-hidden="true" class="icon_chat_alt"></span>
                        Chat
                    </Button>
                </div>
            </StoreThumbnail>
            
        </div>
    );
}

export default WidgetStoreInformation;