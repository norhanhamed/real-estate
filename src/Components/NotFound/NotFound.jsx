import React from 'react'
import notFound from '../../assets/images/notfound.jpg'
export default function NotFound() {
    return (
        <>
            <section className=' bg-[#191919] h-screen'>
                <img className='md:w-1/2 mx-auto h-screen w-screen' src={notFound} alt="not found image" />
            </section>
        </>
    )
}
