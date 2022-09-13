import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import iHealthLogo from '../assets/img/iHealthOX-Logo.svg';
import bellIcon from '../assets/img/bell-icon.svg';
import chatIcon from '../assets/img/chat-icon.svg';

import { Grid, Drawer } from 'antd';
import LeftSidebar from './Leftsidebar';
import RightSidebar from './RightSidebar';

import { useTranslation } from 'react-i18next';
import { Select } from 'antd';

import './style.css';

const { Option } = Select;

const HomeLayout = () => {
  const [isShowLeftSidebar, setIsShowLeftSideBar] = useState(false);
  const [isShowNotification, setIsShowNotification] = useState(false);
  const { useBreakpoint } = Grid;
  const screen = useBreakpoint();
  const { user } = useSelector((state) => state.common);
  const { i18n } = useTranslation();

  const handleChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  const handleToggle = () => {
    if (screen.xs) {
      setIsShowLeftSideBar(!isShowLeftSidebar);
    }
  };

  const handleClickNotification = () => {
    if (screen.xs) {
      setIsShowNotification(!isShowNotification);
    }
  };
  return (
    <div>
      <div className="outer_box">
        <div className="top_header" style={{ zIndex: 1001 }}>
          <div
            className={isShowLeftSidebar ? 'change' : 'menu_icon'}
            onClick={() => {
              handleToggle();
            }}
          >
            <div className="menu_bar1"></div>
            <div className="menu_bar2"></div>
            <div className="menu_bar3"></div>
          </div>
          <div className="logo_head">
            <img
              src={iHealthLogo}
              className={screen.xs ? 'logo_sec_custom' : 'logo_sec'}
            />
          </div>

          <div className="info_sec">
            <div className={screen.xs ? 'custom-ic' : 'sec_15'}>
              <img
                src={bellIcon}
                onClick={() => handleClickNotification()}
                className={screen.xs ? 'custom-ic-img' : ''}
              />
            </div>
            <div className={screen.xs ? 'custom-ic' : 'sec_15'}>
              <img
                src={chatIcon}
                className={screen.xs ? 'custom-ic-img' : ''}
              />
            </div>
            <div className="dropdown sec_15">
              <button className="dropbtn down-arrow">
                {user && user.name ? user.name.charAt(0).toUpperCase() : ''}
                {user && user.family_name
                  ? user.family_name.charAt(0).toUpperCase()
                  : ''}
              </button>
            </div>
            {!screen.xs ? (
              <Select
                defaultValue={i18n.language}
                style={{ width: 120 }}
                onChange={handleChange}
              >
                <Option value="en">English</Option>
                <Option value="fr">French</Option>={' '}
              </Select>
            ) : null}
          </div>
        </div>
        <div className="inner_sec">
          <div
            className="mob_opcity"
            style={
              isShowLeftSidebar || isShowNotification
                ? { display: 'block' }
                : { display: 'none' }
            }
          ></div>
          {isShowLeftSidebar ? (
            <Drawer
              placement="left"
              visible={isShowLeftSidebar}
              onClose={handleToggle}
              width={280}
              // closable={false}
              // height={600}
              headerStyle={{ display: 'none !important' }}
            >
              <LeftSidebar display={isShowLeftSidebar} />
            </Drawer>
          ) : (
            <LeftSidebar />
          )}
          <div className="middel_sec">
            <Outlet />
          </div>
          {isShowNotification ? (
            <Drawer
              placement="right"
              visible={isShowNotification}
              onClose={handleToggle}
              width={330}
              headerStyle={{ display: 'none !important' }}
            >
              <RightSidebar display={isShowNotification} />
            </Drawer>
          ) : (
            <RightSidebar />
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
