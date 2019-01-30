import {
    FETCH_MOVIES_START,
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIES_ERROR,
    FETCH_FAVORITES_START,
    FETCH_FAVORITES_SUCCESS,
    FETCH_FAVORITES_ERROR,
    ADD_TO_FAVORITES,
    REMOVE_FROM_FAVORITES
} from '../actions/actions'

const initialState = {
    loading: false,
    loaded: false,
    movies: [],
    favorites: [],
    error: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIES_START:
            return {
                ...state,
                loading: true
            }
        case FETCH_MOVIES_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case FETCH_MOVIES_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                movies: action.payload
            }
        case FETCH_FAVORITES_START:
            return {
                ...state,
                loading: true
            }
        case FETCH_FAVORITES_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case FETCH_FAVORITES_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                favorites: action.payload
            }
        case ADD_TO_FAVORITES:
            return {
                ...state,
                favorites: action.payload
            }
        case REMOVE_FROM_FAVORITES:
            return {
                ...state,
                favorites: action.payload
            }
        default:
            return state
    }
}
