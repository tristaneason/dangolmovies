import React from 'react'
import { connect } from 'react-redux'
import Thumbnail from '../components/Thumb'
import './Favorites.css'

const Favorites = props => {
    return <section className="favorites">
        {props.favorites.map(favorite => (
            <Thumbnail
                image={favorite.image}
                name={favorite.name}
                year={favorite.year} />
        ))}
    </section>
}

const mapStateToProps = state => ({
    favorites: state.favorites
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)
