import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import AuthPage from './routes/AuthPage'
import ProtectedRoute from './common/ProtectedRoute'
import AccountPage from './routes/AccountPage'
import {connect} from 'react-redux'
import {authCheckSession} from '../AC'
class Root extends Component {
    componentDidMount() {
    }

    render() {
        return (
            <div>
                <Route path='/auth' component={AuthPage}/>
                <ProtectedRoute path="/account" component={AccountPage}/>
            </div>

        )
    }
}

export default connect(null, {authCheckSession}, null, {pure: false})(Root)