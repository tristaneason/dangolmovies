import request from 'request-promise';

export const FETCH_MOVIES_START = 'FETCH_MOVIES_START';
export const FETCH_MOVIES_REJECTED = 'FETCH_MOVIES_REJECTED';
export const FETCH_MOVIES_FULFILLED = 'FETCH_MOVIES_FULFILLED';
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';

const requestOptions = {
    method: 'GET',
    url: 'https://api.trakt.tv/movies/trending?limit=20',
    headers: {
        'Content-Type': 'application/json',
        'trakt-api-version': '2',
        'trakt-api-key': 'a4503dd80104293a73f0e02c56e4c5bdd34340402c36cdde4492039c67e9af91'
    }
}

export const fetchMovies = () => {
    return dispatch => {
        request(requestOptions, (error, response, body) => {
            if (response.statusCode === 200) {
                const data = JSON.parse(body);
                dispatch({
                    type: FETCH_MOVIES_FULFILLED,
                    payload: data
                })
            } else {
                dispatch({
                    type: FETCH_MOVIES_REJECTED,
                    payload: error
                })
            }
        })
    }
}

export const addToFavorites = ({ id }) => ({
    type: ADD_TO_FAVORITES,
    payload: id
})

export const removeFromFavorites = ({ id }) => ({
    type: REMOVE_FROM_FAVORITES,
    payload: id
})
