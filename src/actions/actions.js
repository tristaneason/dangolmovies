import request from 'request-promise'

export const FETCH_MOVIES_START = 'FETCH_MOVIES_START'
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS'
export const FETCH_MOVIES_ERROR = 'FETCH_MOVIES_ERROR'
export const FETCH_FAVORITES_START = 'FETCH_FAVORITES_START'
export const FETCH_FAVORITES_SUCCESS = 'FETCH_FAVORITES_SUCCESS'
export const FETCH_FAVORITES_ERROR = 'FETCH_FAVORITES_ERROR'
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES'
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES'

function getRequest(uri) {
    request({
        method: 'GET',
        url: uri,
        headers: {
            'Content-Type': 'application/json',
            'trakt-api-version': '2',
            'trakt-api-key': 'a4503dd80104293a73f0e02c56e4c5bdd34340402c36cdde4492039c67e9af91'
        }}, (error, response, body) => {
            if (response.statusCode === 200) {
                const data = JSON.parse(body)
                console.log(data)
                return {
                    data
                }
            } else {
                throw new Error(error)
            }

        })
}

export const fetchMovies = () => ({
    type: FETCH_MOVIES_START,
    payload: getRequest('https://api.trakt.tv/movies/trending?limit=20')
})

export const fetchFavorites = () => ({
    type: FETCH_FAVORITES_START
})

export const addToFavorites = movie => ({
    type: ADD_TO_FAVORITES,
    payload: movie
})

export const removeFromFavorites = movie => ({
    type: REMOVE_FROM_FAVORITES,
    payload: movie
})
