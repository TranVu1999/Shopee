import * as ActionTypes from './constants'

let initialState = {
    username: "",
    avatar: ""
}

const accountReducer = (state = initialState, action) =>{
    const {type, payload} = action;

    switch(type){
        case ActionTypes.INIT_ACCOUNT:

            state.username = payload.username;
            state.avatar = payload.avatar;
            
            return {...state}

        default:
            return {...state}
    }
}

export default accountReducer