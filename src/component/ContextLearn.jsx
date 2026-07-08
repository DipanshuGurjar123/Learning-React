import React from 'react'
import { UserContext } from '../context/LearnContext'
import { useContext } from 'react'

const ContextLearn = () => {

    const user = useContext(UserContext)

  return (
    <div>
      <p>Hello Context API. my Name is {user.myName} and i am {user.myAge} yrs old and i learn {user.myLearning} course</p>
    </div>
  )
}

export default ContextLearn
