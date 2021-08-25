import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Modules
import Number from '../../util/number';

// icons
const iconPlus = <svg enableBackground="new 0 0 10 10" viewBox="0 0 10 10" x="0" y="0"><polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5"></polygon></svg>

const iconChat = <svg viewBox="0 0 16 16" className="icon-chat"><g fillRule="evenodd"><path d="M15 4a1 1 0 01.993.883L16 5v9.932a.5.5 0 01-.82.385l-2.061-1.718-8.199.001a1 1 0 01-.98-.8l-.016-.117-.108-1.284 8.058.001a2 2 0 001.976-1.692l.018-.155L14.293 4H15zm-2.48-4a1 1 0 011 1l-.003.077-.646 8.4a1 1 0 01-.997.923l-8.994-.001-2.06 1.718a.5.5 0 01-.233.108l-.087.007a.5.5 0 01-.492-.41L0 11.732V1a1 1 0 011-1h11.52zM3.646 4.246a.5.5 0 000 .708c.305.304.694.526 1.146.682A4.936 4.936 0 006.4 5.9c.464 0 1.02-.062 1.608-.264.452-.156.841-.378 1.146-.682a.5.5 0 10-.708-.708c-.185.186-.445.335-.764.444a4.004 4.004 0 01-2.564 0c-.319-.11-.579-.258-.764-.444a.5.5 0 00-.708 0z"></path></g></svg>

const iconStore = <svg enableBackground="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" strokeWidth="0" ><path d="m13 1.9c-.2-.5-.8-1-1.4-1h-8.4c-.6.1-1.2.5-1.4 1l-1.4 4.3c0 .8.3 1.6.9 2.1v4.8c0 .6.5 1 1.1 1h10.2c.6 0 1.1-.5 1.1-1v-4.6c.6-.4.9-1.2.9-2.3zm-11.4 3.4 1-3c .1-.2.4-.4.6-.4h8.3c.3 0 .5.2.6.4l1 3zm .6 3.5h.4c.7 0 1.4-.3 1.8-.8.4.5.9.8 1.5.8.7 0 1.3-.5 1.5-.8.2.3.8.8 1.5.8.6 0 1.1-.3 1.5-.8.4.5 1.1.8 1.7.8h.4v3.9c0 .1 0 .2-.1.3s-.2.1-.3.1h-9.5c-.1 0-.2 0-.3-.1s-.1-.2-.1-.3zm8.8-1.7h-1v .1s0 .3-.2.6c-.2.1-.5.2-.9.2-.3 0-.6-.1-.8-.3-.2-.3-.2-.6-.2-.6v-.1h-1v .1s0 .3-.2.5c-.2.3-.5.4-.8.4-1 0-1-.8-1-.8h-1c0 .8-.7.8-1.3.8s-1.1-1-1.2-1.7h12.1c0 .2-.1.9-.5 1.4-.2.2-.5.3-.8.3-1.2 0-1.2-.8-1.2-.9z"></path></svg>

const StoreThumbnail = styled.div`
    position: relative;
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
        border: 5px solid rgba(255, 255, 255, .5);
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
    font-size: .75rem;
    color: hsla(0,0%,100%,.7);

    p{
        margin: 0;

        font-size: 24px;
        font-weight: 500;
        color: #fff;
    }

`;

const Button = styled.button`
    width: 100%;
    text-transform: uppercase;
    color: #fff;
    border: 1px solid #fff;

    svg{
        height: .75rem;
        width: .75rem;
        margin-right: 5px;

        fill: #fff;

        &.icon-chat{
            height: 0.9375rem;
            width: 0.9375rem;
        }
    }
`;


const StoreStatisticsItem = styled.div`
    height: 33.333333%;

    svg{
        height: 1rem;
        width: 1rem;
        margin-right: .875rem;
    }

    strong{
        color: #c7a17a;
        margin-left: 8px;
    }
`;

Information.propTypes = {
    info: PropTypes.object,
};

Information.defaultProps = {
    info: null
}



function Information(props) {
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
                    <Button className = "d-flex align-items-center justify-content-center"> 
                        {iconPlus}
                        <span>Theo doi</span>
                    </Button>
                    <Button className = "d-flex align-items-center justify-content-center">
                        {iconChat}
                        <span>Chat</span>
                    </Button>
                </div>
            </StoreThumbnail>
            
            <div 
                className = "py-3 ml-5 d-flex flex-column flex-wrap "
                style = {{columnGap: '100px'}}
            >
                <StoreStatisticsItem> 
                    {iconStore}
                    <span>San Pham: <strong>110</strong> </span>
                    
                </StoreStatisticsItem>

                <StoreStatisticsItem> 
                    {iconStore}
                    <span>Tỉ lệ phản hồi Chat: 
                    <strong>98% (trong vài giờ)</strong> </span>
                    
                </StoreStatisticsItem>

                <StoreStatisticsItem>
                    {iconStore}
                    <span>Người theo dõi:
                    <strong>36,8k</strong></span>
                </StoreStatisticsItem>

                <StoreStatisticsItem> 
                    {iconStore}
                    <span>đánh giá:  
                    <strong>4.9 (100 đánh giá)</strong></span>
                    
                </StoreStatisticsItem>

                <StoreStatisticsItem> 
                    {iconStore}
                    <span>Tham gia:   
                    <strong>3 tháng trước</strong></span>
                </StoreStatisticsItem>
            </div>
        </div>
    );
}

export default Information;