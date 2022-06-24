import React from 'react';
import { Navigate } from 'react-router-dom';
import { IsLogin } from '../../utils/CheckLogin';

export default function PrivateRoute(props) {
    if (IsLogin()) {
        return props.children;
    }
    return <Navigate to='/login' replace />
}
