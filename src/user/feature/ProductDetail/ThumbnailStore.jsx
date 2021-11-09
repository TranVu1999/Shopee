import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Modules
import Number from '../../util/number';

// icons
const iconChat = <svg viewBox="0 0 16 16" ><g fillRule="evenodd"><path d="M15 4a1 1 0 01.993.883L16 5v9.932a.5.5 0 01-.82.385l-2.061-1.718-8.199.001a1 1 0 01-.98-.8l-.016-.117-.108-1.284 8.058.001a2 2 0 001.976-1.692l.018-.155L14.293 4H15zm-2.48-4a1 1 0 011 1l-.003.077-.646 8.4a1 1 0 01-.997.923l-8.994-.001-2.06 1.718a.5.5 0 01-.233.108l-.087.007a.5.5 0 01-.492-.41L0 11.732V1a1 1 0 011-1h11.52zM3.646 4.246a.5.5 0 000 .708c.305.304.694.526 1.146.682A4.936 4.936 0 006.4 5.9c.464 0 1.02-.062 1.608-.264.452-.156.841-.378 1.146-.682a.5.5 0 10-.708-.708c-.185.186-.445.335-.764.444a4.004 4.004 0 01-2.564 0c-.319-.11-.579-.258-.764-.444a.5.5 0 00-.708 0z"></path></g></svg>

const iconStore = <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" strokeWidth="0" class="icon-store"><path d="m13 1.9c-.2-.5-.8-1-1.4-1h-8.4c-.6.1-1.2.5-1.4 1l-1.4 4.3c0 .8.3 1.6.9 2.1v4.8c0 .6.5 1 1.1 1h10.2c.6 0 1.1-.5 1.1-1v-4.6c.6-.4.9-1.2.9-2.3zm-11.4 3.4 1-3c .1-.2.4-.4.6-.4h8.3c.3 0 .5.2.6.4l1 3zm .6 3.5h.4c.7 0 1.4-.3 1.8-.8.4.5.9.8 1.5.8.7 0 1.3-.5 1.5-.8.2.3.8.8 1.5.8.6 0 1.1-.3 1.5-.8.4.5 1.1.8 1.7.8h.4v3.9c0 .1 0 .2-.1.3s-.2.1-.3.1h-9.5c-.1 0-.2 0-.3-.1s-.1-.2-.1-.3zm8.8-1.7h-1v .1s0 .3-.2.6c-.2.1-.5.2-.9.2-.3 0-.6-.1-.8-.3-.2-.3-.2-.6-.2-.6v-.1h-1v .1s0 .3-.2.5c-.2.3-.5.4-.8.4-1 0-1-.8-1-.8h-1c0 .8-.7.8-1.3.8s-1.1-1-1.2-1.7h12.1c0 .2-.1.9-.5 1.4-.2.2-.5.3-.8.3-1.2 0-1.2-.8-1.2-.9z"></path></svg>

const StoreThumbnail = styled.div`
    position: relative;

    .skeleton{
        height: 95px;
    }
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
    font-size: .875rem;

    p{
        margin: 0;
        font-size: 1rem;
        font-weight: 600;
        color: rgba(0,0,0,.87);
        line-height: 13px;
    }

`;

const Button = styled.button`
    padding: 2px 15px;
    color: #666;
    border: 1px solid #d5d5d5;

    svg{
        height: .75rem;
        width: .75rem;
        margin-right: 5px;

        fill: #EE4D2D;

        &.icon-store{
            fill: #666;
        }
    }
`;

const ButtonHighlight = styled(Button)`
    color: #ee4d2d;
    background-color: rgba(255, 87, 34, .1);
    border-color: #ee4d2d;
`;

const WidgetSkeleton = styled.div`

`;

ThumbnailStore.propTypes = {
    store: PropTypes.object,
};

ThumbnailStore.defaultProps = {
    store: null
}  

function ThumbnailStore(props) {
    const {store} = props;

    // const time = Number.convertToHour(onlineTime);

    const time = 1;

    return (
        <StoreThumbnail>
            {!store && <div className="pt-3 mx-4 thumnail skeleton"></div>}
            
            {store && <>
                <div className = "d-flex mt-3 px-4">
                    <StoreAvatar>
                        <img src={store.avatar} alt="avatar" />

                        {store.type === "admin" && <StoreAvatarLabel src = {"https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/483071c49603aa7163a7f51708bff61b.png"}/>}
                        
                    </StoreAvatar>

                    <StoreText>
                        <p>{store.brand}</p>
                        {time > 0 ? (
                            <span>Online {time} giờ trước</span>
                        ) : (
                            <span>Online {1} phut trước</span>
                        )}

                        
                        <div>
                            <ButtonHighlight className = "mt-1 mr-2"> 
                                {iconChat}
                                Chat Ngay
                            </ButtonHighlight>
                            <Button>
                                {iconStore}
                                Xem Shop
                            </Button>
                        </div>
                        
                    </StoreText>
                </div>
            </>}

            
            
        </StoreThumbnail>
            
    );
}

export default ThumbnailStore;