import {
    FETCH_MOVIES_START,
    FETCH_MOVIES_REJECTED,
    FETCH_MOVIES_FULFILLED,
    TOGGLE_FAVORITE
} from '../actions';

const initialState = {
    loading: false,
    movies: [],
    favorites: [],
    error: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIES_START:
            return Object.assign({}, state,
                {
                    loading: true
                }
            );
        case FETCH_MOVIES_REJECTED:
            return Object.assign({}, state,
                {
                    loading: false,
                    error: action.payload
                }
            );
        case FETCH_MOVIES_FULFILLED:
            return Object.assign({}, state,
                {
                    loading: false,
                    movies: action.payload
                }
            );
        case TOGGLE_FAVORITE:
            let favoriteExists = state.favorites.indexOf(action.payload) > -1;
            let favorites = state.favorites.slice();

            if (favoriteExists) {
                favorites = favorites.filter(id => id !== action.payload);
                // Trigger remove favorite message
            } else {
                favorites.push(action.payload);
                // Trigger added favorite message
            }

            return Object.assign({}, state,
                {
                    favorites: favorites
                }
            );
        default:
            return state;
    }
}
