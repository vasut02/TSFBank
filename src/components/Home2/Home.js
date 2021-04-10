import React from 'react'
import About from './About'
import Welcome from '../Home/Welcome'
import Services from './Services'
import Contact from './Contact'
import './style.css'
import './script'


const Home = () => {
    return (
        <div>            
            <Welcome/>
            <About/>
            <Services/>
            <Contact/>            
        </div>
    )
}

export default Home
