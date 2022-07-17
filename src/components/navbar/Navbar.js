//react
import React from 'react'

// //css
import './navbar.css'

//----------------------------------------------------------------//
const Navbar = () => {
    return (
        <div className='navbar'>
        <div className="navbar__container">
            <span className="navbar__logo">
                Hotelbooking
            </span>
            <div className="navbar__items">
                <button className="navbar__btn">Register</button>
                <button className="navbar__btn">Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar
//----------------------------------------------------------------//