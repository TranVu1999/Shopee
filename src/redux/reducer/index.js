import {combineReducers} from 'redux';

import accountReducer from '../../user/common/module/account/reducer';

const rootReducer = combineReducers({
    accountReducer
});

export default rootReducer;