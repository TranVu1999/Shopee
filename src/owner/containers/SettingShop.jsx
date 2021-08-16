import React from 'react';
import PropTypes from 'prop-types';
import {useParams} from 'react-router-dom';

// components
import TitleContent from './../components/TitleContent';
import TabBox from '../components/TabBox';
import ShopBasic from './../features/Setting/ShopBasic';
import ShopPrivacy from './../features/Setting/ShopPrivacy';
import ShopChat from './../features/Setting/ShopChat';
import ShopNotification from './../features/Setting/ShopNotification';

// constants
import * as URL from './../constant/url';

SettingShop.propTypes = {
    
};

function SettingShop(props) {
    // Data
    const {alias} = useParams();
    const [listTab, setListTab] = React.useState({
        listTab: [
            {
                title: "Thiết Lập Cơ Bản",
                url: `${URL.PORTAL_SETTING_SHOP}basic`
            },
            {
                title: "Cài đặt riêng tư",
                url: `${URL.PORTAL_SETTING_SHOP}privacy`
            },
            {
                title: "Cài đặt Chat",
                url: `${URL.PORTAL_SETTING_SHOP}chat`
            },
            {
                title: "Cài đặt thông báo",
                url: `${URL.PORTAL_SETTING_SHOP}notification`
            }
        ]
    });

    return (
        <section>
            <TitleContent 
                title="Thiết Lập Shop" 
                subTitle="Thay đổi các cài đặt cho Shop của bạn."
            />

            <TabBox listTab={listTab.listTab} />

            {/* Setup  Shop*/}
            {alias === "basic" && <ShopBasic/>}

            {/* Setup privacy*/}
            {alias === "privacy" && <ShopPrivacy/>}

            {/* Setup chat */}
            {alias === "chat" && <ShopChat/>}

            {/* Setup Notification */}
            {alias === "notification" && <ShopNotification/>}

        </section>
    );
}

export default SettingShop;