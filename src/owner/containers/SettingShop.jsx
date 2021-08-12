import React from 'react';
import PropTypes from 'prop-types';

// components
import TitleContent from './../components/TitleContent';
import Shop from '../features/Setting/Shop';

SettingShop.propTypes = {
    
};

function SettingShop(props) {
    return (
        <section>
            <TitleContent 
                title="Thiết Lập Shop" 
                subTitle="Thay đổi các cài đặt cho Shop của bạn."
            />

            <Shop/>

        </section>
    );
}

export default SettingShop;