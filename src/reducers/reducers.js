const initialState = {
    loading: false,
    loaded: false,
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
            return {
                ...state,
                loading: false,
                loaded: true,
                movies: action.payload
            }
        case 'FETCH_FAVORITES_START':
            return {
                ...state,
                loading: true
            }
        case 'FETCH_FAVORITES_REJECTED':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case 'FETCH_FAVORITES_FULFILLED':
            return {
                ...state,
                loading: false,
                loaded: true,
                favorites: action.payload
            }
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
