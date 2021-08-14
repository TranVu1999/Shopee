import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import TitleContent from './../components/TitleContent';
import Profile from './../features/Shop/Profile';


ShopProfile.propTypes = {
    
};

function ShopProfile(props) {
    return (
        <section>
            <TitleContent 
                title="Hồ Sơ Shop"
                subTitle="Xem tình trạng Shop và cập nhật hồ sơ Shop của bạn"
            />

            <Profile/>
        </section>
    );
}

export default ShopProfile;