import React from 'react'
import { render } from 'react-dom'
import configureStore from './store'
import './index.css'
import App from './presentation/App'

const reduxStore = configureStore()

render(<App reduxStore={reduxStore} />, document.getElementById('root'))
