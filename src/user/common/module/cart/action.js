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