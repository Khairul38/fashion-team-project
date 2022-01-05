import { Box, CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../Hooks/useAuth/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { allContext } = useAuth();
    const { user, admin, loading } = allContext;
    let location = useLocation();
    if (loading) {
        return <Box sx={{ display: 'flex', justifyContent: 'center', my: 8 }}>
            <CircularProgress sx={{ color: '#EC9C31' }} />
        </Box>
    }
    if (user.email && admin) {
        return children;
    }
    return <Navigate to="login" state={{ from: location }}></Navigate>
};

export default AdminRoute;