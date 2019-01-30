import React from 'react'
import { connect } from 'react-redux'
import Thumbnail from '../components/Thumb'
import {
    loadFavorites,
    addToFavorites,
    removeFromFavorites
} from '../actions/actions'
import './Favorites.css'

const Favorites = props => {
    const { favorites } = props

    console.log(favorites)

    return <section className="favorites">
        <h2>Favorites</h2>
    </section>
}

const mapStateToProps = state => {
    return {
        favorites: state
    }
}

const mapDispatchToProps = dispatch => ({
    loadFavorites: () => dispatch(loadFavorites()),
    addToFavorites: () => dispatch(addToFavorites()),
    removeFromFavorites: () => dispatch(removeFromFavorites())
})

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)
