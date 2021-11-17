import * as ActionTypes from './constants';
import cartApi from '../../../../api/cartAPI';

export const actInitCart = () =>{

    return (dispatch) => {
        dispatch(dispatchLoading());

        cartApi.get()
        .then(res => {
            if(res.success) {
                dispatch(dispatchSuccess(res.cart))
            }
        })
        .catch(err => {
            console.log({err});
            dispatch(dispatchFail());
        })
    }
}

export const actUpdateCart = (cart, cartId) => {

    return (dispatch) => {
        dispatch(dispatchLoading());
        cartApi.update(cart, cartId)
        .then(res => {
            if(res.success) {
                console.log({res})
                dispatch(dispatchSuccess(res.cart))
            }
        })
        .catch(err => {
            console.log({err});
            dispatch(dispatchFail());
        })
    }
}

export const actDeleteCart = (cartId) => {

    return (dispatch) => {
        dispatch(dispatchLoading());
        cartApi.delete(cartId)
        .then(res => {
            if(res.success) {
                dispatch(dispatchSuccess(res.cart))
            }
        })
        .catch(err => {
            console.log({err});
            dispatch(dispatchFail());
        })
    }
}

export const actDeleteMultiCartItem = (listCartItem) => {

    return (dispatch) => {
        dispatch(dispatchLoading());
        cartApi.deleteMultiCartItem(listCartItem)
        .then(res => {
            if(res.success) {
                dispatch(dispatchSuccess(res.cart))
            }
        })
        .catch(err => {
            console.log({err});
            dispatch(dispatchFail());
        })
    }
}

export const actChoseCartItem = cartItemId => {
    return {
        type: ActionTypes.CHOSE_CART_ITEM,
        payload: cartItemId
    }  
}

export const actUpdateAllCartItemInShop = shopId => {
    return {
        type: ActionTypes.UPDATE_ALL_CART_ITEM_IN_SHOP,
        payload: shopId
    }  
}

export const actUpdateAllCartItem = shopId => {
    return {
        type: ActionTypes.UPDATE_ALL_CART_ITEM,
        payload: shopId
    }  
}

export const actAttachMessage = dataMessage => {
    return {
        type: ActionTypes.ATTACH_MESSAGE,
        payload: dataMessage
    }  
}

export const actAddToCart = dataCart => {
    return (dispatch) => {
        dispatch(dispatchLoading());

        cartApi.add(dataCart)
        .then(res => {
            if(res.success) {
                dispatch(dispatchSuccess(res.cart))
            }
        })
        .catch(err => {
            console.log({err});
            dispatch(dispatchFail());
        })
    }
}

const dispatchSuccess = data => {
    return {
        type: ActionTypes.FETCH_SUCCESS,
        payload: data
    }
}

const dispatchLoading = () => {
    return {
        type: ActionTypes.FETCH_PEDING,
        payload: true
    }
}

const dispatchFail = () => {
    return {
        type: ActionTypes.FETCH_FAIL,
        payload: false
    }
}