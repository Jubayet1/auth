import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../AuthProvider/AuthProvider'

const Navbar = () => {
  const {beboharkari, logOut} = useContext(AuthContext)
  if(beboharkari){
    return (
    <div>
    <NavLink to={'/'}>Home</NavLink>
    {console.log("fromNavbar")}
    <button onClick={logOut}>Log Out</button>
    </div> )
  }else  {
    return (
    <div>
    <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/signup'}>Sign Up</NavLink>
      <NavLink to={'/login'}>Log In</NavLink>
    </div>)
  }
}
export default Navbar