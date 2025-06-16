import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/signup'}>Sign Up</NavLink>
            <NavLink to={'/login'}>Log In</NavLink>
        </nav>
    </div>
  )
}
export default Navbar