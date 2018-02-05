import React, {Component} from 'react'
import FlatButton from 'material-ui/FlatButton'
import {blueGrey500} from  'material-ui/styles/colors'
import PropTypes from 'prop-types'
class Logout extends Component {
    render() {
        const {logOut} = this.props;
        return (
            <div>
                <FlatButton color={blueGrey500} label='Log out' onClick={logOut}/>
            </div>
        )
    }
}
Logout.propTypes = {
    logOut: PropTypes.func.isRequired
}

export default Logout
