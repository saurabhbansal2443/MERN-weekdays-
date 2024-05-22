import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// component is just a function which returns JSX 

// let Ele= function(){
  
//   return (
//    <div className='gp'>
//     gp 
//     <div className="p">
//       parent 
//       <div className="child">
//         child
//       </div>
//     </div>
//    </div>
// )}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>)
