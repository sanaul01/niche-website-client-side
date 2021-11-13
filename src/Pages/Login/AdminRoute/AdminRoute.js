import React from 'react';
import { CircularProgress } from '@mui/material';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const {user, admin, isLoding} = useAuth();
    
    if(isLoding) { return <CircularProgress/> }
    
    return (
        <Route
        {...rest}
        render={({ location }) =>
            user?.email && admin ? (
            children
            ) : (
            <Redirect
                to={{
                pathname: "/home",
                state: { from: location }
                }}
            />
            )
        }
        />
    );
};

export default AdminRoute;