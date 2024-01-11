import React from 'react'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';

function Header() {
  return (
    <div className='px-4 py-1'>
        <div className='flex justify-between gap-4 border-b-2 p-2'>
            <div className='text-xs'>
                <LocationOnIcon className='mr-2'/>
                <span>EDNA MALL</span> 
            </div>
            <div className='text-xs flex-1 border-l-2 ' >    
                <AccessTimeIcon className='mx-2'/>
                <span>06:08 - 23:08</span>
            </div>
            <div> 
                <SearchIcon className='cursor-pointer'/>
            </div>
        </div>
        <div className='flex justify-between items-center '>
            <div className='w-20'>
                <img src="https://order.qranbessa.net/uploads/a3fb7c7b6c408451a0a8bf4716711929.png" />
            </div>
            <div className='hidden sm:block'>
                <div className='flex gap-6 item-center'>
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