import React , {useEffect} from 'react'

const About = () => {
  useEffect(()=>{  // This is just for understanding cleanUp function 
    let id = setInterval( ()=>{
      console.log("I am about timer ")
    },500)

    return ()=>{
      clearInterval(id)
    }
  },[])
  return (
    <div className='bg-white text-black h-screen'>
      <h1 className='text-3xl'> About Page </h1>
    </div>
  )
}

export default About
