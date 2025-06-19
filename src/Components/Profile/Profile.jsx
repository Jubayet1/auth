import React, { useContext } from 'react'
import { AuthContext } from '../../AuthProvider/AuthProvider'

const Profile = () => {
    const {beboharkari} = useContext(AuthContext);
  return (
    <div>
        <h1>{beboharkari? beboharkari.email : <div>Our Mistake</div>}</h1>
    </div>
  )
}

export default Profile