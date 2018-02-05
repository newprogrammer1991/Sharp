import React, {Component} from 'react'
import history from './history'
import {ConnectedRouter} from 'react-router-redux'
import {Provider} from 'react-redux'
import Root from './components/Root'
import store from './store/index'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './less/style.less'
class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <MuiThemeProvider>
                        <Root/>
                    </MuiThemeProvider>
                </ConnectedRouter>
            </Provider>
        )
    }
}
export default App
