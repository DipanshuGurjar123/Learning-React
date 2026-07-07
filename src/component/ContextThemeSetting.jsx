import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

const ContextThemeSetting = () => {

    const context = useContext(ThemeContext)
    const { theme, toggleTheme } = context;

    const pageStyle = {
        padding: '20px',
        height: '100vh',
        backgroundColor: theme === 'light' ? '#ffffff' : '#222222',
        color: theme === 'light' ? '#000000' : '#ffffff',
    };

  return (
    <div style={pageStyle}>
      <h1>{theme.toUpperCase()}</h1>
      <button onClick={toggleTheme} style={{ padding: "10px 20px"}}>Theme</button>
    </div>
  )
}

export default ContextThemeSetting
