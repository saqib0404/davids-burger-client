import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className='h-screen flex justify-center items-center flex-col'>
            <progress className="progress w-56"></progress> <br />
            <h2 className='text-3xl'>Loading..</h2>
        </div>
    }
    if (user?.uid) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;