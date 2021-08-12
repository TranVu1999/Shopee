import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import TabBox from './../../components/TabBox';
import ShopBasic from './ShopBasic';
import ShopPrivacy from './ShopPrivacy';
import ShopChat from './ShopChat';
import ShopNotification from './ShopNotification';

// Theme
import {BorderColor} from './../../theme';
import './style.scss';


Shop.propTypes = {};

function Shop(props) {
    // Data
    const [listTab, setListTab] = useState({
        indexActive: 0,
        listTab: [
            "Thiết Lập Cơ Bản",
            "Cài đặt riêng tư",
            "Cài đặt Chat",
            "Cài đặt thông báo"
        ]
    });

    // handle event
    const handleChoseTab = indexActive =>{
        if(indexActive === listTab.indexActive) return;

        setListTab({
            ...listTab,
            indexActive
        });
    }

    return (
        <>
            <TabBox
                listTab={listTab.listTab}
                indexActive={listTab.indexActive}
                handleChoseTab={handleChoseTab}
            />

            {/* Setup  Shop*/}
            {listTab.indexActive === 0 && <ShopBasic/>}

            {/* Setup privacy*/}
            {listTab.indexActive === 1 && <ShopPrivacy/>}

            {/* Setup chat */}
            {listTab.indexActive === 2 && <ShopChat/>}

            {/* Setup Notification */}
            {listTab.indexActive === 3 && <ShopNotification/>}

        </>
    );
}

export default Shop;
