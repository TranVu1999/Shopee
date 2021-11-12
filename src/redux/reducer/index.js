import {combineReducers} from 'redux';

import accountReducer from '../../user/common/module/account/reducer';
import cartReducer from '../../user/common/module/cart/reducer';

const rootReducer = combineReducers({
    accountReducer,
    cartReducer
});

export default rootReducer;