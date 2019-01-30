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
        return <section className="home container">
            <h2 className="text-center">Top 20 Trending Movies</h2>
            <div className="row">
                {this.props.movies.map(item => {
                    const { movie } = item;
                    return <Thumbnail
                        key={movie.ids.trakt}
                        name={movie.title}
                        year={movie.year} />
                })}
            </div>
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
