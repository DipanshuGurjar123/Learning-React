import React, { useContext } from 'react'
import { DataContext } from '../context/Context'

const ClientContext = () => {
    const {user} = useContext(DataContext)
  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-black'>
      <div className='p-20 bg-black/40 text-white'>
        <div>
        <h2>Client Page</h2>
      </div>
      <div>
        <h2>Welcome Client, {user.name}</h2>
        <p>Company Name: {user.company}</p>
      </div>
      </div>
    </div>
  )
}

export default ClientContext
