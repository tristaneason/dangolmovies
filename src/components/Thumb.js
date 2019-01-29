import React from 'react'

export default (props) => {
    return <div className="thumb">
        <img src={props.image} alt={props.name} />
        <span className="thumb-name">{props.name}</span>
        <span className="thumb-year">{props.year}</span>
        <i className={props.heart}></i>
    </div>
}
