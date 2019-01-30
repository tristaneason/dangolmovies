import React, { Component } from 'react';
import { connect } from 'react-redux';
import Thumbnail from '../components/Thumb';
import { fetchMovies, addToFavorites, removeFromFavorites } from '../actions';
import { favoritesSelector } from '../reducers';
import './Home.css';

class Home extends Component {
    componentDidMount() {
        this.props.fetchMovies();
    }

    render() {
        return <section className="home">
            <h2>Top 20 Trending Movies</h2>
            {this.props.movies.map(item => {
                const { movie } = item;
                return <Thumbnail
                    key={movie.ids.trakt}
                    name={movie.title}
                    year={movie.year} />
            })}
        </section>
    }
}

const mapStateToProps = state => ({
    movies: state.movies,
    favorites: favoritesSelector(state)
})

const mapDispatchToProps = dispatch => ({
    fetchMovies: () => dispatch(fetchMovies()),
    addToFavorites: () => dispatch(addToFavorites()),
    removeFromFavorites: () => dispatch(removeFromFavorites())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
