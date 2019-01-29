import { combineReducers } from 'redux'
import homeReducer from './homeReducer'
import favoritesReducer from './favoritesReducer'

export default combineReducers({
    homeReducer,
    favoritesReducer
})
