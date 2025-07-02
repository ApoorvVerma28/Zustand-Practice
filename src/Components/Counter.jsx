import React from 'react'
import useCounterStore from "../Stores/useCounterStore"
const Counter = () => {

    const {count,increment,decrement} = useCounterStore ();
    console.log(count)
    
  return (
    <div className=' flex flex-col items-center justify-center mt-5'>
    <h1 className='text-3xl'>Counter: {count}</h1>
    <div className='flex gap-5'>
         <button className='bg-green-400 px-10 py-3 rounded-2xl' onClick={increment}>+</button>
    <button className='bg-red-400 px-10 py-3 rounded-2xl' onClick={decrement}>-</button>
    </div>
   
    </div>
  )
}

export default Counter