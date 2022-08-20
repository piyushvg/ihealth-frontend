import React from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import SignUp from '../account/signup/index';
import SignIn from '../account/signIn/index';
import Dashboard from '../pages/dashboard';

const AppRoute = () => {
  let routes = useRoutes([
    { path: '/', element: <SignIn /> },
    { path: '/register', element: <SignUp /> },
    { path: '/dashboard', element: <Dashboard /> },
    { path: '*', element: <Navigate to='/' replace /> },
  ]);
  return routes;
};

export default AppRoute;
