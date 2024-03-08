import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' // Change the file extension from .jsx to .tsx
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
