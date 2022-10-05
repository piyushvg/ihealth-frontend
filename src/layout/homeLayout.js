import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import iHealthLogo from '../assets/img/iHealthOX-Logo.svg';

import { Grid, Drawer } from 'antd';
import LeftSidebar from './Leftsidebar';
import RightSidebar from './RightSidebar';

import { useDispatch } from 'react-redux';
import { notificationPanelHandler } from '../redux/reducer/commonSlice';

import './style.css';
import InfoSec from './info_sec';

const HomeLayout = () => {
  const { useBreakpoint } = Grid;
  const screen = useBreakpoint();
  const dispatch = useDispatch();
  const { user, notificationPanel } = useSelector((state) => state.common);
  const [isShowLeftSidebar, setIsShowLeftSideBar] = useState(false);
  const [isShowNotification, setIsShowNotification] = useState(false);

  const handleToggle = () => {
    if (screen.xs) {
      setIsShowLeftSideBar(!isShowLeftSidebar);
    }
  };

  const handleClickNotification = () => {
    if (screen.xs) {
      setIsShowNotification(!isShowNotification);
      dispatch(notificationPanelHandler(!isShowNotification));
    }
  };
  return (
    <div>
      <div className="outer_box">
        <div className="top_header">
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

          <InfoSec
            user={user}
            screen={screen}
            handleClickNotification={handleClickNotification}
          />
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
              title={
                <div>
                  <img
                    src={iHealthLogo}
                    className={screen.xs ? 'logo_sec_custom' : 'logo_sec'}
                  />
                </div>
              }
            >
              <LeftSidebar display={isShowLeftSidebar} />
            </Drawer>
          ) : (
            <LeftSidebar />
          )}
          <div className="middel_sec">
            <Outlet />
          </div>
          {notificationPanel && isShowNotification ? (
            <Drawer
              placement="right"
              visible={isShowNotification}
              onClose={handleClickNotification}
              width={330}
              title={
                <InfoSec
                  user={user}
                  screen={screen}
                  handleClickNotification={handleClickNotification}
                />
              }
            >
              <RightSidebar display={isShowNotification} />
            </Drawer>
          ) : notificationPanel ? (
            <RightSidebar />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
