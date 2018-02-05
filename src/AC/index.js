import {
    SIGN_UP,
    USER_INFO,
    SIGN_IN,
    SEARCH,
    TRANSACTION,
    HISTORY,
    REQUEST,
    SUCCESS,
    FAIL,
    LOG_OUT,
} from '../constants'
import {replace} from 'react-router-redux'
import checkStatus from '../helpers/checkStatusApi'
import {config} from '../config'
import {reset} from 'redux-form'




export function signUp({username, email, password}) {
    const callApi = 'http://193.124.114.46:3001/users/';
    const body = `username=${username}&email=${email}&password=${password}`;
    return (dispatch) => {
        dispatch({
            type: SIGN_UP + REQUEST
        }),
            fetch(callApi, {...config, body})
                .then(res => checkStatus(res))
                .then(response => {
                    const jwt = response.id_token;
                    localStorage.setItem('token', jwt);
                    dispatch({
                        type: SIGN_UP + SUCCESS,
                        payload: {jwt}
                    })
                    dispatch(replace('/account'))
                })
                .catch(error => {
                    dispatch({
                        type: SIGN_UP + FAIL,
                        error: error.message

                    })
                })
    }
}
export function signIn({email, password}) {
    const body = `email=${email}&password=${password}`;
    const callApi = 'http://193.124.114.46:3001/sessions/create';
    return (dispatch => {
        dispatch({
            type: SIGN_IN + REQUEST
        })
        fetch(callApi, {...config, body})
            .then(res => checkStatus(res))
            .then(response => {
                const jwt = response.id_token;
                localStorage.setItem('token', jwt);
                dispatch({
                    type: SIGN_IN + SUCCESS,
                    payload: {jwt}
                })
                dispatch(replace('/account'))
            })
            .catch(error => {
                dispatch({
                    type: SIGN_IN + FAIL,
                    error: error.message
                });
            })
    })
}

export function logOut() {
    localStorage.removeItem('token');
    return dispatch => {
        dispatch({
            type: LOG_OUT
        })
        dispatch(replace('/auth'))
    }

}

/*export const authCheckSession = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logOut())
        }
        else {
            dispatch({
                type: SIGN_IN + SUCCESS,
                payload: token
            })
        }
    }
};*/

export const getLoggedInfo = () => {
    const token = localStorage.getItem('token');
    const config = {
        headers: {'Authorization': `Bearer ${token}`}
    }
    const callApi = 'http://193.124.114.46:3001/api/protected/user-info';
    return dispath => {
        fetch(callApi, config)
            .then(res => {
                dispath({
                    type: USER_INFO
                })
                return res.json();
            })
            .then(response => {
                const userInfo = response['user_info_token'];
                dispath({
                    type: USER_INFO + SUCCESS,
                    payload: {userInfo}
                })
            })
            .catch(error => {
                dispath({
                    type: USER_INFO + FAIL,
                    error: error.message
                })
            })
    }
};

export function search(text) {
    const token = localStorage.getItem('token');
    const callApi = 'http://193.124.114.46:3001/api/protected/users/list';
    const config = {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': `Bearer ${token}`},
        body: `filter=${text}`
    };
    return dispatch => {
        dispatch({
            type: SEARCH
        })
        fetch(callApi, config)
            .then(res => checkStatus(res))
            .then(response => dispatch({type: SEARCH + SUCCESS, payload: {response}}))
            .catch(error => dispatch({type: SEARCH + FAIL, error: error.message}))
    }
};

export function transaction(name, amount) {
    const token = localStorage.getItem('token');
    const callApi = 'http://193.124.114.46:3001/api/protected/transactions';
    const config = {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': `Bearer ${token}`},
        body: `name=${name}&amount=${amount}`
    };
    return dispatch => {
        dispatch({
            type: TRANSACTION + REQUEST
        });
        dispatch(reset('createTransaction'));
        fetch(callApi, config)
            .then(res => checkStatus(res))
            .then(response => {
                dispatch({
                    type: TRANSACTION + SUCCESS,
                    payload: {response}
                })
            })
            .catch(error => dispatch({
                type: TRANSACTION + FAIL,
                error: error.message
            }))
    }
}

export const getHistory = () => {
    const callApi = 'http://193.124.114.46:3001/api/protected/transactions';
    const token = localStorage.getItem('token');
    const config = {
        headers: {'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': `Bearer ${token}`}
    };
    return dispatch => {
        dispatch({
            type: HISTORY + REQUEST
        })
        fetch(callApi, config)
            .then(res => checkStatus(res))
            .then(response => {
                dispatch({
                    type: HISTORY + SUCCESS,
                    payload: {response}
                })
            })
            .catch(error => {
                dispatch({
                    type: HISTORY + FAIL,
                    error: error.message
                })
            })
    }
};
