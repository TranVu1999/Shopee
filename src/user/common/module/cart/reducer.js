import * as ActionTypes from './constants'

let initialState = {
    isLoading: true,
    cart: []
}

const cartReducer = (state = initialState, action) =>{
    const {type, payload} = action;
    

    switch(type){
        case ActionTypes.FETCH_PEDING:
            state.isLoading = true;
            return {...state}
        case ActionTypes.FETCH_FAIL:
            state.isLoading = false;
            state.cart = null;
            return {...state}

        case ActionTypes.FETCH_SUCCESS:
            state.isLoading = false;
            state.cart = [...payload];
            return {...state}

        default:
            return {...state}
    }
}

export default cartReducer