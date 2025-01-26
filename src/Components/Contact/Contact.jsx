
import React, { useState } from 'react'

export default function Contact() {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  return (
    <>
      <section className=' my-6  '>
        <div className='text-center pt-28' >
          <h2 className='text-5xl'>contact us </h2>
        </div>

        <div className='inputs'>
          <div className='flex flex-col md:w-1/3 w-[90%]  mx-auto'>
            <div className='overflow-hidden'>
              <p className={`${userName == false ? 'translate-y-9' : 'translate-y-0'} transition-all duration-500 mb-3 font-bold text-xl text-[#B1ACA4]`}>name</p>
            </div>
            <input onChange={(e) => { setUserName(e.target.value) }} placeholder='name....' type="text" className=' outline-none border-[1px] border-black   p-3 rounded-lg placeholder:text-[#B1ACA4] placeholder:text-2xl  ' />
          </div>
          <div className='flex flex-col md:w-1/3 w-[90%]  mx-auto'>
            <div className='overflow-hidden'>
              <p className={`${email == false ? 'translate-y-9' : 'translate-y-0'} transition-all duration-500 mb-3 font-bold text-xl text-[#B1ACA4]`}>Email</p>
            </div>
            <input onChange={(e) => { setEmail(e.target.value) }} placeholder='Email....' type="email" className=' outline-none border-[1px] border-black   p-3 rounded-lg placeholder:text-[#B1ACA4] placeholder:text-2xl ' />
          </div>
          <div className='flex flex-col md:w-1/3 w-[90%]  mx-auto'>
            <div className='overflow-hidden'>
              <p className={`${message == false ? 'translate-y-9' : 'translate-y-0'} transition-all duration-500 mb-3 font-bold text-xl text-[#B1ACA4]`}>message</p>
            </div>
            <textarea onChange={(e) => { setMessage(e.target.value) }} placeholder='your meesage....' type="text" className=' outline-none border-[1px] border-black   p-3 rounded-lg placeholder:text-[#B1ACA4] placeholder:text-2xl  h-32 ' />
          </div>

        </div>
      </section>
    </>
  )
}