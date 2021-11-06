import React from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from '../components/Nav';
import Home from '../screens/Home';

const Routes = () => {
    return (
        <Router>
            <Nav />
            <Switch>
                <Route path='/' exact component={Home}/>


                <Route path='/nosotros'>
                    asdasd2
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes
