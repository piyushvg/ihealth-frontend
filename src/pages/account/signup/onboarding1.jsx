import React from 'react';
import iHealthLogo from '../../../assets/img/iHealthOX-Logo.svg';
import LifeSaverBrainLogo from '../../../assets/img/LifesaversBrain.svg';
import { useTranslation } from 'react-i18next';

const Onboarding = (props) => {
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

          <div className="mflex step_1">
            <div className="ico_pink">
              <img src={LifeSaverBrainLogo} />
            </div>
            <div className="dot_step">
              <a className="dot_fill"></a>
              <a className=""></a>
              <a className=""></a>
              <a className=""></a>
              <a className=""></a>
              <a className=""></a>
            </div>
            <div className="ttltxt">{t('onboarding.step_1.title')}</div>
            <div className="paratxt">{t('onboarding.step_1.des')}</div>
            <a className="btn_log" onClick={() => props.setSteps(2)}>
              {t('onboarding.continue')}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Onboarding;
