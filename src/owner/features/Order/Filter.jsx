import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import SearchBox from './SearchBox';
import DateBox from './DateBox';
import TabBox from './TabBox';
import HeaderTable from './HeaderTable';
import SelectBox from '../../components/SelectBox';

// Style
import './style.scss';

const WidgetContent = styled.div`
    padding: 1.125rem 1.5rem;
    font-size: .875rem;
`;

Filter.propTypes = {
    hasTab: PropTypes.bool.isRequired,
};

function Filter({hasTab}) {
    // Data
    const [indexOpenTab, setIndexOpenTab] = useState(0);
    const [selectInfo, setSelectInfo] = useState({
        indexSelected: 0,
        listOption: [
            "Ngày xác nhận đặt đơn giảm dần",
            "Ngày xác nhận đặt đơn tang dần"
        ]
    });

    // Handle event
    const handleChoseTab = index =>{
        if(indexOpenTab !== index) setIndexOpenTab(index);
    }

    return (
        <WidgetContent >
            <div className="d-flex align-items-center justify-content-between mb-5 position-relative" style={{zIndex: 100}}>
                <SearchBox/>
                <DateBox/>
            </div>

            {hasTab && <TabBox handleChoseTab = {handleChoseTab}/>}
            
            
            <div className="d-flex align-items-center justify-content-between title">
                <h4>29 Đơn hàng</h4>

                <div className="d-flex align-items-center justify-content-end flex-fill">
                    <span className="mr-3">Sắp xếp theo</span>

                    <SelectBox 
                        listOption={selectInfo.listOption}
                        indexSelected = {selectInfo.indexSelected}
                        handleSelectOption = {index => setSelectInfo({...selectInfo, indexSelected: index})}
                    />

                    <button><span aria-hidden="true" className="icon_creditcard"></span>Giao Hàng Loạt</button>
                </div>
            </div>

            <HeaderTable/>

        </WidgetContent>
    );
}

export default Filter;