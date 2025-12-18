import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Myname from './name.jsx'
import Farm from './farm.jsx'
import Home from './include/Home.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*
    <Myname />
      <Farm animal='cow' type='animal' crops='smile' />
    */}
    
  
    <App />
  </StrictMode>,
)
