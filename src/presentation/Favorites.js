import React from 'react'
import { connect } from 'react-redux'
import Thumbnail from '../components/Thumb'
import './Favorites.css'

const Favorites = props => {
    return <section className="favorites">
        <Thumbnail />
    </section>
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)
