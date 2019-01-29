import {
    LOAD_MOVIES,
    ADD_TO_FAVORITES,
    REMOVE_FROM_FAVORITES
} from '../actions/actions'

const initialState = {
    movies: [],
}

export default (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case LOAD_MOVIES:
            return {
                ...state,
                movies: payload
            }
        case ADD_TO_FAVORITES:
            return {
                ...state,
                movies: payload
            }
        case REMOVE_FROM_FAVORITES:
            return {
                ...state,
                movies: payload
            }
        default:
            return state
    }
}
