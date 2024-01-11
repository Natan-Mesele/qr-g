import React from 'react'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';

function Header() {
  return (
    <div className='p-4'>
        <div className='flex justify-between'>
            <div>
                <LocationOnIcon />
                <span>EDNA MALL</span>
                <AccessTimeIcon />
                <span>06:08 - 23:08</span>
            </div>
            <div>
                <SearchIcon />
            </div>
        </div>
        <div className='flex'>
            <div>
                <img src="https://order.qranbessa.net/uploads/a3fb7c7b6c408451a0a8bf4716711929.png" />
            </div>
            <div>
                <a href='#'>Menu</a>
                <a href='#'>Reservation</a>
                <a href='#'>Cart</a>
                <a href='#'>Login</a>
            </div>
            <div>
                <MenuIcon />
            </div>
        </div>
    </div>
  )
}

export default Header