import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './auth/AuthProvider C.jsx'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <AuthProvider>
      <BrowserRouter basename="/Digital-Dreamers/">
        <App />
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
)
