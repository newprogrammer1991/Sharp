import React, {Component} from 'react'
import {TableCell, TableRow, TableHead, TableSortLabel} from 'material-ui-next/Table'
import PropTypes from 'prop-types'
class TableHeadR extends Component {

    createSortHandler = property => event => {
        const {handleSort} = this.props;
        event.preventDefault();
        handleSort(property)
    }

    getBody = () => {
        const {orderBy, order} = this.props;
        return columnData.map(column => {
            return ( <TableCell
                key={column.id}
                numeric={column.numeric}
                padding={column.disablePadding ? 'none' : 'default'}
                sortDirection={orderBy === column.id ? order : false}>
                <TableSortLabel
                    active={orderBy === column.id}
                    direction={order}
                    onClick={this.createSortHandler(column.id)}
                >
                    {column.label}
                </TableSortLabel>
            </TableCell>)
        })
    };

    render() {
        return (
            <TableHead>
                <TableRow>
                    {this.getBody()}
                </TableRow>
            </TableHead>

        )
    }
}

TableHeadR.propTypes = {
    handleSort: PropTypes.func.isRequired,
    orderBy: PropTypes.string.isRequired,
    order: PropTypes.string.isRequired
}

export default TableHeadR


const columnData = [
    {id: 'date', numeric: false, disablePadding: false, label: 'date'},
    {id: 'username', numeric: false, disablePadding: false, label: 'username'},
    {id: 'amount', numeric: false, disablePadding: false, label: 'amount'},
    {id: 'balance', numeric: false, disablePadding: false, label: 'balance'},
];
