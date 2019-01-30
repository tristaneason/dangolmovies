import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies, addToFavorites, removeFromFavorites } from '../actions';
import { favoritesSelector } from '../reducers';
import './Home.css';
import './Thumb.css';

class Home extends Component {
    componentDidMount() {
        this.props.fetchMovies();
    }

    render() {
        let heart;
        if (this.props.favorited) heart = 'fas fa-heart';
        else heart = 'far fa-heart';

        return <section className="home container">
            <h2 className="text-center">Top 20 Trending Movies</h2>
            <div className="row">
                {this.props.movies.map(item => {
                    const { movie } = item;
                    return <div key={movie.ids.trakt} className="thumb col-sm-6 col-md-4 col-lg-3">
                        <span className="thumb-name">{movie.name}</span>
                        <span className="thumb-year">{movie.year}</span>
                        <i className={heart}></i>
                    </div>
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
