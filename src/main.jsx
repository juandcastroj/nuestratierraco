import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/tailwind.css'
import App from './App.jsx'
import { AuthProvider } from './contexts/AuthContext.jsx'


createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <AuthProvider>
      <App/>
    </AuthProvider>
  </StrictMode>,
)
