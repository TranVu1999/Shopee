import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import TitleContent from '../components/TitleContent';
import CategoryTable from '../features/Shop/CategoryTable';
import ListCategory from './../features/Shop/ListCategory';
import ListCategoryCanMove from './../features/Shop/ListCategoryCanMove';

// Theme
import {BorderColor} from './../theme';

const WidgetTable = styled.div`
    padding: 1.125rem 1.5rem 3rem;
`;

const WidgetTitleContent = styled.div`
    padding: 1.125rem 1.5rem;
    border-bottom: 1px solid ${BorderColor.mainColor};    

    h5{
        color: #333;
        font-size: 1.375rem;
        font-weight: 400;
    }
`;

const Button = styled.button`
    display: flex;
    align-items: center;

    margin: 0 .375rem;
    padding: .375rem 1rem;

    font-size: .875rem;
    color: #ee4d2d;

    border: 1px solid #ee4d2d;
    border-radius: 4px;

    span{
        margin-right: .5rem;
        font-size: 1.125rem;
    }
`;

const HighlightButton = styled(Button)`
    background-color: #ee4d2d;
    color: #fff;
`;

const DefaultButton = styled(Button)`
    border-color: #e5e5e5;
    color: #333;
`;

const WidgetControlEditList = styled.div`
    position: sticky;
    bottom: 0;

    padding: 1.125rem 1.5rem;

    background-color: #fff;
    box-shadow: 0 -2px 6px 0 rgba(0,0,0,.08);
    border-top: 1px solid ${BorderColor.mainColor};
`;

ShopCategory.propTypes = {
    
};

function ShopCategory(props) {
    // Data
    const [isReorderList, setIsReorderList] = React.useState(false);

    return (
        <section>
            <WidgetTitleContent className="d-flex align-items-center justify-content-between">
                <h5>Danh mục của Shop </h5>
                {isReorderList || <div className="d-flex">
                    <Button ><span aria-hidden="true" className="icon_genius"></span>Xem trước</Button>
                    <Button
                        onClick = {() => setIsReorderList(true)}
                    ><span aria-hidden="true" className="icon_comment_alt"></span>Điều chỉnh thứ tự</Button>
                    <HighlightButton><span aria-hidden="true" className="icon_plus"></span>Thêm danh mục</HighlightButton>
                </div>}
                
            </WidgetTitleContent>

            <div className="mb-3"></div>

            <WidgetTable>
                <CategoryTable>
                    {!isReorderList && <ListCategory/>}
                    {isReorderList && <ListCategoryCanMove/>}
                </CategoryTable>                
            </WidgetTable>

            {isReorderList && <WidgetControlEditList className="d-flex justify-content-end">
                <DefaultButton>Hủy</DefaultButton>
                <HighlightButton>Xác nhận</HighlightButton>
            </WidgetControlEditList>}
            
        </section>
    );
}

export default ShopCategory;