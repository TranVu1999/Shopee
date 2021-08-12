import React from 'react';
import PropTypes from 'prop-types';

// components
import TitleContent from './../components/TitleContent';
import Account from '../features/Setting/Account';

SettingAccount.propTypes = {
    
};

function SettingAccount(props) {
    return (
        <section>
            <TitleContent 
                title="Tài Khoản " 
                subTitle="Thay đổi thiết lập cơ bản "
            />

            <Account/>
        </section>
    );
}

export default SettingAccount;