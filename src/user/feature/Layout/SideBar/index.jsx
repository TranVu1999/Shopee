import React, {useState} from 'react';
import PropTypes from 'prop-types';

// Components
import SidebarWidget from '../../../common/component/SidebarWidget';

// CSS
import './index.scss';

SideBar.propTypes = {
    choseCategory: PropTypes.number,
    listCategory: PropTypes.array,
};

SideBar.defaultProps = {
    choseCategory: 0,
    listCategory: []
}

function SideBar(props) {
    const {listCategory, choseCategory} = props;

    const [isShowMoreProductCategory] = useState(listCategory.length > 0);

    const renderListCategory = () => {
        return listCategory.slice(0, 6).map((item, index) =>{
            return (
                <li 
                    key = {item} 
                    className = {choseCategory === index ? "active" : ""}
                >
                    <span>{item}</span>
                </li>
            );
        });
    }

    return (
        <div className = "sidebar-content">
            
            {/* Product Category */}
            <div className="mb-20 sidebar-widget">
                <SidebarWidget icon = {(<span aria-hidden="true" className="mr-2 icon_ul"></span>)} title = "Tat ca danh muc"/>

                <ul className="list-category">
                    {renderListCategory()}
                    {isShowMoreProductCategory ? 
                        (<li>
                            <span>Xem them <span aria-hidden="true" className="arrow_carrot-down"></span></span>
                        </li>) : 
                        (<li>
                            <span>Rut gon <span aria-hidden="true" className="arrow_carrot-up"></span></span>
                        </li>)
                    }
                </ul>
            </div>


            {/* Product Category */}
            <div className="sidebar-widget">
                <SidebarWidget icon = {(<span aria-hidden="true" className="mr-2 icon_hourglass"></span>)} title = "Bo loc tim kiem"/>

                <ul className="list-category">
                    {renderListCategory()}
                    {isShowMoreProductCategory ? 
                        (<li>
                            <span>Xem them <span aria-hidden="true" className="arrow_carrot-down"></span></span>
                        </li>) : 
                        (<li>
                            <span>Rut gon <span aria-hidden="true" className="arrow_carrot-up"></span></span>
                        </li>)
                    }
                </ul>
            </div>
            
        </div>
    );
}

export default SideBar;