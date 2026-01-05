// Import React's StrictMode for development warnings
import { StrictMode } from 'react'
// Import createRoot for React 18+ root rendering API
import { createRoot } from 'react-dom/client'
// Import global styles
import './index.css'
// Import React library (redundant with above imports)
import React from 'react'
// Import main App component
import App from './App.jsx'

// Initialize React application with Zustand state management
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)