import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import './style.css';
import iHealthLogo from '../../assets/img/iHealthOX-Logo.svg';
import bellIcon from '../../assets/img/bell-icon.svg';
import chatIcon from '../../assets/img/chat-icon.svg';
import img1Icon from '../../assets/img/img1.png';
import img2Icon from '../../assets/img/img2.png';
import img3Icon from '../../assets/img/img3.png';
import userIcon from '../../assets/img/user1.png';
import msgIcon from '../../assets/img/msg-blk.svg';
import user2Icon from '../../assets/img/user2.png';
import user3Icon from '../../assets/img/user3.png';

import { Grid, Tag } from 'antd';
import LeftSidebar from './components/Leftsidebar';
import RightSidebar from './components/RightSidebar';

import { useTranslation } from 'react-i18next';
import { Select } from 'antd';
const { Option } = Select;

const Dashboard = () => {
  const [isShowLeftSidebar, setIsShowLeftSideBar] = useState(false);
  const [isShowNotification, setIsShowNotification] = useState(false);
  const { useBreakpoint } = Grid;
  const screen = useBreakpoint();
  const { user } = useSelector((state) => state.common);
  const { t, i18n } = useTranslation();

  const handleChange = (lang) => {
    console.log(`selected ${lang}`);
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
  console.log('screen', screen);

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
            <div className="logo_sec">
              <img src={iHealthLogo} />
            </div>
          </div>

          <div className="info_sec">
            {screen.xs ? (
              <>
                <div className="sec_15_mob">
                  <img
                    src={bellIcon}
                    onClick={() => handleClickNotification()}
                    style={{ width: 24, height: 24 }}
                  />
                </div>
                <div className="sec_15_mob">
                  <img src={chatIcon} style={{ width: 24, height: 24 }} />
                </div>
              </>
            ) : (
              <>
                <div className="sec_15">
                  <img
                    src={bellIcon}
                    onClick={() => handleClickNotification()}
                  />
                </div>
                <div className="sec_15">
                  <img src={chatIcon} />
                </div>
              </>
            )}
            <Select
              defaultValue={i18n.language}
              style={{ width: 120 }}
              onChange={handleChange}
            >
              <Option value="en">English</Option>
              <Option value="fr">French</Option>={' '}
            </Select>
            <div className="dropdown sec_15">
              <button className="dropbtn down-arrow">
                {user && user.name ? user.name.charAt(0).toUpperCase() : ''}
                {user && user.family_name
                  ? user.family_name.charAt(0).toUpperCase()
                  : ''}
              </button>
            </div>
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
          <LeftSidebar display={isShowLeftSidebar} />
          <div className="middel_sec">
            <div className="noti_box">
              <h4>{t('dashboard.main_section.care_plan_name')}</h4>
              <p>{t('dashboard.main_section.care_plan_des')}</p>
              <button>{t('dashboard.main_section.go_to_assessment')}</button>
              <a href="#" className="close"></a>
            </div>
            <div className="score_box">
              <div className="box">
                <div className="score">
                  <div
                    role="progressbar"
                    aria-valuenow="65"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    // style="--value:65"
                  ></div>
                </div>
                <h4>{t('dashboard.main_section.mood_score_1')}</h4>
                <p>{t('dashboard.main_section.mood_score_2')}</p>
              </div>
              <div className="box">
                <div className="score">
                  <div
                    role="progressbar"
                    aria-valuenow="55"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    // style="--value:55"
                  ></div>
                </div>
                <h4>{t('dashboard.main_section.sleep_score_1')}</h4>
                <p>{t('dashboard.main_section.sleep_score_2')}</p>
              </div>
              <div className="box">
                <div className="score">
                  <div
                    role="progressbar"
                    aria-valuenow="35"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    // style="--value:35"
                  ></div>
                </div>
                <h4>{t('dashboard.main_section.anxiety_score_1')}</h4>
                <p>{t('dashboard.main_section.anxiety_score_2')}</p>
              </div>
            </div>

            <div className="care_box">
              <div className="tittle">
                <h4>{t('dashboard.main_section.my_care_plan')}</h4>
                <span className="">
                  <svg viewBox="0 0 24 24" width="24" height="24" className="">
                    <path
                      fill="currentColor"
                      d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"
                      //   style="fill: #9D9D9D;"
                    ></path>
                  </svg>
                </span>
              </div>
              <p>
                <span>
                  <strong>
                    {t('dashboard.main_section.last_therapy_session')}:{' '}
                  </strong>{' '}
                  02/03/22
                </span>
                <span>
                  <strong>
                    {t('dashboard.main_section.next_therapy_session')}:{' '}
                  </strong>{' '}
                  04/04/22
                </span>
              </p>
              <div className="scroll_box">
                <div className="plan_box">
                  <div className="box">
                    <div>
                      <img src={img1Icon} />
                    </div>
                    <div className="pd15">
                      <h4>Plan name</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pharetra.
                      </p>
                      <div className="algrt">
                        <span className="arrow-right">View plan</span>
                      </div>
                    </div>
                  </div>
                  <div className="box">
                    <div>
                      <img src={img2Icon} />
                    </div>
                    <div className="pd15">
                      <h4>Plan name</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pharetra.
                      </p>
                      <div className="algrt">
                        <span className="arrow-right">View plan</span>
                      </div>
                    </div>
                  </div>
                  <div className="box">
                    <div>
                      <img src={img3Icon} />
                    </div>
                    <div className="pd15">
                      <h4>Plan name</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pharetra.
                      </p>
                      <div className="algrt">
                        <span className="arrow-right">View plan</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="myteam_box">
              <div className="tittle">
                <h4>{t('dashboard.main_section.my_care_team')}</h4>
                <span className="">
                  <svg viewBox="0 0 24 24" width="24" height="24" className="">
                    <path
                      fill="currentColor"
                      d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"
                      //   style="fill: #9D9D9D;"
                    ></path>
                  </svg>
                </span>
              </div>
              <div className="scroll_box">
                <div className="plan_box">
                  <div className="box">
                    <div>
                      <img src={userIcon} />
                    </div>
                    <div className="pdtp25">
                      <span className="jobttl">Job title</span>
                      <h4>Aaron Paul</h4>
                      <p>Understanding Depression Program</p>
                    </div>
                    <div className="connect">
                      <span className="lftsd">
                        <img src={chatIcon} />
                      </span>
                      <span className="rgtsd">
                        <img src={msgIcon} />
                      </span>
                    </div>
                  </div>
                  <div className="box">
                    <div>
                      <img src={user2Icon} />
                    </div>
                    <div className="pdtp25">
                      <span className="jobttl">Job title</span>
                      <h4>Dr. Sanjay Gupta</h4>
                      <p>Understanding Depression Program</p>
                    </div>
                    <div className="connect">
                      <span className="lftsd">
                        <img src={chatIcon} />
                      </span>
                      <span className="rgtsd">
                        <img src={msgIcon} />
                      </span>
                    </div>
                  </div>
                  <div className="box">
                    <div>
                      <img src={user3Icon} />
                    </div>
                    <div className="pdtp25">
                      <span className="jobttl">Job title</span>
                      <h4>Paul Simon</h4>
                      <p>Understanding Depression Program</p>
                    </div>
                    <div className="connect">
                      <span className="lftsd">
                        <img src={chatIcon} />
                      </span>
                      <span className="rgtsd">
                        <img src={msgIcon} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {isShowNotification ? (
            <RightSidebar display={isShowNotification} />
          ) : (
            <RightSidebar />
          )}
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
