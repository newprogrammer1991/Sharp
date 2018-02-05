import React, {Component} from 'react'
import {Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux';

class ProtectedRoute extends Component {
    render() {
        const {component, ...rest} = this.props;

        return <Route {...rest} render={this.renderProtected}></Route>
    }

    renderProtected = (routeProps) => {
        const {component: ProtectedComponent} = this.props;
        return localStorage.getItem('token') ? <ProtectedComponent {...routeProps}/> : <Redirect to='/auth'/>
    }
}
export default ProtectedRoute
