import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const WidgetContainer = styled.div`
    padding: 5rem 0;
    
    img {
        width: 6.75rem;
        height: 6.125rem;
        margin-bottom: 1rem;
    }

    a {
        padding: .5rem 1.5rem;
        text-transform: uppercase;
        color: #fff;
        background-color: #ee4d2d;
    }
`;

EmptyCart.propTypes = {
    button: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
}

function EmptyCart({title, button}) {
    return (
        <WidgetContainer className="d-flex align-items-center justify-content-center">
            <div className="text-center">
                <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/cart/9bdd8040b334d31946f49e36beaf32db.png" alt="icon" />
                <p>{title}</p>
                <Link to={button.url}>{button.title}</Link>
            </div>
        </WidgetContainer>
    );
}

export default EmptyCart;