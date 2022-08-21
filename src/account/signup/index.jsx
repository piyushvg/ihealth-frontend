import React, { useState } from "react";
import "./style.css";
import iHealthLogo from "../../assets/img/iHealthOX-Logo.svg";
import Onboarding1 from "./onboarding1";
import OnBoarding2 from "./onboarding2";
import OnBoarding3 from "./onboarding3";
import OnBoarding4 from "./onboarding4";
import OnBoarding5 from "./onboarding5";
import { CognitoUserAttribute } from "amazon-cognito-identity-js";
import UserPool from "../../service/UserPool";
import { Field, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = () => {
  let params = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    phone_number: "",
    confirm_password: "",
  };
  return params;
};

const RegisterSchema = Yup.object().shape({
  first_name: Yup.string().required("First Name is Required"),
  last_name: Yup.string().required("Last Name is Required"),
  phone_number: Yup.string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .max(12, "A phone number must be 12 digits starting with country code")
    .min(12, "A phone number must be 12 digits starting with country code")
    .required("A phone number is required"),
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be 8 characters at minimum")
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  confirm_password: Yup.string().when("password", (password, field) =>
    password
      ? field
          .required()
          .oneOf(
            [Yup.ref("password"), null],
            "Your password does not match with confirm password!"
          )
      : field
  ),
});

const SignUp = () => {
  const [steps, setSteps] = useState(1);
  const [isShowMsg,setShowMsg] = useState(false);

  const handleSubmit = (values) => {
    try {
      const attributeName = new CognitoUserAttribute({
        Name: "name",
        Value: values.first_name,
      });
      const attributeFamily = new CognitoUserAttribute({
        Name: "family_name",
        Value: values.last_name,
      });
      const attributePhoneNumber = new CognitoUserAttribute({
        Name: "phone_number",
        Value: `+${values.phone_number}`,
      });
      const email = values.email;
      const password = values.password;
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
            setShowMsg(true);
          }
        }
      );
    } catch (err) {
      console.log("err", err);
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
          const { touched, errors, isSubmitting, values } = formikBag;
          console.log("values", errors, values);
          return (
            <div className="outer_box">
              <div className="logo_head">
                <div
                  className="logo_sec"
                  style={{ width: "25%", marginLeft: "15px" }}
                >
                  <img src={iHealthLogo} />
                </div>
              </div>

              <div className="main-login reg_sec">
                <div className="mflex step_6">
                  <div className="dot_step">
                    <a className=""></a>
                    <a className=""></a>
                    <a className=""></a>
                    <a className=""></a>
                    <a className=""></a>
                    <a className=""></a>
                    <a className="dot_fill"></a>
                  </div>
                  <h1>Create an account</h1>
                  <div className="w_100">
                    <div className="w_50lft">
                      <label>First name *</label>
                      <Field
                        type="text"
                        name="first_name"
                        className="inp_box"
                        placeholder="First name"
                        autoComplete="off"
                        // required
                      />
                      <ErrorMessage
                        name="first_name"
                        component="div"
                        style={{ color: "red", fontSize: 12 }}
                      />
                    </div>
                    <div className="w_50rgt">
                      <label>Last name *</label>
                      <Field
                        type="text"
                        name="last_name"
                        className="inp_box"
                        placeholder="Last name"
                        autoComplete="off"
                        // required
                      />
                      <ErrorMessage
                        name="last_name"
                        component="div"
                        style={{ color: "red", fontSize: 12 }}
                      />
                    </div>
                  </div>
                  <div className="w_100">
                    <div className="w_50lft">
                      <label>Email *</label>
                      <Field
                        type="text"
                        name="email"
                        className="inp_box"
                        placeholder="Email "
                        autoComplete="off"
                        // required
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        style={{ color: "red", fontSize: 12 }}
                      />
                    </div>
                    <div className="w_50rgt">
                      <label>Phone *</label>
                      <Field
                        type="text"
                        name="phone_number"
                        className="inp_box"
                        placeholder="Phone "
                        autoComplete="off"
                        // required
                      />
                      <ErrorMessage
                        name="phone_number"
                        component="div"
                        style={{ color: "red", fontSize: 12 }}
                      />
                    </div>
                  </div>

                  <div className="w_100">
                    <div className="w_50lft">
                      <label>Password *</label>
                      <Field
                        type="Password"
                        name="password"
                        className="inp_box "
                        placeholder="••••••••"
                        autoComplete="off"
                        // required
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        style={{ color: "red", fontSize: 12 }}
                      />
                    </div>
                    <div className="w_50rgt">
                      <label>Confirm password *</label>
                      <Field
                        name="confirm_password"
                        className="inp_box "
                        placeholder="••••••••"
                        autoComplete="off"
                        // required
                      />
                      <ErrorMessage
                        name="confirm_password"
                        component="div"
                        style={{ color: "red", fontSize: 12 }}
                      />
                    </div>
                  </div>

                  <div className="w_100 center">
                    <input
                      type="submit"
                      value="Get started"
                      className="btn_log"
                      onClick={formikBag.handleSubmit}
                    />
                  </div>
                  <div>
                    {isShowMsg ? <p style={{fontSize:20,margin:12}}>Registration Succesful !</p> : null}
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
