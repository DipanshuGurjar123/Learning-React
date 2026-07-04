import React, { useState } from 'react'
import Login from './component/Login'
import Logout from './component/Logout'

const App = () => {

  const [isLoggedIn, setLoggedIn] = useState(true)

  if(isLoggedIn){
    return (
      <Logout/>
    )
  }
  else{
    return (
      <Login/>
    )
  }

}

export default App
