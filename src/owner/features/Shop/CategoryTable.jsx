import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Theme
import {BorderColor} from '../../theme';
import './style.scss';

const WidgetContent = styled.div`
    font-size: .875rem;
    border: 1px solid ${BorderColor.mainColor};
    border-radius: 4px;
`;

const Header = styled.div`
    
`;

CategoryTable.propTypes = {
    
};


function CategoryTable({children}) {
    

    return (
        <WidgetContent className="owner-manage-shop__widget-list-category">
            <div className="d-flex header">
                <div className="name">Tên danh mục</div>
                <div className="created">Tạo bởi</div>
                <div className="amount">Sản phẩm</div>
                <div className="control">Hiển thị Tắt/ Bật</div>
                <div className="action">Thao tác</div>
            </div>

            {children}
        </WidgetContent>
    );
}

export default CategoryTable;