import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Mynavbar from './components/Mynavbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Mynavbar/>
    <App />
  </StrictMode>,
)
