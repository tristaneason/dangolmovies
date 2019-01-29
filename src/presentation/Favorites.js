import React from 'react'
import { connect } from 'react-redux'
import Thumbnail from '../components/Thumb'
import './Favorites.css'

const Favorites = ({ favorites }) => {
    return <section className="favorites">
        {favorites.map(favorite => (
            <Thumbnail
                image={favorite.image}
                name={favorite.name}
                year={favorite.year}
                heart={favorite.favorited} />
        ))}
    </section>
}

const mapStateToProps = state => ({
    favorites: state.favorites
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)
