import React from "react";
import style from './style.css'
import iHealthLogo from '../../assets/img/iHealthOX-Logo.svg';
import { NavLink } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <div className="outer_box">
        <div className="logo_head">
          <div className="logo_sec" style={{width:'25%',marginLeft:'15px'}}>
            <img src={iHealthLogo} />
          </div>
        </div>

        <div className="main-login reg_sec">
          <div className="mflex step_6">
            <div className="dot_step">
              <NavLink className="" to={"/onboarding1"}></NavLink>
              <NavLink className="" to={"/onboarding2"}></NavLink>
              <NavLink className="" to={"/onboarding3"}></NavLink>
              <NavLink className="" to={"/onboarding4"}></NavLink>
              <a className="dot_fill"></a>
            </div>
            <h1>Create an account</h1>
            <form action="">
              <div className="w_100">
                <div className="w_50lft">
                  <label>First name *</label>
                  <input
                    type="text"
                    name="comp-name"
                    value=""
                    className="inp_box"
                    placeholder="First name"
                    autocomplete="off"
                    required=""
                  />
                </div>
                <div className="w_50rgt">
                  <label>Last name *</label>
                  <input
                    type="text"
                    name="comp-name"
                    value=""
                    className="inp_box"
                    placeholder="Last name"
                    autocomplete="off"
                    required=""
                  />
                </div>
              </div>
              <div className="w_100">
                <div className="w_50lft">
                  <label>Email *</label>
                  <input
                    type="text"
                    name="comp-name"
                    value=""
                    className="inp_box"
                    placeholder="Email "
                    autocomplete="off"
                    required=""
                  />
                </div>
                <div className="w_50rgt">
                  <label>Phone *</label>
                  <input
                    type="text"
                    name="comp-name"
                    value=""
                    className="inp_box"
                    placeholder="Phone "
                    autocomplete="off"
                    required=""
                  />
                </div>
              </div>

              <div className="w_100">
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
              </div>

              <div className="w_100">
                <div className="w_50lft">
                  <label>Password *</label>
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
                <div className="w_50rgt">
                  <label>Confirm password *</label>
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
              </div>

              <div className="w_100 center">
                <input type="submit" value="Get started" className="btn_log" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
