import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from '../actions/favoritesActions'

const initialState = {
    plainText: null,
    newText: null,
}

export default (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
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
