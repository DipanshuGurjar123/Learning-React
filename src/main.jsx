import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import Data2Provider from './context/Context2.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      {/* for employee/admit context */}
      <Data2Provider>
        <App />
      </Data2Provider>
    </StrictMode>
  </BrowserRouter>,
)
