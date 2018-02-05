import React from 'react'
import PropTypes from 'prop-types'
const Error = (props) => {
    if (!props) return null;
    return <div className='error'><strong>{props.errorMessage}</strong></div>
}

Error.propTypes = {
    errorMessage: PropTypes.string.isRequired
}
export default Error