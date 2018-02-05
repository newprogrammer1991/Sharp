import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Field, reduxForm} from 'redux-form'
import RenderTextField from '../common/RenderTextField'
import Error from '../common/Error'
import RaisedButton from 'material-ui/RaisedButton'
import validate from '../../helpers/validate'

class SignUpForm extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {handleSubmit, errorMessage} = this.props;
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field name="username" label="Name" component={RenderTextField} type='text'/>
                    </div>
                    <div>
                        <Field name="email" label="Email" component={RenderTextField} type='email'/>
                    </div>
                    <div>
                        <Field name="password" label="Password" component={RenderTextField} type="password"/>
                    </div>
                    <div>
                        <Field name="password1" label="Confirm Password" component={RenderTextField} type="password"/>
                    </div>
                    <Error errorMessage={errorMessage}/>
                    <RaisedButton type="submit" label='Join'/>
                </form>
            </div>
        )
    }
}

SignUpForm.propTypes = {
    errorMessage: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired
}


export default reduxForm({
    form: 'signUp',
    validate
})(SignUpForm)