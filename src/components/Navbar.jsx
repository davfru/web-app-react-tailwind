import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const handleNav = () => setNav(!nav);

    return (
        <div className="w-full h-[90px] bg-black">
            <div className='max-w-[1240px] mx-auto px-4 flex justify-between'>
                <div>
                    <h1 className='pt-5 text-[#00d8ff]'>DEFI</h1>
                </div>
                <div className='hidden md:flex'>
                    <ul className='flex text-white items-center'>
                        <li>Platform</li>
                        <li>Developers</li>
                        <li>Community</li>
                        <li>About</li>
                        <li>
                            <button>Use DEFI</button>
                        </li>
                    </ul>
                </div>

                {/** mobile menu */}
                <div className='md:hidden'>
                    <div onClick={handleNav} className='pt-5'>
                        { nav ? 
                        <AiOutlineClose size={30} className='text-white'/> : 
                        <AiOutlineMenu size={30} className='text-white'/>
                        }
                    </div>
                   
                    <div className={nav ? 'w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center' : 'hidden'}>
                        <ul>
                            <li className='text-2xl'>Platform</li>
                            <li className='text-2xl'>Developers</li>
                            <li className='text-2xl'>Community</li>
                            <li className='text-2xl'>About</li>
                            <li className='text-2xl'>
                                <button className='m-8'>Use DEFI</button>
                            </li>
                        </ul>
                    </div>
                </div>

               
                
            </div>
        </div>
    )
}

export default Navbar;