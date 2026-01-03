// Import React library
import React from 'react'
// Import Counter component demonstrating basic Zustand usage
import Counter from './Components/Counter'
// Import Cart component showing Zustand for shopping cart state
import Cart from './Components/Cart'

// Main App component showcasing Zustand state management examples
const App = () => {
  return (
    <div className= ''>
     {/* Counter component - currently commented out */}
     {/* <Counter/> */}
     {/* Cart component - demonstrates Zustand store for cart management */}
     <Cart/>
    </div>
  )
}

// Export App as default
export default App