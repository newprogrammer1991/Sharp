import React, {Component} from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import RenderTextField from '../common/RenderTextField'
import PropTypes from 'prop-types'
import validate from '../../helpers/validate'
import {connect} from  'react-redux'
import Error from '../common/Error'
import {Field, reduxForm} from 'redux-form'
class SignInForm extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {handleSubmit, errorMessage} = this.props;
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field name="email" label="Email" component={RenderTextField} type='email'/>
                    </div>
                    <div>
                        <Field name="password" label="Password" component={RenderTextField} type="password"/>
                    </div>
                    <Error errorMessage={errorMessage}/>
                    <RaisedButton
                        type="submit"
                        label={'Sign In'}/>
                </form>
            </div>
        )
    }
}

SignInForm.propTypes = {
    errorMessage: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired
}


SignInForm = connect(state => ({
        isLogged: state.auth.isLogged
    })
)(SignInForm);

export default reduxForm({
    form: 'signIn',
    validate
})(SignInForm);
