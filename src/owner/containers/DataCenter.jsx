import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

//Components
import TabBox from '../components/TabBox';

// Theme
import {BorderColor} from './../theme';
import Dashboard from '../features/DataCenter/Dashboard';

const WidgetContent = styled.div`
    margin: 4rem 0 0;

    section{
        width: 79rem;
        margin: 0 auto;
    }
`;

const WidgetTabBox = styled.div`
    background-color: #fff;
    border-bottom: 1px solid ${BorderColor.mainColor};

    &>div{
        width: 79rem;
        margin: 0 auto;
    }
`;


DataCenter.propTypes = {
    
};

function DataCenter(props) {
    // Data
    const [tab, setTab] = React.useState({
        indexActive: 0,
        listTab: [
            "Tổng quan",
            "Truy cập",
            "Sản phẩm",
            "Doanh thu",
            "Marketing",
            "Chat",
            "Quân Sư Bán Hàng",
            "Góc học tập",
        ]
    });

    // handle event
    const handleChoseTab = indexActive =>{
        if(indexActive === tab.indexActive) return;
        setTab({...tab, indexActive});
    }

    return (
        <WidgetContent>
            <WidgetTabBox>
                <div>
                    <TabBox 
                        listTab={tab.listTab} 
                        indexActive={tab.indexActive}
                        handleChoseTab = {handleChoseTab}
                    />
                </div>
            </WidgetTabBox>

            <section>
                <Dashboard/>
            </section>
            
        </WidgetContent>
    );
}

export default DataCenter;