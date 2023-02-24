import React, { useEffect } from 'react'
import { BiMenu, BiSearchAlt2, BiX } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png"

interface Props {
    setShowNavbar: Function
    showNavbar: boolean,
    navBarLinks: {
        name: string,
        href: string
    }[],
    setShowSearch: Function,
    showSearch: boolean
}

const Navbar: React.FC<Props> = ({ navBarLinks, showSearch, showNavbar, setShowSearch, setShowNavbar }) => {

    return (
        <div className='absolute top-0 z-10 left-0 py-4 w-full h-42 bg-gradient-to-b from-black via-transparent3 to-transparent flex items-center px-12 justify-between'>
            <div className='flex items-center'>
                <Link to={"/"}>
                    <img className='w-24 mr-20' src={logo} alt="" />
                </Link>
                <ul className='hidden lg:flex'>
                    {
                        navBarLinks.map((link, index) => (
                            <li key={index} className='hover:text-nf-red text-white text-lg font-bold mx-6 font-lato'><Link to={link.href}>{link.name}</Link></li>
                        ))
                    }
                </ul>
            </div>
            <div className='flex items-center'>
                <BiSearchAlt2 onClick={() => setShowSearch(!showSearch)} className='text-white text-3xl cursor-pointer mr-6' />
                <div className='hidden lg:flex'>
                    <span className='font-bold text-xl mr-10 text-white'>Kids</span>
                    <Link to={"/profile"}>
                        <img src="src/assets/account.png" className='rounded' alt="" />
                    </Link>
                </div>
            </div>
            <BiMenu onClick={() => setShowNavbar(!showNavbar)} size={40} color='white' className='mx-4 flex lg:hidden cursor-pointer' />
        </div>
    )
}

export default Navbar