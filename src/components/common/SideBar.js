import React from 'react'
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types'
const SideBar = (props) => {
    const {match} = props;
    return (
        <div className="side-bar">
            <div className="side-bar_item">
                <NavLink
                    activeClassName={'active'}
                    to={`${match.url}/transfer`}>Transaction</NavLink>
            </div>
            <div className="side-bar_item">
                <NavLink
                    activeClassName={'active'}
                    to={`${match.url}/history`}>History</NavLink>
            </div>
        </div>
    )
}

SideBar.propTypes = {
    match: PropTypes.object.isRequired
}

export default SideBar

