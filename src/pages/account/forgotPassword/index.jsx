import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './style.css';
import iHealthLogo from '../../../assets/img/iHealthOX-Logo.svg';
import { Field, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { isLoadingHandler } from '../../../redux/reducer/commonSlice';
import { message } from 'antd';
import { useTranslation } from 'react-i18next';
import { CognitoUser } from 'amazon-cognito-identity-js';
import Pool from '../../../service/Pool';

const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address format')
    .required('Email is required'),
});
const resetPasswordSchema = Yup.object().shape({
  code: Yup.string().required('Verfication code is required'),
  password: Yup.string()
    .min(8, 'Password must be 8 characters at minimum')
    .required('Password is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
    ),
  confirm_password: Yup.string().when('password', (password, field) =>
    password
      ? field
          .required('Confirm Password is required')
          .oneOf(
            [Yup.ref('password'), null],
            'Your password does not match with confirm password!'
          )
      : field
  ),
});

const ForgotPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [stage, setStage] = useState(1);
  const [email, setEmail] = useState('');

  const sendVerificationCode = (values) => {
    try {
      if (isLoading) return;
      setStage(0);
      setIsLoading(true);
      dispatch(isLoadingHandler(true));
      const user = new CognitoUser({
        Username: values.email.toLowerCase(),
        Pool: Pool,
      });

      user.forgotPassword({
        onSuccess: (data) => {
          console.log(data);
          setIsLoading(false);
          dispatch(isLoadingHandler(false));
          setStage(1);
        },
        onFailure: (err) => {
          console.error(err);
          setIsLoading(false);
          dispatch(isLoadingHandler(false));
          setStage(1);
        },
        inputVerificationCode: (data) => {
          setEmail(values.email.toLowerCase());
          message.success('Verificaiton code sent to your email');
          setIsLoading(false);
          dispatch(isLoadingHandler(false));
          setStage(2);
        },
      });
    } catch (err) {
      message.error(err.message);
      setIsLoading(false);
      dispatch(isLoadingHandler(false));
      setStage(1);
    }
  };

  const resetPassword = (values) => {
    if (isLoading) return;
    setIsLoading(true);
    dispatch(isLoadingHandler(true));
    const user = new CognitoUser({
      Username: email,
      Pool: Pool,
    });
    user.confirmPassword(values.code, values.password, {
      onSuccess: (data) => {
        message.success('Account reset successfull');
        setIsLoading(false);
        dispatch(isLoadingHandler(false));
        navigate('/signin');
      },
      onFailure: (err) => {
        console.error(err);
      },
    });
  };

  if (stage === 1) {
    return (
      <Formik
        initialValues={{ email: '' }}
        onSubmit={(values) => sendVerificationCode(values)}
        validationSchema={forgotPasswordSchema}
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
                <h1>Forgot Password</h1>
                <div className="w_100">
                  <label>{t('signin.email')}</label>
                  <Field
                    type="email"
                    name="email"
                    className={`inp_box  ${
                      touched.email && errors.email
                        ? 'alert_err is-invalid'
                        : ''
                    }`}
                    autoComplete="off"
                    autoFocus
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    style={{ color: 'red', fontSize: 12 }}
                  />
                </div>
                <div className="w_100 flex">
                  <NavLink to="/signin">{t('signup.signin')}</NavLink>
                </div>
                <div className="w_100 center">
                  <input
                    type="submit"
                    value="Submit"
                    className="btn_log"
                    disabled={!isValid || !dirty}
                    onClick={formikBag.handleSubmit}
                  />
                </div>
              </div>
            </div>
          );
        }}
      </Formik>
    );
  } else if (stage === 2) {
    return (
      <Formik
        initialValues={{ code: '', password: '', confirm_password: '' }}
        onSubmit={(values) => resetPassword(values)}
        validationSchema={resetPasswordSchema}
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
                <h1>Reset Password</h1>
                <div className="w_100">
                  <label>Verfication Code</label>
                  <Field
                    type="text"
                    name="code"
                    className={`inp_box  ${
                      touched.code && errors.code ? 'alert_err is-invalid' : ''
                    }`}
                    autocomplete="off"
                    autoFocus
                  />
                  <ErrorMessage
                    name="code"
                    component="div"
                    style={{ color: 'red', fontSize: 12 }}
                  />
                </div>
                <div className="w_100">
                  <label>{t('signup.password')}*</label>
                  <Field
                    type="password"
                    name="password"
                    className={`inp_box  ${
                      touched.password && errors.password
                        ? 'alert_err is-invalid'
                        : ''
                    }`}
                    autoComplete="off"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    style={{ color: 'red', fontSize: 12 }}
                  />
                </div>
                <div className="w_100">
                  <label>{t('signup.confirm_password')}*</label>
                  <Field
                    type="password"
                    name="confirm_password"
                    className={`inp_box  ${
                      touched.confirm_password && errors.confirm_password
                        ? 'alert_err is-invalid'
                        : ''
                    }`}
                    autoComplete="off"
                  />
                  <ErrorMessage
                    name="confirm_password"
                    component="div"
                    style={{ color: 'red', fontSize: 12 }}
                  />
                </div>

                <div className="w_100 center">
                  <input
                    type="submit"
                    value="Submit"
                    className="btn_log"
                    disabled={!isValid || !dirty}
                    onClick={formikBag.handleSubmit}
                  />
                </div>
              </div>
            </div>
          );
        }}
      </Formik>
    );
  } else {
    return null;
  }
};

export default ForgotPassword;
