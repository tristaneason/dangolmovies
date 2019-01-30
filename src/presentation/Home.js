import React from 'react'
import { connect } from 'react-redux'
import Thumbnail from '../components/Thumb'
import {
    loadMovies,
    addToFavorites,
    removeFromFavorites
} from '../actions/actions'
import './Home.css'

const Home = props => {
    const {
        movies,
        loadMovies,
        addToFavorites,
        removeFromFavorites
    } = props

    console.log(movies)

    return (
        <section className="home">
            <h2>Top 20 Trending Movies</h2>
            <span onClick={loadMovies}>Click</span>
        </section>
    )
}

const mapStateToProps = state => {
    return {
        movies: state
    }
}

const mapDispatchToProps = dispatch => ({
    loadMovies: () => dispatch(loadMovies()),
    addToFavorites: () => dispatch(addToFavorites()),
    removeFromFavorites: () => dispatch(removeFromFavorites())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
