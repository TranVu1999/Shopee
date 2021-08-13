import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Component
import SwitchBox from '../../components/SwitchBox';

const WidgetContent = styled.div`
    padding: 0 .875rem;
`;

ListCategory.propTypes = {
    
};

function ListCategory(props) {
    return (
        <WidgetContent>
            <div className="d-flex align-items-center category-item">
                <div className="name">New Arrival </div>
                <div className="create">Hệ thống | Hàng mới về</div>
                <div className="amount">0</div>
                    
                <div className="control">
                    <SwitchBox/>
                </div>

                <div className="action">
                    <button className="transparent">Chi tiết</button>
                </div>
            </div>
            <div className="d-flex align-items-center category-item">
                <div className="name">New Arrival </div>
                <div className="create">Hệ thống | Hàng mới về</div>
                <div className="amount">0</div>
                    
                <div className="control">
                    <SwitchBox/>
                </div>

                <div className="action">
                    <button className="transparent">Chi tiết</button>
                </div>
            </div>
            <div className="d-flex align-items-center category-item">
                <div className="name">New Arrival </div>
                <div className="create">Hệ thống | Hàng mới về</div>
                <div className="amount">0</div>
                    
                <div className="control">
                    <SwitchBox/>
                </div>

                <div className="action">
                    <button className="transparent">Chi tiết</button>
                </div>
            </div>
            <div className="d-flex align-items-center category-item">
                <div className="name">New Arrival </div>
                <div className="create">Hệ thống | Hàng mới về</div>
                <div className="amount">0</div>
                    
                <div className="control">
                    <SwitchBox/>
                </div>

                <div className="action">
                    <button className="transparent">Chi tiết</button>
                </div>
            </div>
            <div className="d-flex align-items-center category-item">
                <div className="name">New Arrival </div>
                <div className="create">Hệ thống | Hàng mới về</div>
                <div className="amount">0</div>
                    
                <div className="control">
                    <SwitchBox/>
                </div>

                <div className="action">
                   <button className="transparent">Chi tiết</button>
                </div>
            </div>
        </WidgetContent>
    );
}

export default ListCategory;