import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import './style.css';
import iHealthLogo from '../../assets/img/iHealthOX-Logo.svg';
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import UserPool from '../../service/UserPool';

const SignIn = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !password) {
      return alert('Please fill all required fields!');
    }
    const user = new CognitoUser({
      Username: email,
      Pool: UserPool,
    });
    const authDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });

    user.authenticateUser(authDetails, {
      onSuccess: (data) => {
        console.log(data);
        navigate('/dashboard');
      },
      onFailure: (err) => {
        console.error(err);
        alert(err.message);
      },
      newPasswordRequired: (data) => {
        console.log('New Password required!', data);
      },
    });
  };

  return (
    <>
      <div className='outer_box'>
        <div className='logo_head'>
          <div
            className='logo_sec'
            style={{ width: '25%', marginLeft: '15px' }}
          >
            <img src={iHealthLogo}></img>
          </div>
        </div>
        <div className='main-login'>
          <h1>Sign in</h1>
          <form onSubmit={handleSubmit}>
            <div className='w_100'>
              <label>Email</label>
              <input
                type='text'
                name='email'
                className='inp_box alert_err'
                placeholder='email address '
                autoComplete='off'
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            <div className='w_100'>
              <label>Password</label>
              <input
                type='checkbox'
                id='show-password'
                className='show-password'
              />
              <label
                htmlFor='show-password'
                className='Control-label Control-label--showPassword'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 48 48'
                  width='22'
                  height='22'
                  className='svg-toggle-password'
                  title='Toggle Password Security'
                >
                  <title>Hide/Show Password</title>
                  <path d='M24,9A23.654,23.654,0,0,0,2,24a23.633,23.633,0,0,0,44,0A23.643,23.643,0,0,0,24,9Zm0,25A10,10,0,1,1,34,24,10,10,0,0,1,24,34Zm0-16a6,6,0,1,0,6,6A6,6,0,0,0,24,18Z' />
                  <rect
                    x='20.133'
                    y='2.117'
                    height='44'
                    transform='translate(23.536 -8.587) rotate(45)'
                    className='closed-eye'
                  />
                  <rect
                    x='22'
                    y='3.984'
                    width='4'
                    height='44'
                    transform='translate(25.403 -9.36) rotate(45)'
                    // style="fill:#fff"
                    className='closed-eye'
                  />
                </svg>
              </label>
              <input
                type='Password'
                name='comp-name'
                className='inp_box '
                placeholder='••••••••'
                autoComplete='off'
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>

            <div className='w_100 flex'>
              <a href='#'>Forgot password?</a>
              <NavLink to='/register'>Not a member?</NavLink>
            </div>
            <div className='w_100 center'>
              <input type='submit' value=' Sign in' className='btn_log' />
            </div>
            <div className='border'>
              <span>or</span>
            </div>
            <div className='w_100 center'>
              <input type='submit' value='Get started' className='btn_reg' />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
