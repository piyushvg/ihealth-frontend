import React, { useState } from 'react';
import './style.css';
import iHealthLogo from '../../assets/img/iHealthOX-Logo.svg';
import Onboarding1 from './onboarding1';
import OnBoarding2 from './onboarding2';
import OnBoarding3 from './onboarding3';
import OnBoarding4 from './onboarding4';
import OnBoarding5 from './onboarding5';
import { CognitoUserAttribute } from 'amazon-cognito-identity-js';

import UserPool from '../../service/UserPool';

const SignUp = () => {
  const [steps, setSteps] = useState(1);
  const [name, setName] = useState('');
  const [family_name, setFamily_name] = useState('');
  const [email, setEmail] = useState('');
  const [phone_number, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !family_name || !email || !phone_number || !password) {
      return alert('Please fill all required fields!');
    }
    if (password !== confirm_password) {
      return alert('Your password does not match with confirm password!');
    }
    const attributeName = new CognitoUserAttribute({
      Name: 'name',
      Value: name,
    });
    const attributeFamily = new CognitoUserAttribute({
      Name: 'family_name',
      Value: family_name,
    });
    const attributePhoneNumber = new CognitoUserAttribute({
      Name: 'phone_number',
      Value: phone_number,
    });
    UserPool.signUp(
      email,
      password,
      [attributeName, attributeFamily, attributePhoneNumber],
      [],
      (err, data) => {
        if (err) {
          console.error(err);
        } else {
          console.log(data);
        }
      }
    );
  };

  if (steps === 1) {
    return <Onboarding1 setSteps={setSteps} />;
  } else if (steps === 2) {
    return <OnBoarding2 setSteps={setSteps} />;
  } else if (steps === 3) {
    return <OnBoarding3 setSteps={setSteps} />;
  } else if (steps === 4) {
    return <OnBoarding4 setSteps={setSteps} />;
  } else if (steps === 5) {
    return <OnBoarding5 setSteps={setSteps} />;
  } else {
    return (
      <div className='outer_box'>
        <div className='logo_head'>
          <div
            className='logo_sec'
            style={{ width: '25%', marginLeft: '15px' }}
          >
            <img src={iHealthLogo} />
          </div>
        </div>

        <div className='main-login reg_sec'>
          <div className='mflex step_6'>
            <div className='dot_step'>
              <a className=''></a>
              <a className=''></a>
              <a className=''></a>
              <a className=''></a>
              <a className=''></a>
              <a className=''></a>
              <a className='dot_fill'></a>
            </div>
            <h1>Create an account</h1>
            <form onSubmit={handleSubmit}>
              <div className='w_100'>
                <div className='w_50lft'>
                  <label>First name *</label>
                  <input
                    type='text'
                    name='name'
                    className='inp_box'
                    placeholder='First name'
                    autoComplete='off'
                    required
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>
                <div className='w_50rgt'>
                  <label>Last name *</label>
                  <input
                    type='text'
                    name='family_name'
                    className='inp_box'
                    placeholder='Last name'
                    autoComplete='off'
                    required
                    value={family_name}
                    onChange={(event) => setFamily_name(event.target.value)}
                  />
                </div>
              </div>
              <div className='w_100'>
                <div className='w_50lft'>
                  <label>Email *</label>
                  <input
                    type='text'
                    name='email'
                    className='inp_box'
                    placeholder='Email '
                    autoComplete='off'
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
                <div className='w_50rgt'>
                  <label>Phone *</label>
                  <input
                    type='text'
                    name='phone_number'
                    className='inp_box'
                    placeholder='Phone '
                    autoComplete='off'
                    required
                    value={phone_number}
                    onChange={(event) => setPhoneNumber(event.target.value)}
                  />
                </div>
              </div>

              {/* <div className="w_100">
                  <div className="w_50lft">
                    <label>Password *</label>
                    <select className="inp_box nw_slct">
                      <option value="ON">ON</option>
                    </select>
                  </div>
                  <div className="w_50rgt">
                    <label>Confirm password *</label>
                    <select className="inp_box nw_slct">
                      <option value="Canada">Canada</option>
                    </select>
                  </div>
                </div> */}

              <div className='w_100'>
                <div className='w_50lft'>
                  <label>Password *</label>
                  <input
                    type='Password'
                    name='password'
                    className='inp_box '
                    placeholder='••••••••'
                    autoComplete='off'
                    required
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </div>
                <div className='w_50rgt'>
                  <label>Confirm password *</label>
                  <input
                    type='Password'
                    name='confirm_password'
                    className='inp_box '
                    placeholder='••••••••'
                    autoComplete='off'
                    required
                    value={confirm_password}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                  />
                </div>
              </div>

              <div className='w_100 center'>
                <input type='submit' value='Get started' className='btn_log' />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
};

export default SignUp;
