import React from 'react'
import { Link, Outlet } from 'react-router'
import MernCourse from './MernCourse'
import DataAnalysis from './DataAnalysis'

const Courses = () => {
    return (
        <div className='flex justify-center items-center mt-5 mb-5 bg-yellow-700 p-20'>
            <div className='flex gap-20'>
                <Link to="/courses/mern">MernCourse</Link>
                <Link to="/courses/data">DataAnalysis</Link>
            </div>
            <p>Courses page</p>
            <Outlet />
        </div>
    )
}

export default Courses
