import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import { Provider } from 'react-redux'
import Home from './Home'
import Favorites from './Favorites'
import './App.css'

export default ({ reduxStore }) => (
    <Provider store={reduxStore}>
        <Router>
            <main className="app">
                <h1>Dang ’ol Movies</h1>

                <Link to="/">Home</Link>
                <Link to="/favorites">Favorites</Link>

                <Route path="/" exact component={Home} />
                <Route path="/favorites" component={Favorites} />
            </main>
        </Router>
    </Provider>
)
