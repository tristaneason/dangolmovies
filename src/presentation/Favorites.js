import React from 'react'
import { connect } from 'react-redux'
import Thumbnail from '../components/Thumb'
import {
    fetchFavorites,
    addToFavorites,
    removeFromFavorites
} from '../actions/actions'
import './Favorites.css'

const Favorites = props => {
    console.log('Favorites: ' + props.favorites)

    return <section className="favorites">
        <h2>Favorites</h2>
        <button onClick={fetchFavorites}>Click</button>
        <Thumbnail />
    </section>
}

const mapStateToProps = state => {
    return {
        favorites: state.favorites
    }
}

const mapDispatchToProps = dispatch => ({
    fetchFavorites: () => dispatch(fetchFavorites()),
    addToFavorites: () => dispatch(addToFavorites()),
    removeFromFavorites: () => dispatch(removeFromFavorites())
})

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)
