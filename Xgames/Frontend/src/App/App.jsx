import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as serviceWorker from '../serviceWorker';

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../components/PrivateRoute';
import { CLoginPage } from '../components/sections/LoginPage';
import { CRegisterPage } from '../components/sections/RegisterPage';

import HomeView from '../components/sections/HomeView/HomeView';
import SearchView from '../components/sections/SearchView/SearchView';
//import NewGameView from '../components/sections/NewGameView/NewGameView';

class App extends React.Component {
    constructor(props) {
        super(props);

        history.listen((location, action) => {
            // clear alert on location change
            this.props.clearAlerts();
        });
    }
    render() {
        const { alert } = this.props;
        return (
            <div className="jumbotron">
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">
                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        <React.StrictMode>
                            <Router history={history}>                                                  
                                <Switch>
                                    <Route exact path="/"> <HomeView/></Route>
                                    <Route path="/login" component={CLoginPage} />
                                    <Route path="/register" component={CRegisterPage} />
                                    
                                    <Route path="/search"><SearchView /></Route>
                                    <Redirect from="*" to="/" />
                                </Switch>
                            </Router>
                        </React.StrictMode>
                    </div>
                </div>
            </div>
        );
    }
}

function mapState(state) {
    const { alert } = state;
    return { alert };
}

const actionCreators = {
    clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };