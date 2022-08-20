import React from 'react';
import iHealthLogo from '../../assets/img/iHealthOX-Logo.svg';
import LifeSaverSmartPhoneLogo from '../../assets/img/LifesaversSmartphone.svg';
const OnBoarding5 = (props) => {
  return (
    <>
      <div className='outer_box'>
        <div className='logo_head'>
          <div className='logo_sec'>
            <img
              src={iHealthLogo}
              style={{ width: '25%', marginLeft: '15px' }}
            />
          </div>
        </div>

        <div className='main-login step_cont'>
          <div className='logo_sec txtcenetr'>
            <img
              src={iHealthLogo}
              style={{ width: '25%', marginLeft: '15px' }}
            />
          </div>

          <div className='mflex step_5'>
            <div className='ico_blue'>
              <img src={LifeSaverSmartPhoneLogo} />
            </div>
            <div className='dot_step'>
              <a className=''></a>
              <a className=''></a>
              <a className=''></a>
              <a className=''></a>
              <a className='dot_fill'></a>
              <a className=''></a>
            </div>
            <div className='ttltxt'>Privacy is important to us</div>
            <div className='paratxt'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna id
              ut aliquet eu sed neque, posuere nisi. Sed consequat placerat vel
              et etiam.
            </div>
            <a className='btn_log' onClick={() => props.setSteps(0)}>
              Continue
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnBoarding5;
