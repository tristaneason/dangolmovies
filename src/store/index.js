import { createStore, applyMiddleware, compose } from 'redux'
import ReduxThunk from 'redux-thunk'
import rootReducer from '../reducers/rootReducer'

const logger = store => next => action => {
    console.log('action:', action)
    return next(action)
}

export default function configureStore(state = {}) {
    const middleware = []

    middleware.push(ReduxThunk)

    if (process.env.NODE_ENV === 'development') {
        middleware.push(logger)
    }

    return createStore(
        rootReducer,
        compose(
            applyMiddleware(...middleware),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    )
}
