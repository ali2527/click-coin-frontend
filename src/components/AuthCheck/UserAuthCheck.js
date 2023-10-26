import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { Navigate } from 'react-router'

const UserAuthCheck = ({ children }) => {
    const navigate = useNavigate()
    const user = useSelector((state) => state.user.userData);
    const token = useSelector((state) => state.user.userToken);

    console.log(token)
    
    if(!token){
        return <Navigate to="/" replace={true} />
    }else{
        return (
            <>{children}</>
        )
    }
}

export default UserAuthCheck