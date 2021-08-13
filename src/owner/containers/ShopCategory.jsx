import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import TitleContent from '../components/TitleContent';
import ListCategory from '../features/Shop/ListCategory';

const WidgetTable = styled.div`
    padding: 1.125rem 1.5rem;
`;


ShopCategory.propTypes = {
    
};

function ShopCategory(props) {
    return (
        <section>
            <TitleContent title="Điều chỉnh thứ tự"/>
            <div className="mb-3"></div>

            <WidgetTable>
                <ListCategory/>
            </WidgetTable>
        </section>
    );
}

export default ShopCategory;