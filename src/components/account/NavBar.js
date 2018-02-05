import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar';
import UserInfo from './UserInfo'
import PropTypes from 'prop-types'
class NavBar extends Component {
    render() {
        const {name, balance, logOut} = this.props;
        return (
            <AppBar
                title='PW'
                showMenuIconButton={false}
                iconElementRight={<UserInfo name={name} balance={balance} logOut={logOut}/>}>
            </AppBar>
        )
    }
}


NavBar.PropTypes = {
    name: PropTypes.string.isRequired,
    balance: PropTypes.number.isRequired,
    logout: PropTypes.func.isRequired
}

export default  NavBar


//