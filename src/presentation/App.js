import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './Home';
import Favorites from './Favorites';
import './App.css';

export default ({ reduxStore }) => (
    <Provider store={reduxStore}>
        <Router>
            <main className="app container">
                <h1 className="text-center">Dang ’ol Movies</h1>
                <ul className="nav nav-tabs justify-content-center">
                    <li>
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/favorites">Favorites</Link>
                    </li>
                </ul>
                <Route path="/" exact component={Home} />
                <Route path="/favorites" component={Favorites} />
            </main>
        </Router>
    </Provider>
)
