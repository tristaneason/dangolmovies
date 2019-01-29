import React from 'react'
import { connect } from 'react-redux'
import Thumbnail from '../components/Thumb'
import './Home.css'

const Home = props => {
    return <section className="home">
        <Thumbnail />
    </section>
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
