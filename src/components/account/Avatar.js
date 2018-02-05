import React from 'react'
import LetterAvatar  from 'material-ui/Avatar'
import AccountCircle from 'material-ui/svg-icons/action/account-circle'
import PropTypes from 'prop-types'
const Avatar = (props) => {
    return (
        <div className='user-description'>
            <LetterAvatar icon={<AccountCircle/>}/>
            <span className='name'>{props.name}</span>
        </div>)
}

Avatar.propTypes = {
    name: PropTypes.string
}


export default Avatar