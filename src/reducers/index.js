import {
    FETCH_MOVIES_START,
    FETCH_MOVIES_REJECTED,
    FETCH_MOVIES_FULFILLED,
    TOGGLE_FAVORITES
} from '../actions';

const initialState = {
    loading: false,
    movies: [],
    posters: [],
    favorites: [],
    error: false
}

export const favoritesSelector = state => {
    return state.favorites.map(favorite => {
        return state.movies.find(movie => {
            return movie.ids.trakt === favorite;
        })
    })
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIES_START:
            return Object.assign({}, state,
                {
                    loading: true
                }
            )
        case FETCH_MOVIES_REJECTED:
            return Object.assign({}, state,
                {
                    loading: false,
                    error: action.payload
                }
            )
        case FETCH_MOVIES_FULFILLED:
            return Object.assign({}, state,
                {
                    loading: false,
                    movies: action.payload
                }
            )
        case TOGGLE_FAVORITES:
            state.favorites.map(favoriteId => {
                if (action.payload === favoriteId) {
                    const index = state.favorites.indexOf(action.payload);
                    if (index > -1) {
                        return Object.assign({}, state,
                            {
                                favorites: state.favorites.splice(index, 1)
                            }
                        )
                    }
                }
                return null;
            })
            return Object.assign({}, state,
                {
                    favorites: state.favorites.concat(action.payload)
                }
            )
        default:
            return state;
    }
}
