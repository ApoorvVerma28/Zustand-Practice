import React from 'react'
import products from '../Utilies/product'
import useCartStore from '../Stores/useCartStore';
const Cart = () => {
const { items, addToCart, removeFromCart, clearCart } = useCartStore();
    return (
        <>
             <div className='flex items-center justify-center flex-col gap-10' style={{ padding: '20px' }}>
      <h2>🛒 Products</h2>
      {products.map(product => (
        <div key={product.id}  className='flex flex-col items-center' style={{ marginBottom: '10px' }}>
         <span><strong>{product.name}</strong> - ₹{product.price},{product.quantity}</span> 
          <button
            className='bg-green-700 block  p-2 rounded-2xl'
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      ))}

      <hr />

      <h2>🧺 Cart</h2>
      {items.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul>
          {items.map(item => (
            <li className='flex flex-col items-center' key={item.id}>
             <span>{item.name} x {item.quantity} = ₹{item.quantity * item.price}</span> 
              <button className='bg-red-700 p-2 rounded-2xl' style={{ marginLeft: '10px' }} onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      {items.length > 0 && (
        <button className='bg-blue-700 p-2 rounded-2xl'  onClick={clearCart} style={{ marginTop: '10px' }}>
          Clear Cart
        </button>
      )}
    </div>
        </>
    )
}

export default Cart