import React from 'react';
import './Thumb.css';

const Thumbnail = props => {
    let heart;
    if (props.favorited) {
        heart = 'fas fa-heart';
    } else {
        heart = 'far fa-heart';
    }

    // const imgId1 = props.key.substr(0, 3);
    // const imgId2 = props.key.slice(-3);
    // const imageUrl = `https://walter.trakt.tv/images/movies/000/${imgId1}/${imgId2}/fanarts/thumb/870f157138.jpg`
    const imageUrl = `https://walter.trakt.tv/images/movies/000/193/968/posters/thumb/9ea94e72c6.jpg`

    return <div className="thumb col-sm-6 col-md-4 col-lg-3">
        <span className="thumb-name">{props.name}</span>
        <span className="thumb-year">{props.year}</span>
        <i className={heart}></i>
    </div>
}

export default Thumbnail;
