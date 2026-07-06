import React from 'react'
import { useParams } from 'react-router'

const MernCourse = () => {

    const param = useParams()
    console.log(param)


  return (
    <div className='flex justify-center items-center mb-5 bg-yellow-700 p-20'>
      <p>Mern Stack</p>
    </div>
  )
}

export default MernCourse
