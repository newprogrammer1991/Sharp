import React, {Component} from 'react'
import {getHistory} from '../../AC'
import {connect} from 'react-redux'
import Paper from 'material-ui/Paper'
import HistoryTable from './HistoryTable'
import {withStyles} from 'material-ui-next/styles';
import Loader from '../common/Loader'
import PropTypes from 'prop-types'

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    }
});

class History extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getHistory();
    }

    render() {
        const {classes} = this.props;
        const {isLoading, transactions} = this.props;
        if (isLoading) return <Loader/>
        if (!transactions.length) return <div>You don't have transactions yet</div>
        return (
            <Paper className={classes.root}>
                <HistoryTable transactions={transactions}/>
            </Paper>
        )
    }
}

History.propTypes = {
    //connect
    isLoading: PropTypes.bool.isRequired,
    transactions: PropTypes.array.isRequired,
    //style
    classes:PropTypes.object
}


export default withStyles(styles)(connect(state => ({
    isLoading: state.history.isLoading,
    transactions: state.history.transactions
}), {getHistory})(History))
