import React, { useState } from 'react'
import Login from './component/Login'
import Logout from './component/Logout'

const App = () => {

  const [isLoggedIn, setLoggedIn] = useState(false)

  return (
    <div>
      {isLoggedIn ? <Logout/> : <Login/>}
    </div>
  )

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

}

export default App
