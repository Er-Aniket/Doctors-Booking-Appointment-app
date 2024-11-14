import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { assets } from '../assets/assets_frontend/assets';


const Navbar = () => {
    const navigate = useNavigate();
    const[showMenu, setshowMenu] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
     
     <NavLink to='/'> <img className="w-44 cursor-pointer" src='logo.svg'alt="logo" /></NavLink>
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to="/">
        <li className='py-1'> HOME </li>
        <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to="/doctors">
        <li className='py-1'> ALL DOCTORS </li>
        <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to="/about">
        <li className='py-1'> ABOUT </li>
        <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
        
        <NavLink to="/contact">
        <li className='py-1'> CONTACT </li>
        <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
        
        
      </ul>
      <div className="flex items-center gap-4">
        {isAuthenticated ? (
          <div className="relative group flex items-center gap-2 cursor-pointer">
            <img className="w-8 rounded-full transition-transform duration-300 ease-in hover:scale-110" src='profilePic.png' alt='Profile Pic' />
            <img className="w-3.5" src="/drop.2.png" alt="dropdown" />

            {/* Dropdown menu */}
            <div className="absolute top-full right-0 pt-2 mt-2 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p onClick={() => navigate('/my-profile')} className="hover:text-black cursor-pointer hover:border-gray-500 hover:border-2">My Profile</p>
                <p onClick={() => navigate('/my-appointments')} className="hover:text-black cursor-pointer hover:border-gray-500 hover:border-2">My Appointments</p>
                <p onClick={() => setIsAuthenticated(false)} className="hover:text-black cursor-pointer hover:border-gray-500 hover:border-2">Logout</p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate('/login')}
            className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block"
          >
            Create Account
          </button>
        )}
        <img onClick={() => setshowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="Menu" />
{/* Mobile menu */}
<div className={`fixed ${showMenu ? 'w-full h-full' : 'h-0 w-0'} md:hidden right-0 top-0 z-20 overflow-hidden transition-all bg-white`}>
  {showMenu && (
    <>
      <div className='flex items-center justify-between px-5 py-6'>
        <img className='w-36' src={assets.logo} alt="Logo" />
        <img className='w-7 cursor-pointer' onClick={() => setshowMenu(false)} src={assets.cross_icon} alt="Close menu" />
      </div>
      <ul className='flex flex-col items-center gap-2 mt-5 text-lg font-medium'>
        <NavLink onClick={() => setshowMenu(false)} to='/'><p className='px-4 py-2 rounded inline-block'>HOME</p></NavLink>
        <NavLink onClick={() => setshowMenu(false)} to='/doctors'><p className='px-4 py-2 rounded inline-block'>ALL DOCTORS</p></NavLink>
        <NavLink onClick={() => setshowMenu(false)} to='/about'><p className='px-4 py-2 rounded inline-block'>ABOUT</p></NavLink>
        <NavLink onClick={() => setshowMenu(false)} to='/contact'><p className='px-4 py-2 rounded inline-block'>CONTACT</p></NavLink>
      </ul>
    </>
  )}
</div>

       </div>
       </div>
   
  );
}

export default Navbar;
