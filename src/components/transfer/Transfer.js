import React, {Component} from 'react'
import AutoComplete from './AutoComplete'
import RaisedButton from 'material-ui/RaisedButton'
import {Field, reduxForm} from 'redux-form'
import validate from '../../helpers/validate'
import Error from '../common/Error'
import RenderTextField from '../common/RenderTextField'
import PropTypes from 'prop-types'
class Transfer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {handleSubmit, errorMessage} = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <Field
                    name="name"
                    label="Search recipient"
                    type='text'
                    component={AutoComplete}/>
                <Field
                    name="sum"
                    label="Enter Sum"
                    component={RenderTextField}
                    type='number'/>
                <Error errorMessage={errorMessage}/>
                <RaisedButton type="submit" label='Send Money'/>
            </form>
        )
    };
}
Transfer.propTypes = {
    errorMessage: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
    form: 'createTransaction',
    validate
})(Transfer)



