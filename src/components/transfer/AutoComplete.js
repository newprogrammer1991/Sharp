import React, {Component} from 'react'
import Complete from 'material-ui/AutoComplete'
import {connect} from 'react-redux'
import {search} from '../../AC/index'
import PropTypes from 'prop-types'
class AutoComplete extends Component {
    constructor(props) {
        super(props)
    };


    handleDateInput = (searchText) => {
        this.props.input.onChange(searchText);
        this.props.search(searchText);
    };

    render() {
        const {label, input, meta: {touched, error}, users} = this.props;
        console.log(this.props);
        return (
            <div>
                <Complete
                    searchText={input.value}
                    hintText={label}
                    dataSource={users}
                    onUpdateInput={this.handleDateInput}
                    onNewRequest={({name}) => input.onChange(name)}
                    dataSourceConfig={{text: 'name', value: 'id'}}
                    errorText={touched && error}
                    {...input}
                />
            </div>
        )
    }
}
AutoComplete.propTypes = {
    //connect
    users: PropTypes.array.isRequired,
    search: PropTypes.func.isRequired
};

export default connect(state => ({
    users: state.recipient.searchedUsers,
}), {search})(AutoComplete)

