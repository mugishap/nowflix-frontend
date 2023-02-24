import React, { ReactNode, useState } from "react";
import { Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import SearchComponent from "../SearchComponent";

const CommonComponent: React.FC<{ children: ReactNode }> = ({ children }) => {

    const [showNavbar, setShowNavbar] = useState(false)
    const [showSearch, setShowSearch] = useState(false)
    const navBarLinks = [
        {
            name: "Home",
            href: "/",
        },
        {
            name: "TV Shows",
            href: "/shows"
        },
        {
            name: "Movies",
            href: "/movies"
        },
        {
            name: "News & Popular",
            href: "/news"
        },
        {
            name: "My List",
            href: "/list"
        }
    ]

    return (
        <div className="relative min-h-screen bg-black/90 w-screen flex flex-col overflow-hidden">
            {
                showNavbar ?
                    <Slide direction='left' className="z-50 " triggerOnce>
                        <div className='absolute w-screen justify-center h-screen bg-black/80 flex items-center z-[2]'>
                            <div className='absolute z-[3] w-screen h-screen' onClick={() => setShowNavbar(false)}></div>
                            <div className='w-8/12 md:w-6/12 h-4/5 rounded flex items-center justify-center bg-gray-900 z-[4]'>
                                <div className="flex flex-col w-fit">
                                    {navBarLinks.map((link, index) => (
                                        <Link className='rounded text-white text-xl hover:bg-white/40 my-2 py-3 px-6' to={link.href} key={index}>
                                            <div>{link.name}</div>
                                        </Link>
                                    ))}
                                    <Link className='rounded text-white text-xl hover:bg-white/40 my-2 py-3 px-6' to={'/profile'}>
                                        <div>Profile</div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Slide>
                    :
                    null
            }
            {
                showSearch ?
                    <Slide direction='left' className="z-50 " triggerOnce>
                        <SearchComponent showSearch={showSearch} setShowSearch={setShowSearch} />
                    </Slide>
                    :
                    null
            }
            <Navbar navBarLinks={navBarLinks} showNavbar={showNavbar} setShowNavbar={setShowNavbar} setShowSearch={setShowSearch} showSearch={false} />
            <Slide direction='up' triggerOnce>
                <div className=" w-full h-full flex flex-col items-center">{children}</div>
            </Slide>
        </div>
    );
};

export default CommonComponent;
