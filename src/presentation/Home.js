import React from 'react'
import { connect } from 'react-redux'
import Thumbnail from '../components/Thumb'
import {
    fetchMovies,
    addToFavorites,
    removeFromFavorites
} from '../actions/actions'
import './Home.css'

const Home = props => {
    console.log('Movies: ' + props.movies)

    return <section className="home">
        <h2>Top 20 Trending Movies</h2>
        <button onClick={fetchMovies}>Click</button>
        <Thumbnail />
    </section>
}

const mapStateToProps = state => {
    return {
        movies: state.movies
    }
}

const mapDispatchToProps = dispatch => ({
    fetchMovies: () => dispatch(fetchMovies()),
    addToFavorites: () => dispatch(addToFavorites()),
    removeFromFavorites: () => dispatch(removeFromFavorites())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
