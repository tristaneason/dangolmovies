import React, { Component } from 'react'
import { connect } from 'react-redux'
import Thumbnail from '../components/Thumb'
import {
    fetchFavorites,
    addToFavorites,
    removeFromFavorites
} from '../actions'
import './Favorites.css'

class Favorites extends Component  {
    componentDidMount() {
        this.props.fetchFavorites()
    }

    render() {
        return <section className="favorites">
            <h2>Favorites</h2>
            <Thumbnail />
        </section>
    }
}

const mapStateToProps = state => ({
    favorites: state.favorites
})

const mapDispatchToProps = dispatch => ({
    fetchFavorites: () => fetchFavorites(),
    addToFavorites: () => addToFavorites(),
    removeFromFavorites: () => removeFromFavorites()
})

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)
