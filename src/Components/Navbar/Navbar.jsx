import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../AuthProvider/AuthProvider'
import './Navbar.css'

const Navbar = () => {
  
  const navigate = useNavigate();
  const handleClick = () => {
    logOut()
    navigate("/")
  }
  const {beboharkari, logOut} = useContext(AuthContext)
  if(beboharkari){
    return (
    <div>
    <NavLink style={{padding : "10px"}} to={'/'}>Home</NavLink>
    <NavLink style={{padding : "10px"}} to={'/profile'}>Profile</NavLink>
    <button style={{padding : "10px"}} onClick={handleClick}>Log Out</button>
    </div> )
  }else  {
    return (
    <div>
    <NavLink style={{padding : "10px"}} to={'/'}>Home</NavLink>
      <NavLink style={{padding : "10px"}}  className="Navbar" to={'/signup'}>Sign Up</NavLink>
      <NavLink style={{padding : "10px"}}  className="Navbar" to={'/login'}>Log In</NavLink>
    </div>)
  }
}
export default Navbar