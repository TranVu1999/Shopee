import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

SearchTrendBox.propTypes = {
    title: PropTypes.string,
    number: PropTypes.number,
    image: PropTypes.string,
};

SearchTrendBox.defaultProps = {
    title: "Goi ke dau giuong",
    number: 94,
    image: "https://cf.shopee.vn/file/f373c174eeb70b9d093d26851e984c78"
}

function SearchTrendBox(props) {

    const {title, number, image} = props;

    return (
        <a href = "#/" className = "d-flex search-trend-box">
            <div className="search-trend__text">
                <p>{title}</p>
                <span className = "d-block">{number}k+ san pham</span>
            </div>
            <div className="search-trend__image">
                <img src = {image} alt="product" />
            </div>
        </a>
    );
}

export default SearchTrendBox;