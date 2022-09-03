import React from 'react';
import iHealthLogo from '../../../assets/img/iHealthOX-Logo.svg';
import LifeSaverSmartPhoneLogo from '../../../assets/img/LifesaversSmartphone.svg';
import { useTranslation } from 'react-i18next';

const OnBoarding5 = (props) => {
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

          <div className="mflex step_5">
            <div className="ico_blue">
              <img src={LifeSaverSmartPhoneLogo} />
            </div>
            <div className="dot_step">
              <a className=""></a>
              <a className=""></a>
              <a className=""></a>
              <a className=""></a>
              <a className="dot_fill"></a>
              <a className=""></a>
            </div>
            <div className="ttltxt">{t('onboarding.step_5.title')}</div>
            <div className="paratxt">{t('onboarding.step_5.des')}</div>
            <a className="btn_log" onClick={() => props.setSteps(0)}>
              {t('onboarding.continue')}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnBoarding5;
