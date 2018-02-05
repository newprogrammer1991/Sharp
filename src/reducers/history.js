import {HISTORY, REQUEST, FAIL, SUCCESS} from '../constants'

const defaultState = {
    isLoading: false,
    error: '',
    transactions: []
}
export default (state = defaultState, action) => {
    const {type, payload,error} = action;
    switch (type) {
        case HISTORY + REQUEST: {
            return {...state, isLoading: true}
        }
        case HISTORY + SUCCESS: {
            const tmp=[...state.transactions];
            return {...state, isLoading: false, transactions: payload.response.trans_token}
        }
        case HISTORY + FAIL: {
            return {...state, isLoading: false,error:error}
        }
        default: {
            return state
        }
    }
}