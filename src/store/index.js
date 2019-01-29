import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/rootReducer'

const logger = store => next => action => {
    console.log('action:', action);
    return next(action);
}

export default function configureStore(state = {}) {
    const middleware = []

    if (process.env.NODE_ENV === 'development') {
        middleware.push(logger);
    }

    return createStore(
        rootReducer,
        compose(
            applyMiddleware(thunk),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    )
}
