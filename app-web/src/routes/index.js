import React from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from '../components/Nav';
const Routes = () => {
    return (
        <Router>
            <Nav />
            <Switch>
                <Route path='/' exact>
                    asdasd
                </Route>
                <Route path='/nosotros'>
                    asdasd2
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes
