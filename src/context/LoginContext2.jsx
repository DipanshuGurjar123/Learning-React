import React, { useContext, useState } from 'react'
import { Data2Context } from './Context2'

const LoginContext2 = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('')

    const { employeeData, adminData, valid, setValid, currentUser, setCurrentUser } = useContext(Data2Context)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted");

        console.log(role, email, Number(password));

        if (!role || !email || !password) {
            alert("All input field is required")
            return
        }
        if (role === "Admin"
            && email === adminData.email
            && Number(password) === adminData.password) {
            setValid(true);
            setCurrentUser("Admin");

            // If successful then reset form //
            setEmail('')
            setPassword('')
            setRole('')
        }
        else if (role === "Employee"
            && email === employeeData.email
            && Number(password) === employeeData.password) {
            setValid(true);
            setCurrentUser("Employee");

            // If successful then reset form //
            setEmail('')
            setPassword('')
            setRole('')
        }
        else {
            setValid(false);
            alert("Invalid credential")
        }
    }

    const handleReset = () => {
        setEmail('')
        setPassword('')
        setRole('')
    }

    return (
        <>
            <div className="main h-screen text-white bg-black flex justify-center items-center w-full">
                <div className="form-container h-120 w-100 border border-white rounded-lg">
                    <form
                        className='flex py-8 px-7 flex-col gap-10'
                        onSubmit={(e) => {
                            handleSubmit(e)
                        }}
                    >
                        <h1 className='flex justify-center text-2xl font-bold underline text-olive-500'>Login Page</h1>
                        <input
                            type="email"
                            placeholder='Enter Your Email'
                            className='p-3 border rounded-lg'
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                        />
                        <input
                            type="password"
                            placeholder='Enter Your Password'
                            className='p-3 border rounded-lg'
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                        />
                        <select
                            className='text-white border border-white py-3 px-3 rounded-lg'
                            value={role}
                            onChange={(e) => {
                                setRole(e.target.value)
                            }}>
                            <option
                                className='text-black'
                            >Employee</option>

                            <option
                                className='text-black'
                            >Admin</option>
                        </select>
                        <div className='flex gap-6 justify-center pt-8'>
                            <button
                                type="submit"
                                className='w-1/2 bg-green-600 py-3 rounded-4xl'
                            >Login</button>
                            <button
                                type="button"
                                className='w-1/2 bg-red-600 py-3 rounded-4xl'
                                onClick={handleReset}
                            >Reset</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginContext2
