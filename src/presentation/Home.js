import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies, toggleFavorites } from '../actions';
import Poster from '../components/Poster';
import './Home.css';
import './Thumb.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.heartClass = this.heartClass.bind(this);
    }
    componentDidMount() {
        this.props.fetchMovies();
    }

    heartClass(id) {
        if (this.props.favorites.indexOf(id) > -1) {
            return 'fas fa-heart';
        } else {
            return 'far fa-heart';
        }
    }

    render() {
        return <section className="home container">
            <h2 className="text-center">Top 20 Trending Movies</h2>
            <div className="row">
                {this.props.movies.map(item => {
                    const { movie } = item;
                    return <div key={movie.ids.trakt} className="thumb col-md-6 col-lg-4">
                        <span className="name">{movie.title}</span>
                        <span className="year">{movie.year}</span>
                        <Poster id={movie.ids.tmdb} alt={movie.title} className="image" />
                        <i className={this.heartClass(movie.ids.trakt)} onClick={() => this.props.toggleFavorites(movie.ids.trakt)}></i>
                    </div>
                })}
            </div>
        </section>
    }
}

const mapStateToProps = state => ({
    movies: state.movies,
    favorites: state.favorites
})

const mapDispatchToProps = dispatch => ({
    fetchMovies: () => dispatch(fetchMovies()),
    toggleFavorites: (id) => dispatch(toggleFavorites(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
