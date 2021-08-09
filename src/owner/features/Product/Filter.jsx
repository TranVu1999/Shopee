import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import SearchMoreOptionBox from '../../components/SearchMoreOptionBox';

const WidgetContent= styled.div`
    padding: 1.125rem 1.5rem;
`;

Filter.propTypes = {
    
};

function Filter(props) {
    // data
    const listOptions = ["Tên sản phẩm", "Phân loại hàng", "Mã sản phẩm",];
    const [indexSelected, setIndexSelected] = React.useState(0);

    // handle event
    const handleChoseTypeSearch = index =>{
        setIndexSelected(index);
    }

    return (
        <WidgetContent>
            <SearchMoreOptionBox 
                listOptions={listOptions}
                indexSelected={indexSelected}
                handleSelected = {handleChoseTypeSearch}
            />
        </WidgetContent>
    );
}

export default Filter;