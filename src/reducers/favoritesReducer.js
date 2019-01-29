import {
    LOAD_CURRENT_FAVORITES,
    ADD_TO_FAVORITES,
    REMOVE_FROM_FAVORITES
} from '../actions/favoritesActions'

const initialState = {
    movies: []
}

export default (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case LOAD_CURRENT_FAVORITES:
            return {
                ...state,
            }
        case ADD_TO_FAVORITES:
            return {
                ...state,

            }
        case REMOVE_FROM_FAVORITES:
            return {
                ...state,
            }
        default:
            return state
    }
}
