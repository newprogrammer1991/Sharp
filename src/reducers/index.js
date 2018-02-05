import auth from './auth'
import user from './user'
import history from './history'
import recipient from './recipient'
import transaction from './transaction'
import {reducer as formReducer} from 'redux-form'
import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
export default combineReducers({
    auth, user, router: routerReducer, recipient, history, transaction,
    form: formReducer
})
