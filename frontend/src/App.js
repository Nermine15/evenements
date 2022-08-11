import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './containers/Home';
import Login from './containers/Login';
import Signup from './containers/Signup';
import Activate from './containers/Activate';
import ResetPassword from './containers/ResetPassword';
import ResetPasswordConfirm from './containers/ResetPasswordConfirm';
import Facebook from './containers/Facebook';
import Google from './containers/Google';
import ShowEvents from './components/evenements';
import AddEvents from './components/AddEvents';
import DetailEvent  from './components/DetailEvent';
import UpdateEvent from './components/updateEvent';
import { Provider } from 'react-redux';
import store from './store';

import Layout from './hocs/Layout';

const App = () => (
    <Provider store={store}>
        <Router>
            <Layout>
                <Switch>
                    <Route exact path='/' component={ShowEvents} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/signup' component={Signup} />
                    <Route exact path='/facebook' component={Facebook} />
                    <Route exact path='/google' component={Google} />
                    <Route exact path='/reset-password' component={ResetPassword} />
                    <Route exact path='/password/reset/confirm/:uid/:token' component={ResetPasswordConfirm} />
                    <Route exact path='/activate/:uid/:token' component={Activate} />
                    <Route exact path='/events' component={ShowEvents} />
                    <Route exact path='/AjouterEvents' component={AddEvents} />
                    <Route exact path='/:id/' component={DetailEvent} />
                    <Route exact path="/:id/update" component={UpdateEvent} />
                </Switch>
            </Layout>
        </Router>
    </Provider>
);

export default App;