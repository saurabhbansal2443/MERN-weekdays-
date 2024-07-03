import React from 'react';
import { useGetUserQuery } from './Utility/authApi';

const About = () => {

  let {data , isError , isLoading } = useGetUserQuery();

if(isLoading){
  return <span className="loading loading-dots loading-lg"></span>
}
 
  return (
    <div className='bg-white text-black h-screen flex justify-center items-center'>
     <table className='border-2 border-red  w-1/2 h-1/2'>
      <tr  className='border-2 border-red  text-2xl px-auto '>
        <td>userName</td>
        <td>{data.data.userName}</td>
      </tr>
      <tr className='border-2 border-red text-2xl p-4 '>
        <td>Email</td>
        <td>{data.data.email} </td>
      </tr>
      <tr className='border-2 border-red  text-2xl px-auto '>
        <td>PhoneNumber</td>
        <td>{data?.data?.phoneNumber || "NA "} <svg xmlns="http://www.w3.org/2000/svg" width='22px' viewBox="0 0 24 24" fill="currentColor"><path d="M15.7279 9.57627L14.3137 8.16206L5 17.4758V18.89H6.41421L15.7279 9.57627ZM17.1421 8.16206L18.5563 6.74785L17.1421 5.33363L15.7279 6.74785L17.1421 8.16206ZM7.24264 20.89H3V16.6473L16.435 3.21231C16.8256 2.82179 17.4587 2.82179 17.8492 3.21231L20.6777 6.04074C21.0682 6.43126 21.0682 7.06443 20.6777 7.45495L7.24264 20.89Z"></path></svg>  </td>
      </tr>
     </table>
    </div>
  )
}

export default About
