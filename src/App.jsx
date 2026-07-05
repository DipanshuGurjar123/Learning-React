import React, { useState } from 'react'
import Login from './component/Login'
import Logout from './component/Logout'
// import AppleCounter from './component/AppleCounter'
// import AppleBasket from './component/AppleBasket'
import Home from './pages/Home'
import { Route, Routes } from 'react-router'
import AppleCounter from './component/AppleCounter'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './component/Navbar'

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

    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="counter" element={<AppleCounter/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Routes>
      {/* <Home/> */}
    </div>
  )

}

export default App
