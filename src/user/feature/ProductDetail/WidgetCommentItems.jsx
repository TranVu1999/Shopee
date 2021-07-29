import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Theme
import {Color, BorderColor} from './../../theme';

const WidgetAvatar = styled.div`
    width: 2.875rem;
    height: 2.875rem;

    border-radius: 50%;
    overflow: hidden;
`;

const WidgetText = styled.div`
    padding-left: 1rem;
    font-size: 0.875rem;
    flex: 1;
`;

const WidgetAuthor = styled.div`

`;

const WidgetRating = styled.div`
    color: ${Color.mainColor};
`;

const WidgetContent = styled.div`

`;

const WidgetRatingTag = styled.div`
    display: inline-block;
    padding: 0 1.25rem;
    margin-right: 1rem;
    margin-bottom: .5rem;

    color: rgba(0,0,0,.4);

    border: 1px solid ${BorderColor.mainColor};
    border-radius: 4rem;
`;

const WidgetTime = styled.div`
    font-size: .8rem;
    color: rgba(0,0,0,.4);

    span:first-child{
        margin-right: .25rem;
    }
`;

const WidgetImage = styled.div`
    display: inline-block;
    height: 4.5rem;
    width: 4.5rem;
    margin-right: 0.5rem;

    background-image: url(${props => props.image});

    cursor: pointer;

    &:last-child{
        margin-right: 0;
    }
`;

const WidgetButtonControl = styled.button`
    color: rgba(0,0,0,.4);

    span{
        margin-right: .25rem;
    }
`;


WidgetCommentItems.propTypes = {
    
};

function WidgetCommentItems(props) {
    return (
        <div className = "d-flex">
            <WidgetAvatar>
                <img src="https://cf.shopee.vn/file/af15a7a1765418a493f5ea40cbf58e83_tn" alt="avatar" />
            </WidgetAvatar>

            <WidgetText>
                <WidgetAuthor>TranVu17110403</WidgetAuthor>

                <WidgetRating>
                    <span class="icon_star"></span>
                    <span class="icon_star"></span>
                    <span class="icon_star"></span>
                    <span class="icon_star"></span>
                    <span class="icon_star"></span>
                </WidgetRating>

                <WidgetContent>
                    Váy xinh xỉu, vải bao dày, chất lượng oke lắm ạ. Váy còn thơm, được tặng thêm dây cột tóc nữa 😍
                </WidgetContent>

                <div className = "mt-3">
                    <WidgetRatingTag>Chất lượng sản phẩm tuyệt vời</WidgetRatingTag>
                    <WidgetRatingTag>Đóng gói sản phẩm rất đẹp và chắc chắn</WidgetRatingTag>
                </div>

                <WidgetTime>
                    <span>29.07.2021</span>
                    <span>18:37</span>
                </WidgetTime>

                <div className = "mt-4">
                    <WidgetImage className = "bg-image" image = {"https://cf.shopee.vn/file/66ce7b76686f30dca2ef649440da6a8e_tn"}/>
                    <WidgetImage className = "bg-image" image = {"https://cf.shopee.vn/file/66ce7b76686f30dca2ef649440da6a8e_tn"}/>
                </div>

                <div className = "d-flex align-items-center justify-content-between text-capitalize">
                    <WidgetButtonControl>
                        <span className="icon_like_alt"></span>
                        hữu ích?
                    </WidgetButtonControl>
                    <WidgetButtonControl>
                        <span className="icon_dislike_alt"></span>
                        Bao cao
                    </WidgetButtonControl>
                </div>
            </WidgetText>
        </div>
    );
}

export default WidgetCommentItems;