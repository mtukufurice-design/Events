import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BackgroundMusic from './components/BackgroundMusic.jsx'

// Initialize theme on HTML root element immediately
const savedTheme = localStorage.getItem('app-theme') || 'black-blue-red'
document.documentElement.setAttribute('data-theme', savedTheme)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <App />
      <BackgroundMusic />
    </>
  </StrictMode>,
)
