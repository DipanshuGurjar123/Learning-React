import React, { useContext } from 'react'
import { Data2Context } from '../context/Context2'

const Admin2 = () => {
    const { adminData, valid, setValid } = useContext(Data2Context)

    // Logout button for navitage to LoginPage //
    const handleLogout = () => {
        setValid(false)
    }

    return (
        <div className='h-screen flex justify-center items-center bg-black text-white'>
            <div className='flex justify-center flex-col items-center'>
                <p className='font-bold text-6xl'>Admin Page</p>
                <div className='flex gap-4 flex-col'>
                    <p className='pt-10 font-bold text-3xl'><span className='font-bold text-xl'>Name :</span> <u>{adminData.name}</u></p>
                    <p className='text-3xl'><span className='font-bold text-xl'>Email : </span><u>{adminData.email}</u></p>
                </div>
                {/* Logout button for navigate to LoginPage */}
                <button className='px-7 py-3 bg-red-800 rounded-4xl mt-15'
                    onClick={handleLogout}>Logout</button>
            </div>



        </div>
    )
}

export default Admin2
