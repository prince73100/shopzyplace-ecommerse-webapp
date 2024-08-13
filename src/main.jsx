import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SopContextProvider from './contextApi/ShopContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SopContextProvider>
      <App />
    </SopContextProvider>
  </React.StrictMode>,
)
