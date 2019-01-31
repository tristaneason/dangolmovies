import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './Home';
import Favorites from './Favorites';
import './App.css';
import banner from '../static/boomhauer.jpg';

export default ({ reduxStore }) => (
    <Provider store={reduxStore}>
        <Router>
            <div>
                <h1 className="text-center">Dang ’ol Movies</h1>
                <img className="banner" src={banner} alt="banner" />
                <main className="app container">
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
            </div>
        </Router>
    </Provider>
)
