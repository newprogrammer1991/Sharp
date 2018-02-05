import {SEARCH, SUCCESS, FAIL} from '.././constants'
const defaultState = {
    searchedUsers: [],
    isLoading: false,
    error: '',
}

export default (state = defaultState, action) => {
    const {payload, type, error} = action;
    switch (type) {
        case SEARCH:
            return {...state, isLoading: true};
        case SEARCH + SUCCESS:
            return {...state, searchedUsers: payload.response};
        case SEARCH + FAIL:
            return {...state, isLoading: false, error: error};
        default:
            return state
    }
}
