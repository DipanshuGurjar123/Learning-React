import React, { createContext, useState } from 'react'

export const Data2Context = createContext()

const Data2Provider = ({ children }) => {

    // valid and currentUser variables for navigating to thier specific data page //
    const [valid, setValid] = useState(false);
    const [currentUser, setCurrentUser] = useState('')

    // Admin Data //
    const adminData = {
        name: "Ram",
        email: "ram@gmail.com",
        password: 1234
    }

    // Employee Data //
    const employeeData = {
        name: "Vaibhav",
        email: "vaibhav@gmail.com",
        password: 4321
    }

    return (
        <Data2Context.Provider value={{ adminData, employeeData, valid, setValid, currentUser, setCurrentUser }}>
            {children}
        </Data2Context.Provider>
    )
}

export default Data2Provider
