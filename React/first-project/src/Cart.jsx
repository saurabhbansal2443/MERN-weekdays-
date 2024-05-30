import React from 'react'

const Cart = () => {
  return (
    <div className='bg-white text-black h-screen border-2 border-red-600' >
      <div className="overflow-x-auto mx-10 text-2xl">
  <table className="table">
    {/* head */}
    <thead>
      <tr className='text-xl text-blue-900'>
        <th>Product Name</th>
        <th>Description </th>
        <th>Price </th>
        <th> <span> 🔼 </span> Rating <span> 🔽 </span> </th>
        <th > ❌ </th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr className='text-2xl'>
       
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br/>
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td>4.5</td>
        <td>Purple</td>
        <th>
          <button className="btn text-lg">Remove </button>
        </th>
      </tr>
    </tbody>
    
    
  </table>
</div>
    </div>
  )
}

export default Cart
