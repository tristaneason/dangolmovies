import React, { Component } from 'react';
import { connect } from 'react-redux';
import Thumbnail from '../components/Thumb';
import { fetchMovies, addToFavorites, removeFromFavorites } from '../actions';
import { favoritesSelector } from '../reducers';
import './Favorites.css';

class Favorites extends Component  {
    componentDidMount() {
        // this.props.favorites;
    }

    render() {
        return <section className="favorites container">
            <h2 className="text-center">Favorites</h2>
            <div className="row">
                {this.props.favorites.map(item => {
                    const { favorite } = item;
                    return <Thumbnail
                        key={favorite.ids.trakt}
                        name={favorite.name}
                        year={favorite.year} />
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
    addToFavorites: () => addToFavorites(),
    removeFromFavorites: () => removeFromFavorites()
})

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
