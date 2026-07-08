import React, { useContext, useState } from 'react'
import { DataContext } from '../context/Context'

const LoginContext = () => {
    const { login } = useContext(DataContext);
    const [username, setUsername] = useState("");
    const [role, setRole] = useState("client")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(role, username);
        login(role, username)
    }


    return (
        <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-black'>
            <h1 className='absolute top-15 text-5xl font-bold text-white'>Login Page</h1>
            <form
             onSubmit={handleSubmit}
             className='w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 space-y-6'
             >
                <div>
                    <label
                    className='block mb-2 font-medium text-gray-700'
                    >Enter Name:</label>
                    <input type="text"
                        placeholder='Enter Your Name'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className='w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-blue-500 focus:border-blue-500 transition'
                    />
                </div>
                <div>
                    <label>Select Your Role:</label>
                    <div className='flex gap-6 mt-2'>
                        <label className='flex items-center gap-2 cursor-pointer'>
                            <input type="radio"
                                value="client"
                                checked={role === "client"}
                                onChange={() => setRole('client')}
                            />Client
                        </label>
                        <label className='flex items-center gap-2 cursor-pointer'>
                            <input type="radio"
                                value="employee"
                                checked={role === 'employee'}
                                onChange={() => setRole('employee')}
                            />Employee
                        </label>
                    </div>
                </div>

                <button
                 type='submit'
                 className='w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition duration-300'
                 >Let me in as a {role}</button>
            </form>
        </div>
    )
}

export default LoginContext
