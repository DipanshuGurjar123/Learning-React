import React from 'react'
import AppleCounter from '../component/AppleCounter'
import About from './About'
import Navbar from '../component/Navbar'
import Contact from './Contact'
import Courses from './Courses'


const Home = () => {
    return (
        <div>
            
            <AppleCounter />
            <About />
            <Contact />  
            <Courses/> 
        </div>
    )
}

export default Home