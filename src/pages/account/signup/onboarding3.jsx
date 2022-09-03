import React from 'react';
import iHealthLogo from '../../../assets/img/iHealthOX-Logo.svg';
import HomeSecoredLogo from '../../../assets/img/HomeSecured.svg';
import { useTranslation } from 'react-i18next';

const OnBoarding3 = (props) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="outer_box">
        <div className="logo_head">
          <div className="logo_sec">
            <img
              src={iHealthLogo}
              style={{ width: '25%', marginLeft: '15px' }}
            />
          </div>
        </div>

        <div className="main-login step_cont">
          <div className="logo_sec txtcenetr">
            <img
              src={iHealthLogo}
              style={{ width: '25%', marginLeft: '15px' }}
            />
          </div>

          <div className="mflex step_3">
            <div className="ico_pink">
              <img src={HomeSecoredLogo} />
            </div>
            <div className="dot_step">
              <a className=""></a>
              <a className=""></a>
              <a className="dot_fill"></a>
              <a className=""></a>
              <a className=""></a>
              <a className=""></a>
            </div>
            <div className="ttltxt">{t('onboarding.step_3.title')}</div>
            <div className="paratxt">{t('onboarding.step_3.des')}</div>
            <a className="btn_log" onClick={() => props.setSteps(4)}>
              {t('onboarding.continue')}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnBoarding3;
