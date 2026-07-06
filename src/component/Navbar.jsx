import React from 'react'
import { Link } from 'react-router'
import Home from '../pages/Home'
import About from '../pages/About'
import AppleCounter from './AppleCounter'
import Contact from '../pages/Contact'

const Navbar = () => {
    return (
        <div>
            {/* Navbar */}
            <nav className='flex justify-between'>
                <h1 className='p-4'>Wlcome to my page</h1>
                <div className='pt-4 pr-10 flex gap-20'>
                    <Link to="/">Home</Link>
                    <Link to="counter">AppleCounter</Link>
                    <Link to="about">About</Link>
                    <Link to="contact">Contact</Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
