import React, { useState } from 'react'
import './navbar.css'


const Navbar = () => {
    let profile = <img className='profile-img' src='./img/profile.png' alt='profile'/>
    let logo = <img className='logo' src='./img/logo.svg' alt='logo'/>
    let logo2 = <img className='logo2' src='./img/logo2.png' alt='logo2'/>
    const [isOpen, setIsOpen] = useState(false)

    return (

        <nav>
            <div className='navbar'>

                <div className={`nav_items ${isOpen && "open"}`}>
                    <div className='porfile'>

                        {profile}

                        <div className='porfile-text'>
                            <p>Lucas Ezequiel Silva</p>
                            <p>lucasezequielsilva@gmail.com</p>
                        </div>

                    </div>

                    <a href="#"><span>Home</span></a>
                    <a href="#">Mongos</a>
                    <a href="#">My mongos</a>
                    <a href="#">Favourites</a>
                    <a href="#">Logout</a>
                </div>
                <div className={`nav_toggle  ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

            </div>

            <div className='logo'>
                {logo}
                {logo2}
            </div>
        </nav>
    )

}

export default Navbar