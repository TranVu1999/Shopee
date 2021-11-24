import * as ActionTypes from './constants';
import productKeywordApi from '../../../../api/productKeywordAPI';

export const actGetListMatched = (keysearch) =>{

    return (dispatch) => {
        dispatch(dispatchLoading());

        productKeywordApi.getListMatched(keysearch)
        .then(res => {
            if(res.success) {
                dispatch(dispatchSuccess(res.listProdKeyword))
            }
        })
        .catch(err => {
            console.log({err});
            dispatch(dispatchFail());
        })
    }
}

export const actChangeKeysearch = keysearch => {
    return {
        type: ActionTypes.CHANGE_KERSEARCH,
        payload: keysearch
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