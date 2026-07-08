import { createContext, useState } from "react";
import LoginContext from "../component/LoginContext";
import ClientContext from "../component/ClientContext";
import EmployeeContext from "../component/EmployeeContext";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (role, username) => {
        if(role === "client"){
            setUser({
                role: "client",
                name: username,
                company: "Mind-Coders",
            })
        }
        else{
            setUser({
                role: 'employee',
                name: username,
                designation: "Frontend-Developer",
            })
        }
    }

    

    return (
        <div>
            <DataContext.Provider value={{user, login}}>
                {children}
            </DataContext.Provider>
        </div>
    )
}