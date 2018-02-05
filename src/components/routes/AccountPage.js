import React, {Component} from 'react'
import NavBar from '../account/NavBar'
import SideBar from '../common/SideBar'
import Transfer from '../transfer/Transfer'
import History from '../history/History'
import Loader from '../common/Loader'
import {connect} from 'react-redux'
import AccountHome from '../account/AccountHome'
import PropTypes from 'prop-types'
import {Route} from 'react-router-dom'
import {getLoggedInfo, logOut, transaction} from '../../AC'
import {Snackbar} from 'material-ui'
class AccountPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpenSnack: false
        }
    }

    componentDidMount() {
        this.props.getLoggedInfo();
    };

    componentWillReceiveProps(nextProps) {
        if (!this.props.isSucceed && nextProps.isSucceed)
            this.setState({
                isOpenSnack: true
            })
    };


    render() {
        const {match, user: {name}, balance, logOut, isLoading, errorMessage} = this.props;
        if (isLoading) return <Loader/>
        return (
            <div>
                <NavBar name={name} balance={balance} logOut={logOut}/>
                <div className='main'>
                    <div className='left'>
                        <SideBar match={match}/>
                    </div>
                    <div className="right">
                        <Route exact={true} path={`${match.url}`} component={AccountHome}/>
                        <Route path={`${match.url}/transfer`}
                               render={() => <Transfer onSubmit={this.handleTransaction}
                                                       errorMessage={errorMessage}/>}/>
                        <Route path={`${match.url}/history`} component={History}/>
                        <Snackbar message="Transaction Succeed" onRequestClose={this.handleRequestClose}
                                  open={this.state.isOpenSnack} autoHideDuration={3000}/>
                    </div>
                </div>
            </div>
        )
    }

    handleTransaction = ({name, sum}) => {
        this.props.transaction(name, sum);
    };
    handleRequestClose = () => {
        this.setState({
            isOpenSnack: false
        })
    }
}

AccountPage.propTypes = {
    //connect
    isLoading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    balance: PropTypes.number,
    isSucceed: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string.isRequired,
    getLoggedInfo: PropTypes.func.isRequired,
    logOut: PropTypes.func.isRequired,
    transaction: PropTypes.func.isRequired,
    //route
    match: PropTypes.object.isRequired

};


export default connect(state => ({
    isLoading: state.user.isLoading,
    user: state.user.data,
    balance: state.user.balance,
    isSucceed: state.transaction.isSucceed,
    errorMessage: state.transaction.error
}), {getLoggedInfo, logOut, transaction})(AccountPage)


