import React, { useContext } from 'react'
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {beboharkari} = useContext(AuthContext);
if(beboharkari !== null){
    console.log("beboharkari ache")
    return children
} else {
    console.log("beboharkari nai")
    return <Navigate to="/"></Navigate>
}
}

export default PrivateRoutes