const initialState = {
    loading: false,
    movies: [],
    favorites: [],
    error: false
}

export const favoritesSelector = state => {
    return state.favorites.map(favorite => {
        return state.movies.find(movie => {
            return movie.ids.trakt === favorite
        })
    })
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
            // TODO: Push ID onto favorites and then return favorites
            return Object.assign({}, state,
                {
                    favorites: action.payload
                }
            )
        case 'REMOVE_FROM_FAVORITES':
            // TODO: Find index of ID passed in from favorites, then splice from array with index as arg
            return {
                ...state,
                favorites: action.payload
            }
        default:
            return state
    }
}
