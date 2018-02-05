import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducers'
import logger from '../middlewares/logger'
import {routerMiddleware} from 'react-router-redux'
import history from '../history'
import thunk from 'redux-thunk'

const enhancer = applyMiddleware(thunk, routerMiddleware(history), logger);

const store = createStore(reducer, {}, enhancer);

//dev only
window.store = store;

export default store
