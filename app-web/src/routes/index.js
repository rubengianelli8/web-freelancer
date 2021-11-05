import React from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' exact>
                    asdasd
                </Route>
                <Route path='/hola'>
                    asdasd2
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes
