import React from 'react';
import { useSelector , useDispatch } from 'react-redux';
import Cartrow from './Cartrow';
import { clearCart } from './Utility/CartSlice';

const Cart = () => {

  let cartData = useSelector((state) => state.cart.items);
  // console.log(cartData);

  let dispatch = useDispatch();

  let handleClearCart = () => {
    dispatch(clearCart())
  }

  return (
    <div className='bg-white text-black min-h-screen border-2 border-red-600' >
      <div className="overflow-x-auto mx-10 text-2xl">
  <table className="table">
   
    <thead>
      <tr className='text-xl text-blue-900'>
        <th>Product Name</th>
        <th>Category</th>
        <th> Quantity </th>
        <th>Price </th>
        <th> <span> 🔼 </span> Rating <span> 🔽 </span> </th>
        <th > ❌ </th>
      </tr>
    </thead>
    <tbody>
     {
      cartData.map((item)=><Cartrow cartObj={item} key={item.id}></Cartrow>)
     } 
      
    </tbody>
    
    
  </table>
  <div className = "w-full text-center mb-5">
  <button className='btn btn-error w-3/6  text-2xl' onClick={handleClearCart}> Clear Cart </button>
  </div>
</div>
    </div>
  )
}

export default Cart
