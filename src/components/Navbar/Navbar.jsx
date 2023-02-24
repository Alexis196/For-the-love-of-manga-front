import React from 'react'
import './navbar.css'

export default function Navbar() {
    let menu = <img src='./img/Menu.svg' alt='Menu'/>
    let logo = <img className='logo1' src='./img/Logo.svg' alt='Logo'/>
    let logo2 = <img className='logo2' src='./img/logo2.png' alt='logo2'/>
    return (
    <div className='navbar'>
        {menu}
        {logo}
        {logo2}
    </div>
)
}
