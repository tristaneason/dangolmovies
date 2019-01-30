import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import promise from 'redux-promise-middleware'
import rootReducer from '../reducers/rootReducer'

export default function configureStore(state = {}) {
    const middleware = [thunk, logger, promise]
    if (process.env.NODE_ENV === 'development') middleware.push(logger)

    return createStore(
        rootReducer,
        compose(
            applyMiddleware(...middleware)
        )
    )
}
