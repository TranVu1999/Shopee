import React from 'react';
import PropTypes from 'prop-types';

// Components
import TitleContent from './../components/TitleContent';
import Decoration from '../features/Shop/Decoration';

ShopDecoration.propTypes = {
    
};

function ShopDecoration(props) {
    return (
        <section>
            <TitleContent
                title="Trang Trí Shop"
                subTitle="Tối ưu hóa giao diện Shop có thể giúp tăng doanh thu cho Shop của bạn"
            />

            <Decoration/>

        </section>
    );
}

export default ShopDecoration;