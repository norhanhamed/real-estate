import React from 'react'

export default function Footer() {
    return (
        <>
            <footer className='bg-black md:flex justify-between items-center  md:px-20 py-12 text-xl text-white '>
                <div>
                    <h2 className='text-5xl font-bold '>alpha build </h2>
                    <p className='my-5'>Residential and Commercial Construction Specialists.<br /> Our company brings expertise, reliability, and quality to <br /> every construction project.</p>

                    <div className="icons mb-5">
                        <i className="fa-brands fa-square-facebook me-3 hover:text-slate-600 transition-all duration-200"></i>
                        <i className="fa-brands fa-linkedin hover:text-slate-600 transition-all duration-200"></i>
                    </div>
                </div>
                <div>
                    <h3 className='hover:text-slate-600 transition-all duration-200'>Our Projects</h3>
                    <h3 className='hover:text-slate-600 transition-all duration-200'>About Us</h3>
                    <h3 className='hover:text-slate-600 transition-all duration-200'>Get in Touch</h3>

                </div>
            </footer>
        </>
    )
}
