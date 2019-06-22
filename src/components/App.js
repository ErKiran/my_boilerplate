import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Landingpage from './LandingPage';
import Login from './Auth/Login';
import Signup from './Auth/Signup';
import ResetPassword from './Auth/ResetPassword';
import store from '../store';


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Route exact path="/" component={Landingpage} />
                    </div>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/reset_password" component={ResetPassword} />
                </Router>
            </Provider>
        );
    }
}

export default App;