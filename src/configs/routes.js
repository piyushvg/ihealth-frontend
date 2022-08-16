import React from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import SignUp from '../account/signup/index';
import SignIn from '../account/signIn/index';
import Onboarding1 from '../account/signup/onboarding1';
import OnBoarding2 from '../account/signup/onboarding2';
import OnBoarding3 from '../account/signup/onboarding3';
import OnBoarding4 from '../account/signup/onboarding4';
import OnBoarding5 from '../account/signup/onboarding5';

const AppRoute = () => {
  let routes = useRoutes([
    { path: '/', element: <SignIn /> },
    { path: '/register', element: <SignUp /> },
    { path: '/onboarding1', element: <Onboarding1 /> },
    { path: '/onboarding2', element: <OnBoarding2 /> },
    { path: '/onboarding3', element: <OnBoarding3 /> },
    { path: '/onboarding4', element: <OnBoarding4 /> },
    { path: '/onboarding5', element: <OnBoarding5 /> },
    { path: '*', element: <Navigate to='/' replace /> },
  ]);
  return routes;
};

export default AppRoute;
