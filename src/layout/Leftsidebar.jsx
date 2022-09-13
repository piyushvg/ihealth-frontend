import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AccountContext } from '../service/Account';
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
          <NavLink to="/dashboard">
            {({ isActive }) => (
              <li className={isActive ? 'menu_tap menu_tap_act' : 'menu_tap'}>
                {' '}
                <i className={isActive ? 'home home_blu' : 'home'}></i>
                <span className="menu_txt">
                  {t('dashboard.left_sidebar.home')}
                </span>
              </li>
            )}
          </NavLink>
          <NavLink to="/my-health">
            {({ isActive }) => (
              <li className={isActive ? 'menu_tap menu_tap_act' : 'menu_tap'}>
                {' '}
                <i className={isActive ? 'myhealth myhealth_blu' : 'myhealth'}></i>
                <span className="menu_txt">
                  {t('dashboard.left_sidebar.myhealth')}
                </span>
              </li>
            )}
          </NavLink>
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
