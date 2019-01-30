import request from 'request-promise'

export const REQUEST_MOVIES = 'REQUEST_MOVIES'
export const LOAD_MOVIES = 'LOAD_MOVIES'
export const LOAD_FAVORITES = 'LOAD_FAVORITES'
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES'
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES'

function fetchMovies(uri) {
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

export const loadMovies = () => ({
    type: LOAD_MOVIES,
    payload: fetchMovies('https://api.trakt.tv/movies/trending?limit=20')
})

export const loadFavorites = favorites => ({
    type: LOAD_FAVORITES,
    payload: favorites
})

export const addToFavorites = movie => ({
    type: ADD_TO_FAVORITES,
    payload: movie
})

export const removeFromFavorites = movie => ({
    type: REMOVE_FROM_FAVORITES,
    payload: movie
})
