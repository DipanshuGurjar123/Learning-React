import React, { useState } from 'react'
import ThemeContext from './ThemeContext';

const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };


    return (
        <div>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                {children}
            </ThemeContext.Provider>
        </div>
    )
}

export default ThemeProvider
