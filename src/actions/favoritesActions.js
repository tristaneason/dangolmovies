export const LOAD_CURRENT_FAVORITES = 'LOAD_CURRENT_FAVORITES'
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES'
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES'

export const loadCurrentFavorites = () => ({
    type: LOAD_CURRENT_FAVORITES,
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
