const initialState = {
    loading: false,
    movies: [],
    favorites: [],
    error: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_MOVIES_START':
            return {
                ...state,
                loading: true
            }
        case 'FETCH_MOVIES_REJECTED':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case 'FETCH_MOVIES_FULFILLED':
            return Object.assign({}, state,
                {
                    loading: false,
                    movies: action.payload
                }
            )
        case 'ADD_TO_FAVORITES':
            return {
                ...state,
                favorites: action.payload
            }
        case 'REMOVE_FROM_FAVORITES':
            return {
                ...state,
                favorites: action.payload
            }
        default:
            return state
    }
}
