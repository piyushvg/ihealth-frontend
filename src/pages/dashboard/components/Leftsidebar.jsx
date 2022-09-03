import { t } from 'i18next';
import React, { useContext } from 'react';
import { AccountContext } from '../../../service/Account';
import { useTranslation } from 'react-i18next';

const LeftSidebar = ({ display }) => {
  const { signOut } = useContext(AccountContext);
  const { t } = useTranslation();
  return (
    <div className="left_sec" style={display ? { display: 'block' } : {}}>
      <div className="tp60 w_box">
        <input
          type="text"
          className="search-box"
          placeholder={t('dashboard.left_sidebar.search')}
        />
        <span className="search-icon" />
      </div>
      <div className="left_menu">
        <ul id="side-menu">
          <li className="menu_tap menu_tap_act">
            {' '}
            <i className="home home_blu"></i>
            <span className="menu_txt">{t('dashboard.left_sidebar.home')}</span>
          </li>
          <li className="menu_tap">
            {' '}
            <i className="myhealth"></i>
            <span className="menu_txt">
              {t('dashboard.left_sidebar.myhealth')}
            </span>
          </li>
          <li className="menu_tap">
            {' '}
            <i className="resources"></i>
            <span className="menu_txt">
              {t('dashboard.left_sidebar.resources')}
            </span>
          </li>
          <li className="menu_tap">
            {' '}
            <i className="account"></i>
            <span className="menu_txt">
              {t('dashboard.left_sidebar.profile')}
            </span>
          </li>
          <li className="menu_tap">
            {' '}
            <i className="contact"></i>
            <span className="menu_txt">
              {t('dashboard.left_sidebar.community')}
            </span>
          </li>
          <li className="menu_tap absbtm" onClick={signOut}>
            {' '}
            <i className="logout"></i>
            <span className="menu_txt">
              {t('dashboard.left_sidebar.logout')}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftSidebar;
