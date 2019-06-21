import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from '../store';

import Landingpage from './LandingPage';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Route exact path="/" component={Landingpage} />
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;