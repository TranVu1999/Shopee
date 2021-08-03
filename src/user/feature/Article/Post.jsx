import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Theme
import {BorderColor} from './../../theme';

const WidgetContent = styled.div`
    font-size: 16px;
    padding-left: 3rem;
`;

const Title = styled.div`
    margin-bottom: 1.5em;
    padding-bottom: 1em;
    border-bottom: 1px solid ${BorderColor.mainColor}; 
    span{   
        font-size: .875em;
    }
`;

const Content = styled.div`
    margin-bottom: 5em;
    font-size: .875em;
`;

const Footer = styled.div`
    font-size: .875em;
`;

const WidgetSeeMore = styled.div`
    margin-bottom: 2em;

    p{
        color: #ee4d2d;
        border-bottom: 1px solid ${BorderColor.mainColor};
    }

    a{
        display: inline-block;
        padding: .125em 1.5em;
        margin-right: 1em;

        color: #005FB2;

        border: 1px solid ${BorderColor.mainColor};
        border-radius: 25px;
    }
`;

const WidgetContact = styled.div`
    button{
        display: inline-block;
        padding: 0 1em;
        margin-right: 1em;

        color: rgb(174, 167, 167);
        border: 1px solid ${BorderColor.mainColor};
        border-radius: 4px;

        span{
            margin-right: .5em;
            color: #666;
        }
    }
`;

Post.propTypes = {
    item: PropTypes.object,
};

Post.defaultProps = {
    item: {}
};

function Post(props) {
    const {item} = props;

    return (
        <WidgetContent>
            <Title>
                <h5 className="page-article--header">Làm Thế Nào Để Xem Trước Các Khung Giờ Và Sản Phẩm Flash Sale?</h5>
                <span><span className="icon_clock_alt mr-2"></span>02-08-2021</span>
            </Title>

            <Content>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam commodi dolore itaque sequi excepturi? Autem voluptates eveniet atque nemo deleniti consequatur, ad modi ipsa porro recusandae animi tempore in, provident ea beatae magni natus magnam inventore asperiores tempora repellendus harum, saepe illum delectus! Rem tenetur in voluptate voluptatem aliquam iste consequatur soluta minima similique beatae optio deserunt, aspernatur neque unde dicta iure magnam perferendis ex quaerat voluptatum? Sapiente perspiciatis porro nobis culpa neque facere excepturi inventore accusamus quia ex reiciendis fugit esse doloribus id vero ipsa, totam tempora tenetur reprehenderit commodi nesciunt. Veniam totam aperiam necessitatibus, dicta repellat facere maiores.</Content>

            <Footer>
                <WidgetSeeMore>
                    <span>Xem thêm:</span>
                    <p className="font-weight-bold">Các Câu Hỏi Thường Gặp Về Mua Hàng Trên Shopee</p>
                    <div>
                        <a href="#/">Đơn Hàng & Thanh Toán</a>
                        <a href="#/">Thanh Toán</a>
                    </div>
                </WidgetSeeMore>

                <WidgetContact>
                    <span className="font-weight-bold">Bài viết có hữu ích cho bạn không?</span>
                    <div className="mt-3">
                        <button><span className="icon_like"></span>Vâng</button>
                        <button><span className="icon_dislike"></span>Không</button>
                    </div>
                </WidgetContact>
            </Footer>
        </WidgetContent>
    );
}

export default Post;