import React from 'react'
import './Thumb.css'
import { connect } from 'react-redux'

const App = props => (
    <div className="thumb">
        <img src={props.image} alt={props.name} />
        <span className="thumb-name">{props.name}</span>
        <span className="thumb-year">{props.year}</span>
        <i className={props.heart}></i>
    </div>
)

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(App)
