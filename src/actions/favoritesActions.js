export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES'
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES'

export const addToFavorites = () => ({
    type: ADD_TO_FAVORITES,
    payload: 'added to favorites'
})

export const removeFromFavorites = () => ({
    type: REMOVE_FROM_FAVORITES,
    payload: 'removed from favorites'
})
