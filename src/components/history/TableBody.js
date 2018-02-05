import React, {Component} from 'react'
import {TableCell, TableRow, TableBody as Body} from 'material-ui-next/Table'
import {withStyles} from 'material-ui-next/styles';
import PropTypes from 'prop-types'

const styles = {
    root: {
        color: 'red',
    },
};

class TableBody extends Component {
    constructor(props) {
        super(props)
    }

    getBody = () => {
        return this.props.transactions.map(({id, date, username, amount, balance}) => {
            return (<TableRow key={id}>
                <TableCell>
                    {date}
                </TableCell>
                <TableCell>
                    {username}
                </TableCell>
                <TableCell className={amount < 0 ? this.props.classes.root : ''}>
                    {amount}
                </TableCell>
                <TableCell>
                    {balance}
                </TableCell>
            </TableRow>)
        })
    }

    render() {
        return (
            <Body>
            {this.getBody()}
            </Body>)
    }

}

TableBody.PropTypes = {
    transactions: PropTypes.array.isRequired
}

export default withStyles(styles)(TableBody)


