import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Modules
import Number from './../../util/number';

const StoreThumbnail = styled.div`
    position: relative;
`;

const StoreBackground = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;

    overflow: hidden;
    z-index: 0;
`;

const StoreAvatar = styled.div`
    position: relative;
    width: 80px;
    margin-right: 15px;

    img:first-child{
        background-image: url(${props => props.avatar});
        border: 3px solid #f5f5f5;
        border-radius: 50%;
        height: 80px;
    }
`;

const StoreAvatarLabel = styled.img`
    position: absolute;
    bottom: 10px;
    left: 0;
    width: 100%;
`;

const StoreText = styled.div`
    position: relative;
    padding: 10px 0;
    color: rgba(0,0,0,.54);

    p{
        margin: 0;
        font-size: 18px;
        font-weight: 600;
        color: rgba(0,0,0,.87);
        line-height: 13px;
    }

`;

const Button = styled.button`
    padding: 2px 15px;
    color: #666;
    border: 1px solid #d5d5d5;

    span{
        margin-right: 5px;
    }
`;

const ButtonHighlight = styled(Button)`
    color: #ee4d2d;
    background-color: rgba(255, 87, 34, .1);
    border-color: #ee4d2d;
`

WidgetThumbnailStore.propTypes = {
    info: PropTypes.object,
};

WidgetThumbnailStore.defaultProps = {
    info: null
}

function WidgetThumbnailStore(props) {
    const {
        title,
        avatar, 
        bgImage,
        onlineTime
    } = props.info;

    const time = Number.convertToHour(onlineTime);

    return (
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

                    
                    <div>
                        <ButtonHighlight className = "mt-1 mr-2"> 
                            <span className="icon_plus"></span>
                            Chat Ngay
                        </ButtonHighlight>
                        <Button>
                            <span className="icon_chat_alt"></span>
                            Xem Shop
                        </Button>
                    </div>
                    
                </StoreText>
            </div>
            
        </StoreThumbnail>
            
    );
}

export default WidgetThumbnailStore;