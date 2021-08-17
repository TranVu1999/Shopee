import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// components
import TitleContent from '../components/TitleContent';
import InputLimitBox from '../components/InputLimitBox';
import ListCategoryOption from '../features/Product/ListCategoryOption';

const WidgetContent = styled.div`
    padding: 1.125rem 1.5rem;
    font-size: .875rem;
`;

ProductCategory.propTypes = {
    
};

function ProductCategory(props) {
    return (
        <section>
            <TitleContent 
                title="Thêm 1 sản phẩm mới "
                subTitle="Vui lòng chọn ngành hàng phù hợp cho sản phẩm của bạn. "
            />

            <WidgetContent>
                <div className="mb-5 d-flex align-items-center">
                    <span className="mr-3" style={{whiteSpace: "nowrap"}}>Tên sản phẩm:</span>
                    <InputLimitBox limit="120" value="" large/>
                </div>

                <ListCategoryOption/>
            </WidgetContent>
            

        </section>
    );
}

export default ProductCategory;