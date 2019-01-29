import React from 'react'
import './Thumb.css'

const Thumbnail = props => {
    let heart
    if (props.favorited) {
        heart = 'fas fa-heart'
    } else {
        heart = 'far fa-heart'
    }

    return <div className="thumb">
        <img src={props.image} alt={props.name} />
        <span className="thumb-name">{props.name}</span>
        <span className="thumb-year">{props.year}</span>
        <i className={heart}></i>
    </div>
}

export default Thumbnail
