import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const WidgetSlider = styled.div`
    position: relative;
    height: 100%;
    flex: 1;
    background-color: yellow;
`;

const BigThumbnail = styled.div`
    height: 100%;
    cursor: pointer;

    img{
        object-fit: cover;
        height: 100%;
    }
`;

const Navigation = styled.div`
    position: absolute;
    top: 50%;

    display: block;
    width: 48px;
    height: 70px;

    font-size: 48px;
    font-weight: 800;

    color: #fff;
    background-color: rgba(0,0,0,.5);

    border-radius: 4px;
    cursor: pointer;
    transition: all .3s ease;

    &:hover{
        background-color: rgba(0,0,0);
    }

    span{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

const ButtonNext = styled(Navigation)`
    right: 8px;
`;

const ButtonPrev = styled(Navigation)`
`;

const WidgetListImage  = styled.div`
    width: 310px;
`;

const Title = styled.h5`
    margin-bottom: 20px;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-transform: capitalize;
`;

const SmallThumbnail = styled.div`
    height: 90px;
    border: 2px solid transparent;
    transition: all .3s ease;
    cursor: pointer;

    &:hover, &.active{
        border: 2px solid #c7a17a;
    }

    img{
        height: 100%;
    }
`;


WidgetModalImage.propTypes = {
    indexActive: PropTypes.number,
    items: PropTypes.array,
};

WidgetModalImage.defaultProps = {
    indexActive: 0,
    items: []
}

function WidgetModalImage(props) {

    const {items, indexActive} = props;
    const lengthItems = items.length;
    const [indexShow, setIndexShow] = useState(indexActive);

    // Logic
    const onHandleChangeAvatar = index =>{
        setIndexShow(index);
    }


    // Render
    const renderItems = () =>{
        return items.map((item, index) => {
            return (
                <SmallThumbnail 
                    className = {indexShow === index ? "active" : ""}
                    onMouseOver = {() => {onHandleChangeAvatar(index)}}
                >
                    <img src={item} alt="product" />
                </SmallThumbnail>
            );
        });
    }

    return (
        <div className = "p-4 d-flex h-100" style = {{gap: '15px'}}>
            <WidgetSlider>
                <BigThumbnail>
                    <img src={items[indexShow]} alt="product" />
                </BigThumbnail>

                <ButtonPrev
                    onClick = {() => {if(indexShow > 0) setIndexShow(indexShow - 1)}}
                >
                    <span className="arrow_carrot-left"></span>
                </ButtonPrev>

                <ButtonNext onClick = {() => {if(indexShow < (lengthItems - 1)) setIndexShow(indexShow + 1)}}>
                    <span className="arrow_carrot-right"></span>
                </ButtonNext>

            </WidgetSlider>

            <WidgetListImage>
                <Title>(Hàng có sẵn) Váy trắng midi vintage nơ tay</Title>

                <div className="d-flex flex-wrap" style = {{gap: '15px'}}>
                    {renderItems()}
                </div>
                
            </WidgetListImage>
        </div>
    );
}

export default WidgetModalImage;