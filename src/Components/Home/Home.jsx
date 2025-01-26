import React from 'react'
import header from '../../assets/images/header.jpg'
export default function Home() {
  return (
    <>
       <header>
      
      <div className='relative'>
      <img className=' w-full min-h-screen object-cover object-center' src={header} alt="" />
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black-800"></div>
      <h2 className='absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center text-white capitalize md:text-6xl text-5xl '>welcome to alpha build </h2>
      
      </div>
    </header>
    </>
  )
}
