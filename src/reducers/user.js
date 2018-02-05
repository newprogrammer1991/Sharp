import {USER_INFO, SUCCESS, FAIL, TRANSACTION} from '../constants'

const defaultState = {
    isLoading: false,
    data: {},
    error: '',
    balance: null
}
export default(state = defaultState, action) => {
    const {type, payload, error} = action;
    switch (type) {
        case USER_INFO:
            return {...state, isLoading: true};
        case USER_INFO + SUCCESS:
            console.log(payload.userInfo);
            return {...state, isLoading: false, data: payload.userInfo, balance: payload.userInfo.balance};
        case USER_INFO + FAIL:
            return {...state, isLoading: false, error: error};
        case TRANSACTION + SUCCESS:
            return {...state, balance: payload.response.trans_token.balance};
        default:
            return state

    }
}
