import React from 'react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'


export default function Navbar() {
    function handleScroll() {
        if (window.scrollY > 25) {
            setIsScrolling(true)
        } else {
            setIsScrolling(false)
        }

    }
    const [isScrolling, setIsScrolling] = useState(false)
    window.addEventListener('scroll', handleScroll)
    return (
        <>
            <nav className={`${isScrolling == false ? "p-2 md:p-6" : "md:p-2 p-1"} transition-all duration-[400ms] z-50 
                        flex justify-between items-cente bg-white text-black font-bold
                         fixed top-0 right-0 left-0
                        md:right-14 md:left-14 md:px-20 border-2 md:rounded-b-2xl rounded-b-lg`}>
                <h2 className='uppercase text-4xl'>alpha build </h2>
                <ul className='uppercase flex justify-center items-center md:gap-5'>
                    <li><NavLink className='p-2 ' to={''}>home</NavLink></li>
                    <li><NavLink className='p-2' to={'Projects'}>Projects</NavLink></li>
                    <li><NavLink className='p-2' to={'contact'}>contact</NavLink></li>
                </ul>
            </nav>
        </>
    )
}