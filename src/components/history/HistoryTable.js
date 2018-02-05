import React, {Component} from 'react'
import Table from 'material-ui-next/Table'
import TableHeadR from './TableHead'
import TableBody from './TableBody'
import sort from '../../helpers/sort'
import PropTypes from 'prop-types'
class HistoryTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orderBy: 'amount',
            order: 'asc',
            sorted: []
        }
    }

    componentWillMount() {
        this.setState({
            sorted: sort(this.props.transactions, this.state.order, this.state.orderBy)
        })
    };

    handleSort = (property) => {
        const orderBy = property;
        let order = 'desc';
        if (this.state.orderBy === property && this.state.order === 'desc') {
            order = 'asc';
        }
        const sorted = sort(this.state.sorted, order, orderBy);
        this.setState({order, orderBy, sorted});
    };


    render() {
        return (
            <div>
                <Table>
                    <TableHeadR orderBy={this.state.orderBy} order={this.state.order} handleSort={this.handleSort}/>
                    <TableBody transactions={this.state.sorted}/>
                </Table>
            </div>
        )

    }
}


HistoryTable.PropTypes = {
    transactions: PropTypes.array.isRequired
};

export default HistoryTable
