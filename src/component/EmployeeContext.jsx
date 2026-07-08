import React, { useContext } from 'react'
import { DataContext } from '../context/Context'

const EmployeeContext = () => {
    const {user} = useContext(DataContext)
  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-black'>
      <div className='p-20 bg-black/40 text-white'>
        <div className=' bg-black/40'>
        <h2>Employee Page</h2>
      </div>
      <div>
        <h2>Wolcome Employee, {user.name}</h2>
        <p>Designation: {user.designation}</p>
      </div>
      </div>
    </div>
  )
}

export default EmployeeContext
