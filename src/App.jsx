import React, { useState } from 'react'
import Login from './component/Login'
import Logout from './component/Logout'
import AppleCounter from './component/AppleCounter'
import AppleBasket from './component/AppleBasket'

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
    <div className='bg-amber-500 h-screen'>
      <AppleCounter />
      {/* <AppleBasket /> */}
    </div>
  )

}

export default App
