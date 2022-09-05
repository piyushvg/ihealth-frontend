import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './style.css';
import iHealthLogo from '../../../assets/img/iHealthOX-Logo.svg';
import { Field, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { AccountContext } from '../../../service/Account';
import {
  isLoadingHandler,
  userHandler,
} from '../../../redux/reducer/commonSlice';
import { message } from 'antd';

const initialValues = () => {
  let params = {
    email: '',
    password: '',
  };
  return params;
};

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address format')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be 8 characters at minimum')
    .required('Password is required'),
});

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { authenticate } = useContext(AccountContext);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (values) => {
    try {
      if (isLoading) return;
      if (!values.email || !values.password) return;
      setIsLoading(true);
      dispatch(isLoadingHandler(true));
      const data = await authenticate(values.email, values.password);
      if (data) {
        userHandler(data.idToken.payload);
        message.success('Login successful!');
        setIsLoading(false);
        dispatch(isLoadingHandler(false));
      }
    } catch (err) {
      message.error(err.message);
      setIsLoading(false);
      dispatch(isLoadingHandler(false));
    }
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => handleSubmit(values)}
        validationSchema={LoginSchema}
      >
        {(formikBag) => {
          const { touched, errors, isValid, dirty } = formikBag;
          return (
            <div className="outer_box">
              <div className="logo_head">
                <div
                  className="signIn_logo_sec"
                  style={{ width: '25%', marginLeft: '15px' }}
                >
                  <img src={iHealthLogo}></img>
                </div>
              </div>
              <div className="main-login">
                <h1>Sign in</h1>
                <div className="w_100">
                  <label>Email</label>
                  <Field
                    type="email"
                    name="email"
                    className={`inp_box  ${
                      touched.email && errors.email
                        ? 'alert_err is-invalid'
                        : ''
                    }`}
                    placeholder="Email address "
                    autocomplete="off"
                    autoFocus
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    style={{ color: 'red', fontSize: 12 }}
                  />
                </div>

                <div className="w_100">
                  <label>Password</label>
                  <input
                    type="checkbox"
                    id="show-password"
                    className="show-password"
                    checked={!showPassword}
                    onClick={() => setShowPassword(!showPassword)}
                  />
                  <label
                    for="show-password"
                    className="Control-label Control-label--showPassword"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      width="22"
                      height="22"
                      className="svg-toggle-password"
                      title="Toggle Password Security"
                    >
                      <title>Hide/Show Password</title>
                      <path d="M24,9A23.654,23.654,0,0,0,2,24a23.633,23.633,0,0,0,44,0A23.643,23.643,0,0,0,24,9Zm0,25A10,10,0,1,1,34,24,10,10,0,0,1,24,34Zm0-16a6,6,0,1,0,6,6A6,6,0,0,0,24,18Z" />
                      <rect
                        x="20.133"
                        y="2.117"
                        height="44"
                        transform="translate(23.536 -8.587) rotate(45)"
                        className="closed-eye"
                      />
                      <rect
                        x="22"
                        y="3.984"
                        width="4"
                        height="44"
                        transform="translate(25.403 -9.36) rotate(45)"
                        // style="fill:#fff"
                        className="closed-eye"
                      />
                    </svg>
                  </label>
                  <Field
                    type={showPassword ? 'text' : 'password'}
                    className={`inp_box ${
                      touched.password && errors.password ? 'is-invalid' : ''
                    }`}
                    name="password"
                    placeholder="••••••••"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    style={{ color: 'red', fontSize: 12 }}
                  />
                </div>

                <div className="w_100 flex">
                  <a href="#">Forgot password?</a>
                  <NavLink to="/register">Not a member?</NavLink>
                </div>
                <div className="w_100 center">
                  <input
                    type="submit"
                    value=" Sign in"
                    className="btn_log"
                    disabled={!isValid || !dirty}
                    onClick={formikBag.handleSubmit}
                  />
                </div>
                <div className="border">
                  <span>or</span>
                </div>
                <div className="w_100 center">
                  <input
                    type="button"
                    value="Get started"
                    className="btn_reg"
                    onClick={() =>
                      navigate('/register', { state: { steps: 0 } })
                    }
                  />
                </div>
              </div>
            </div>
          );
        }}
      </Formik>
    </>
  );
};

export default SignIn;
