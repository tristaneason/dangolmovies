import React from 'react'
import { Provider } from 'react-redux'
import Thumbnail from '../components/Thumb.js'
import './App.css'

export default ({ reduxStore }) => (
    <Provider store={reduxStore}>
        <main className="app">
            <h1>Dang ’ol Movies</h1>
            <Thumbnail />
        </main>
    </Provider>
)
