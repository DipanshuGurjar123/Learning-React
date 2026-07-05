import React from 'react'
import AppleCounter from '../component/AppleCounter'
import About from './About'
import Navbar from '../component/Navbar'
import Contact from './Contact'


const Home = () => {
    return (
        <div>
            
            <AppleCounter />
            <About />
            <Contact />   
        </div>
    )
}

export default Home