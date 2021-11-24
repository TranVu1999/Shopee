import {combineReducers} from 'redux';

import accountReducer from '../../user/common/module/account/reducer';
import cartReducer from '../../user/common/module/cart/reducer';
import keywordReducer from '../../user/common/module/keyword/reducer';

const rootReducer = combineReducers({
    accountReducer,
    cartReducer,
    keywordReducer
});

export default rootReducer;