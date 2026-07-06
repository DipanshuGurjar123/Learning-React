import React, { useState } from 'react'
import Login from './component/Login'
import Logout from './component/Logout'
import AppleCounter from './component/AppleCounter'
import AppleBasket from './component/AppleBasket'
import Home from './pages/Home'
import { Outlet, Route, Routes } from 'react-router'
// import AppleCounter from './component/AppleCounter'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './component/Navbar'
import Courses from './pages/Courses'
import MernCourse from './pages/MernCourse'
import DataAnalysis from './pages/DataAnalysis'
import PageNotFound from './pages/PageNotFound'

const App = () => {

  // const [isLoggedIn, setLoggedIn] = useState(false)

  // return (
  //   <div>
  //     {isLoggedIn ? <Logout/> : <Login/>}
  //   </div>
  // )

  // conditional rendering using if/else //

  // if(isLoggedIn){
  //   return (
  //     <Logout/>
  //   )
  // }
  // else{
  //   return (
  //     <Login/>
  //   )
  // }

  return (
    // <div className='bg-amber-500 h-screen'>
    // {/* <AppleCounter /> */}
    // {/* <AppleBasket /> */}
    // </div>


    // Routing //
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="courses" element={<Outlet />}>
          <Route index element={<Courses />} />
          <Route path="/courses/:id" element={<MernCourse/>}/>
          <Route path="mern" element={<MernCourse />} />
          <Route path="data" element={<DataAnalysis />} />
        </Route>
        <Route path="counter" element={<AppleCounter />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
      {/* <Home/> */}
    </div>
  )

}

export default App
