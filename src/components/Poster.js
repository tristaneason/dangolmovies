import React, { Component } from 'react';
import axios from 'axios';

class Poster extends Component {
    state = {
        poster: null
    }

    render() {
        axios.get(`https://api.themoviedb.org/3/movie/${this.props.id}?api_key=d1d57c1b46fefbe658f61409b5f533c9`)
            .then(response => {
                const posterUrl = `https://image.tmdb.org/t/p/w500${response.data.poster_path}`;
                this.setState({ poster: posterUrl });
            })
            .catch(error => {
                throw new Error(error);
            })
        return <img src={this.state.poster} className="image" alt={this.props.alt} />
    }
}

export default Poster;
