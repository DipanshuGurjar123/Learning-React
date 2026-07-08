import { createContext } from "react";

export const UserContext = createContext()

export const UserProvider = ({children}) => {

    const myName = "Dipanshu Gurjar"
    const myAge = 20
    const myLearning = "Mern Stack"


    return (
        <UserContext.Provider value={{ myName , myAge, myLearning }}>
            {children}
        </UserContext.Provider>
    )
}