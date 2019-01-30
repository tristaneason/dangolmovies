import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import reducer from '../reducers'

export default function configureStore(state = {}) {
    const middleware = [thunk, logger]
    if (process.env.NODE_ENV === 'development') middleware.push(logger)

    return createStore(
        reducer,
        compose(
            applyMiddleware(...middleware)
        )
    )
}
