import React from 'react'
import TextField from 'material-ui/TextField'
import PropTypes from 'prop-types'
const RenderTextField = (props) => {
    const {label, type, input, meta: {touched, error}} = props;
    return (
        <TextField
            floatingLabelText={label}
            errorText={touched && error}
            type={type}
            {...input}/>
    )

}

RenderTextField.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    input: PropTypes.object.isRequired,
    meta: PropTypes.object.isRequired
}

export default RenderTextField