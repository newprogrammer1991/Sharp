import React, {Component} from 'react'
import {Link, Route} from 'react-router-dom'
import SignInForm from '../auth/SignInForm'
import SignUpForm from '../auth/SignUpForm'
import RaisedButton from 'material-ui/RaisedButton'
import {Paper} from 'material-ui'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {signUp, signIn} from '../../AC'
class AuthPage extends Component {
    render() {
        const {error} = this.props;
        return (
            <div className="auth">
                <h1 className="title">Welcome to PW</h1>
                <div className="auth-box">
                    <Paper>
                        <Link to='/auth/signUp'><RaisedButton label='Join for free'/></Link>
                        <Link to="/auth/signIn"><RaisedButton label='Sign in'/></Link>
                        <Route path={'/auth/signUp'}
                               render={() => <SignUpForm errorMessage={error.signUp} onSubmit={this.handleSignUp}/>}/>
                        <Route path={'/auth/signIn'}
                               render={() => <SignInForm errorMessage={error.sigIn} onSubmit={this.handleSignIn}/>}/>
                    </Paper>
                </div>
            </div>
        )
    };

    handleSignUp = ({username, email, password}) => {
        this.props.signUp({username, email, password})
    };
    handleSignIn = (values) => {
        this.props.signIn(values);
    };

}

AuthPage.propTypes = {
    //connect
    error: PropTypes.object.isRequired,
    signUp: PropTypes.func.isRequired,
    signIn: PropTypes.func.isRequired

}

export default connect(state => ({
    error: state.auth.error
}), {signUp, signIn})(AuthPage)
