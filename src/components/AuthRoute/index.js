import React from 'react';
import { Navigate } from 'react-router-dom';
import { IsLogin } from '../../utils/CheckLogin';

export default function AuthRoute(props) {
    if (IsLogin()) {
        return <Navigate to='/' replace />
    }
    return props.children;
}
