import React from "react";
import style from "./style.css";
import iHealthLogo from "../../assets/img/iHealthOX-Logo.svg";
import LifeSaverBrainLogo from "../../assets/img/LifesaversBrain.svg";
import { NavLink } from "react-router-dom";
const Onboarding = () => {
  return (
    <>
      <div className="outer_box">
        <div className="logo_head">
          <div className="logo_sec">
            <img src={iHealthLogo} />
          </div>
        </div>

        <div className="main-login step_cont">
          <div className="logo_sec txtcenetr">
            <img src={iHealthLogo} />
          </div>

          <div className="mflex step_1">
            <div className="ico_pink">
              <img src={LifeSaverBrainLogo} />
            </div>
            <div className="dot_step">
              <a className="dot_fill"></a>
              <NavLink className="" to={"/onboarding2"}></NavLink>
              <NavLink className="" to={"/onboarding3"}></NavLink>
              <NavLink className="" to={"/onboarding4"}></NavLink>
              <NavLink className="" to={"/onboarding5"}></NavLink>
              <NavLink className="" to={"/register"}></NavLink>
            </div>
            <div className="ttltxt">Enroll in iHealthOx programs </div>
            <div className="paratxt">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna id
              ut aliquet eu sed neque, posuere nisi. Sed consequat placerat vel
              et etiam.
            </div>
            <NavLink className="btn_log" to={"/onboarding2"}>
              Continue
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Onboarding;
