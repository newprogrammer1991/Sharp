import React from 'react'
import EuroSymbol from 'material-ui/svg-icons/action/euro-symbol';
import PropTypes from 'prop-types'
const Balance = (props) => {
    return (<span>Balance:<EuroSymbol className='balance-symbol'/>{props.balance}</span>)
}

Balance.propTypes = {
    balance: PropTypes.number
}

export default Balance