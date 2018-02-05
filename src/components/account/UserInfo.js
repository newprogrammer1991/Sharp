import React from 'react'
import Avatar from './Avatar'
import Logout from '../auth/Logout'
import Balance from './Balance'
import PropTypes from 'prop-types'


const UserInfo = ({name, balance, logOut}) => {
    return (
        <div className='user'>
            <div className="user-box">
                <Avatar name={name}/>
                <Balance balance={balance}/>
            </div>
            <Logout logOut={logOut}/>
        </div>
    )
}

UserInfo.PropTypes = {
    name: PropTypes.string.isRequired,
    balance: PropTypes.number.isRequired,
    logOut: PropTypes.func.isRequired
}


export default UserInfo