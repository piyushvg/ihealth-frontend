import React from "react";
import style from "./style.css"
import iHealthLogo from '../../assets/img/iHealthOX-Logo.svg';

const SignIn = () => {
  return (
    <>
      <div className="outer_box">
        <div className="logo_head">
          <div className="logo_sec">
            <img src={iHealthLogo}></img>
          </div>
        </div>
        <div className="main-login">
          <h1>Sign in</h1>
          <form action="">
            <div className="w_100">
              <label>Email</label>
              <input
                type="text"
                name="comp-name"
                value=""
                className="inp_box alert_err"
                placeholder="email address "
                autocomplete="off"
                required=""
              />
            </div>

            <div className="w_100">
              <label>Password</label>
              <input
                type="checkbox"
                id="show-password"
                className="show-password"
                checked
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
              <input
                type="Password"
                name="comp-name"
                value=""
                className="inp_box "
                placeholder="••••••••"
                autocomplete="off"
                required=""
              />
            </div>

            <div className="w_100 flex">
              <a href="#">Forgot password? Reset</a>
              <a href="onboarding1">Not a member?</a>
            </div>
            <div className="w_100 center">
              <input type="submit" value=" Sign in" className="btn_log" />
            </div>
            <div className="border">
              <span>or</span>
            </div>
            <div className="w_100 center">
              <input type="submit" value="Get started" className="btn_reg" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
