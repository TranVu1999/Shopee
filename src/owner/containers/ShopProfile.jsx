import React from 'react';

// Components
import TitleContent from './../components/TitleContent';
import Profile from './../features/Shop/Profile';


function ShopProfile() {
    // data
    
    return (
        <section className="owner-page-content">
            <TitleContent 
                title="Hồ Sơ Shop"
                subTitle="Xem tình trạng Shop và cập nhật hồ sơ Shop của bạn"
            />

            <Profile/>
        </section>
    );
}

export default ShopProfile;