import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies, toggleFavorites } from '../actions';
import { favoritesSelector } from '../reducers';
import './Favorites.css';
import './Thumb.css';

class Favorites extends Component  {
    render() {
        let heart;
        if (this.props.favorited) heart = 'fas fa-heart';
        else heart = 'far fa-heart';

        return <section className="favorites container">
            <h2 className="text-center">Favorites</h2>
            <div className="row">
                {this.props.favorites.map(item => {
                    const { favorite } = item;
                    return <div key={favorite.ids.trakt} className="thumb col-sm-6 col-md-4 col-lg-3">
                        <span className="thumb-name">{favorite.title}</span>
                        <span className="thumb-year">{favorite.year}</span>
                        <i className={heart}></i>
                    </div>
                })}
            </div>
        </section>
    }
}

const mapStateToProps = state => ({
    favorites: favoritesSelector(state)
})

const mapDispatchToProps = dispatch => ({
    fetchMovies: () => dispatch(fetchMovies()),
    toggleFavorites: () => toggleFavorites()
})

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
