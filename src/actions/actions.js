export const LOAD_MOVIES = 'LOAD_MOVIES'
export const LOAD_FAVORITES = 'LOAD_FAVORITES'
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES'
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES'

export const loadMovies = () => ({
    type: LOAD_MOVIES,
    payload: 'loaded movies'
})

export const loadFavorites = () => ({
    type: LOAD_FAVORITES,
    payload: 'loaded favorites'
})

export const addToFavorites = () => ({
    type: ADD_TO_FAVORITES,
    payload: 'added to favorites'
})

export const removeFromFavorites = () => ({
    type: REMOVE_FROM_FAVORITES,
    payload: 'removed from favorites'
})
