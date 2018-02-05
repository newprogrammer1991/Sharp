import {SIGN_UP, SIGN_IN, SUCCESS, LOG_OUT, REQUEST, FAIL} from '../constants'

const defaultState = {
    isLogged: false,
    error: {
        sigIn: '',
        signUp: ''
    },
    isLoading: false
}
export default (state = defaultState, action) => {
    const {type, payload, error} = action;
    switch (type) {
        case SIGN_IN + REQUEST:
        case SIGN_UP + REQUEST:
            return {...state, isLoading: true};
        case SIGN_IN + SUCCESS:
        case SIGN_UP + SUCCESS:
            const tmp = {...state, sigIn: '', signUp: ''};
            return {...state, error: tmp, isLogged: true, isLoading: false};
        case SIGN_IN + FAIL:
            const tmp1 = {...error, sigIn: error};
            return {...state, error: tmp1, isLoading: false};
        case SIGN_UP + FAIL:
            const tmp2 = {...error, signUp: error};
            return {...state, error: tmp2, isLoading: false};
        case LOG_OUT:
            return {...state, isLogged: false};
        default:
            return state

    }
}