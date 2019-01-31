import axios from 'axios';
import { requestOptions } from '../config/requestOptions';

export const FETCH_MOVIES_START = 'FETCH_MOVIES_START';
export const FETCH_MOVIES_REJECTED = 'FETCH_MOVIES_REJECTED';
export const FETCH_MOVIES_FULFILLED = 'FETCH_MOVIES_FULFILLED';
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

export const fetchMovies = () => {
    return dispatch => {
        axios(requestOptions)
            .then(response => {
                dispatch({
                    type: FETCH_MOVIES_FULFILLED,
                    payload: response.data
                });
            })
            .catch(error => {
                dispatch({
                    type: FETCH_MOVIES_REJECTED,
                    payload: error
                });
            });
    }
}

export const toggleFavorites = id => ({
    type: TOGGLE_FAVORITE,
    payload: id
})
