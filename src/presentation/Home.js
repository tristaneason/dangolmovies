import React from 'react'
import { connect } from 'react-redux'
import Thumbnail from '../components/Thumb'
import './Home.css'

const Home = ({ movies }) => {
    return <section className="home">
        {movies.map(movie => (
            <Thumbnail
                image={movie.image}
                name={movie.name}
                year={movie.year}
                heart={movie.favorited} />
        ))}
    </section>
}

const mapStateToProps = state => ({
    movies: state.movies
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
