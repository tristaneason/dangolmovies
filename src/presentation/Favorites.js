import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies, toggleFavorites } from '../actions';
import Poster from '../components/Poster';
import './Favorites.css';
import './Thumb.css';

class Favorites extends Component  {
    render() {
        return <section className="favorites container">
            <h2 className="text-center">Favorites</h2>
            <div className="row">
                {this.props.favorites.map(favoriteId => {
                    return this.props.movies.map(item => {
                        const { movie } = item;
                        if (movie.ids.trakt === favoriteId) {
                            return <div key={favoriteId} className="thumb col-sm-6 col-md-4 col-lg-3">
                                <span className="name">{movie.title}</span>
                                <span className="year">{movie.year}</span>
                                <Poster id={movie.ids.tmdb} alt={movie.title} className="image" />
                                <i className='fas fa-heart' onClick={() => this.props.toggleFavorites(movie.ids.trakt)}></i>
                            </div>
                        } else {
                            return null
                        }
                    })
                })}
            </div>
        </section>
    }
}

const mapStateToProps = state => ({
    movies: state.movies,
    favorites: state.favorites,
    heart: state.heart
})

const mapDispatchToProps = dispatch => ({
    fetchMovies: () => dispatch(fetchMovies()),
    toggleFavorites: (id) => toggleFavorites(id)
})

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
