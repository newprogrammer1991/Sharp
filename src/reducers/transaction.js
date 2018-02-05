import {TRANSACTION, REQUEST, SUCCESS, FAIL, FINISH} from '../constants'
const defaultState = {
    isSucceed: false,
    error: '',
    isLoading: false
}
export default (state = defaultState, action) => {
    const {type, payload, error} = action;

    switch (type) {
        case TRANSACTION + REQUEST: {
            return {...state, isLoading: true, isSucceed: false, error: ''}
        }
        case TRANSACTION + SUCCESS: {
            console.log(payload);
            return {...state, isSucceed: true}
        }
        case TRANSACTION + FAIL: {
            return {...state, isLoading: false, error: error}
        }
        default:
            return state
    }
}