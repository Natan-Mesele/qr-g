import React, { useState } from 'react'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';
import RegisterPopup from './RegisterPopup';

function Header() {
    const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);
    const [isRegisterPopupOpen, setRegisterPopupOpen] = useState(false);

    const toggleBurgerMenu = () => {
        setBurgerMenuOpen(!burgerMenuOpen);
    };

    const openRegisterPopup = () => {
        setBurgerMenuOpen(false);  
        setRegisterPopupOpen(true); 
    };
    
    const closeRegisterPopup = () => {
        setRegisterPopupOpen(false);
    };

  return (
    <div className='p-4 bg-black text-white lg:px-20 transition-colors duration-300 ease-in-out'>
        <div className='flex justify-between gap-4 border-b-2 pb-4'>
            <div className='text-xs'>
                <LocationOnIcon className='mr-2'/>
                <span>EDNA MALL</span> 
            </div>
            <div className='text-xs flex-1 border-l-2 ' >    
                <AccessTimeIcon className='mx-3'/>
                <span>06:08 - 23:08</span>
            </div>
            <div className='hidden sm:block'> 
                <SearchIcon className='cursor-pointer'/>
            </div>
        </div>
        <div className='flex justify-between items-center pt-4'>
            <div className=''>
                <img src="https://order.qranbessa.net/uploads/a3fb7c7b6c408451a0a8bf4716711929.png" className='rounded-lg object-cover h-20 w-22'/>
            </div>
            <div className='hidden sm:block'>
                <div className='flex gap-6 item-center uppercase text-sm'>
                    <Link to="/" className="border-b-2 border-white w-10">Menu</Link>
                    <Link to="/reservation">Reservation</Link>
                    <Link to="/cart" onClick={openRegisterPopup}>Cart</Link>
                    <Link to="/login">Login</Link>
                </div>
                {isRegisterPopupOpen && <RegisterPopup onClose={closeRegisterPopup} />}
            </div>
            <div className='sm:hidden cursor-pointer'>
                <MenuIcon onClick={toggleBurgerMenu}/>
            </div>
        </div>
        {burgerMenuOpen && (
        <div className='grid absolute top-0 right-0 bg-black w-60 h-full sm:hidden'>
            <div className='m-2'>
                <CloseIcon className='cursor-pointer m-3' onClick={toggleBurgerMenu}/>
                <div className='flex flex-col  p-4 gap-4 uppercase text-sm'>
                    <Link to="/" className="border-b-2 border-white w-10"> Menu</Link>
                    <Link to="/reservation">Reservation</Link>
                    <Link to="/cart" onClick={openRegisterPopup}>Cart</Link>
                    <Link to="/login">Login</Link>
                </div>
                {isRegisterPopupOpen && <RegisterPopup onClose={closeRegisterPopup} />}
            </div>
        </div>
        )}
    </div>
  )
}

export default Header