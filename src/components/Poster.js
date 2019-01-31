import React from 'react';
import axios from 'axios';

const Poster = props => {
    let posterUrl;
    axios.get(`https://api.themoviedb.org/3/movie/${props.id}?api_key=d1d57c1b46fefbe658f61409b5f533c9`)
        .then(response => {
            posterUrl = `https://image.tmdb.org/t/p/w500${response.data.poster_path}`;
            console.log(posterUrl);
            return posterUrl;
        })
        .catch(error => {
            throw new Error(error);
        })
    return <img src={posterUrl} className="image" alt={props.alt} />
}

export default Poster;
