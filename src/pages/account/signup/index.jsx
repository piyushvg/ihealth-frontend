import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './style.css';
import iHealthLogo from '../../../assets/img/iHealthOX-Logo.svg';
import Onboarding1 from './onboarding1';
import OnBoarding2 from './onboarding2';
import OnBoarding3 from './onboarding3';
import OnBoarding4 from './onboarding4';
import OnBoarding5 from './onboarding5';
import { CognitoUserAttribute } from 'amazon-cognito-identity-js';
import Pool from '../../../service/Pool';
import { Field, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { isLoadingHandler } from '../../../redux/reducer/commonSlice';
import { message } from 'antd';

const initialValues = () => {
  let params = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    phone_number: '',
    confirm_password: '',
  };
  return params;
};

const RegisterSchema = Yup.object().shape({
  first_name: Yup.string().required('First Name is Required'),
  last_name: Yup.string().required('Last Name is Required'),
  phone_number: Yup.string()
    .matches(/^[0-9]+$/, 'Must be only digits')
    .max(12, 'Phone number must be 12 digits starting with country code')
    .min(12, 'Phone number must be 12 digits starting with country code')
    .required('Phone number is required'),
  email: Yup.string()
    .email('Invalid email address format')
    .required('Email is required'),
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

const SignUp = (props) => {
  const navigate = useNavigate();
  let location = useLocation();
  const dispatch = useDispatch();
  const [steps, setSteps] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (location.state && typeof location.state.steps === 'number') {
      setSteps(location.state.steps);
    }
  }, []);

  const handleSubmit = (values) => {
    try {
      if (isLoading) return;

      const attributeName = new CognitoUserAttribute({
        Name: 'name',
        Value: values.first_name,
      });
      const attributeFamily = new CognitoUserAttribute({
        Name: 'family_name',
        Value: values.last_name,
      });
      const attributePhoneNumber = new CognitoUserAttribute({
        Name: 'phone_number',
        Value: `+${values.phone_number}`,
      });
      const email = values.email;
      const password = values.password;
      if (!email || !password) return;
      setIsLoading(true);
      dispatch(isLoadingHandler(true));
      Pool.signUp(
        email,
        password,
        [attributeName, attributeFamily, attributePhoneNumber],
        [],
        (err, data) => {
          if (err) {
            console.error(err);
            message.error(err.message);
            setIsLoading(false);
            dispatch(isLoadingHandler(false));
          } else {
            message.success('Signup successful!');
            setIsLoading(false);
            dispatch(isLoadingHandler(false));
            navigate('/signin');
          }
        }
      );
    } catch (err) {
      console.log('err', err);
      message.error(err.message);
      setIsLoading(false);
      dispatch(isLoadingHandler(false));
    }
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
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => handleSubmit(values)}
        validationSchema={RegisterSchema}
      >
        {(formikBag) => {
          const { touched, errors, isValid, dirty } = formikBag;
          return (
            <div className="outer_box">
              <div className="logo_head">
                <div
                  className="logo_sec"
                  style={{ width: '25%', marginLeft: '15px' }}
                >
                  <img src={iHealthLogo} />
                </div>
              </div>

              <div className="main-login reg_sec">
                <div className="mflex step_6">
                  <h1>Create an account</h1>
                  <div className="w_100">
                    <div className="w_50lft">
                      <label>First name *</label>
                      <Field
                        type="text"
                        name="first_name"
                        className={`inp_box  ${
                          touched.first_name && errors.first_name
                            ? 'alert_err is-invalid'
                            : ''
                        }`}
                        placeholder="First name"
                        autoComplete="off"
                      />
                      <ErrorMessage
                        name="first_name"
                        component="div"
                        style={{ color: 'red', fontSize: 12 }}
                      />
                    </div>
                    <div className="w_50rgt">
                      <label>Last name *</label>
                      <Field
                        type="text"
                        name="last_name"
                        className={`inp_box  ${
                          touched.last_name && errors.last_name
                            ? 'alert_err is-invalid'
                            : ''
                        }`}
                        placeholder="Last name"
                        autoComplete="off"
                      />
                      <ErrorMessage
                        name="last_name"
                        component="div"
                        style={{ color: 'red', fontSize: 12 }}
                      />
                    </div>
                  </div>
                  <div className="w_100">
                    <div className="w_50lft">
                      <label>Email *</label>
                      <Field
                        type="text"
                        name="email"
                        className={`inp_box  ${
                          touched.email && errors.email
                            ? 'alert_err is-invalid'
                            : ''
                        }`}
                        placeholder="Email "
                        autoComplete="off"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        style={{ color: 'red', fontSize: 12 }}
                      />
                    </div>
                    <div className="w_50rgt">
                      <label>Phone *</label>
                      <Field
                        type="text"
                        name="phone_number"
                        className={`inp_box  ${
                          touched.phone_number && errors.phone_number
                            ? 'alert_err is-invalid'
                            : ''
                        }`}
                        placeholder="Phone "
                        autoComplete="off"
                      />
                      <ErrorMessage
                        name="phone_number"
                        component="div"
                        style={{ color: 'red', fontSize: 12 }}
                      />
                    </div>
                  </div>

                  <div className="w_100">
                    <div className="w_50lft">
                      <label>Password *</label>
                      <Field
                        type="password"
                        name="password"
                        placeholder="Password"
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
                    <div className="w_50rgt">
                      <label>Confirm password *</label>
                      <Field
                        type="password"
                        name="confirm_password"
                        placeholder="Confirm Password"
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
                  </div>

                  <div className="w_100 center">
                    <input
                      type="submit"
                      value="Get started"
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
                      value="Sign In"
                      className="btn_reg"
                      onClick={() => navigate('/signin')}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </Formik>
    );
  }
};

export default SignUp;
