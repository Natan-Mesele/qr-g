import React from 'react'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';

function Header() {
  return (
    <div className='p-4 bg-black text-white'>
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
                    <a href='#'>Menu</a>
                    <a href='#'>Reservation</a>
                    <a href='#'>Cart</a>
                    <a href='#'>Login</a>
                </div>
                
            </div>
            <div className='sm:hidden'>
                <div className='flex items-center cursor-pointer'>
                    <MenuIcon />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header