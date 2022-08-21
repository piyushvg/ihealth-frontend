import React, { lazy } from 'react';
import { useRoutes, Navigate } from 'react-router-dom';

import { Account } from '../service/Account';
import ProtectedRoutes from '../service/ProtectedRoutes';
import PublicRoutes from '../service/PublicRoutes';

const SignIn = lazy(() => import('../pages/account/signIn'));
const SignUp = lazy(() => import('../pages/account/signup'));
const Dashboard = lazy(() => import('../pages/dashboard'));

const AppRoute = () => {
  let routes = useRoutes([
    { path: '/signin', element: <PublicRoutes Component={SignIn} /> },
    { path: '/register', element: <PublicRoutes Component={SignUp} /> },
    { path: '/dashboard', element: <ProtectedRoutes Component={Dashboard} /> },
    { path: '/', element: <Navigate to="/dashboard" replace /> },
    { path: '*', element: <Navigate to="/" replace /> },
  ]);
  return <Account>{routes}</Account>;
};

export default AppRoute;
