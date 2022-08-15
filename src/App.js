import React from 'react';
import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import SignUp from './account/signup/index';
import SignIn from './account/signIn/index';
import Onboarding1 from './account/signup/onboarding1';
import OnBoarding2 from './account/signup/onboarding2';
import OnBoarding3 from './account/signup/onboarding3';
import OnBoarding4 from './account/signup/onboarding4';
import OnBoarding5 from './account/signup/onboarding5';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/register' element={<SignUp />} />
        <Route path='/onboarding1' element={<Onboarding1 />} />
        <Route path='/onboarding2' element={<OnBoarding2 />} />
        <Route path='/onboarding3' element={<OnBoarding3 />} />
        <Route path='/onboarding4' element={<OnBoarding4 />} />
        <Route path='/onboarding5' element={<OnBoarding5 />} />
      </Routes>
    </BrowserRouter>
  );    
}   

export default App;
