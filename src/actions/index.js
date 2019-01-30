import request from 'request-promise'

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
                const data = JSON.parse(body)
                console.log(data)
                dispatch({
                    type: 'FETCH_MOVIES_FULFILLED',
                    payload: data
                })
            } else {
                dispatch({
                    type: 'FETCH_MOVIES_REJECTED',
                    payload: error
                })
            }
        })
    }
}

export const fetchFavorites = () => ({
    type: 'FETCH_FAVORITES_START'
})

export const addToFavorites = ({ id }) => ({
    type: 'ADD_TO_FAVORITES',
    payload: id
})

export const removeFromFavorites = ({ id }) => ({
    type: 'REMOVE_FROM_FAVORITES',
    payload: id
})
