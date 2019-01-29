import {
    LOAD_FAVORITES,
    ADD_TO_FAVORITES,
    REMOVE_FROM_FAVORITES
} from '../actions/actions'

const initialState = {
    favorites: [],
}

export default (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case LOAD_FAVORITES:
            return {
                ...state,
                favorites: payload
            }
        case ADD_TO_FAVORITES:
            return {
                ...state,
                favorites: payload
            }
        case REMOVE_FROM_FAVORITES:
            return {
                ...state,
                favorites: payload
            }
        default:
            return state
    }
}
