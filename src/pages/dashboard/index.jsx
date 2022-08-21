import React, { useContext } from 'react';
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
import bellGreyIcon from '../../assets/img/bell_grey.svg';

import { AccountContext } from '../../service/Account';

const Dashboard = () => {
  const { signOut } = useContext(AccountContext);

  return (
    <>
      <div className="outer_box">
        <div className="top_header">
          <div className="menu_icon">
            <div className="menu_bar1"></div>
            <div className="menu_bar2"></div>
            <div className="menu_bar3"></div>
          </div>
          <div className="logo_head">
            <div
              className="logo_sec"
              style={{ width: '25%', marginLeft: '15px' }}
            >
              <img src={iHealthLogo} />
            </div>
          </div>

          <div className="info_sec">
            <div className="sec_15">
              <img src={bellIcon} />
            </div>
            <div className="sec_15">
              <img src={chatIcon} />
            </div>
            <div className="dropdown sec_15">
              <button className="dropbtn down-arrow">RO</button>
            </div>
          </div>
        </div>
        <div className="inner_sec">
          <div className="mob_opcity"></div>
          <div className="left_sec">
            <div className="tp60 w_box">
              <input type="text" className="search-box" placeholder="Search" />
              <span className="search-icon" />
            </div>
            <div className="left_menu">
              <ul id="side-menu">
                <li className="menu_tap menu_tap_act">
                  {' '}
                  <i className="home home_blu"></i>
                  <span className="menu_txt">Home</span>
                </li>
                <li className="menu_tap">
                  {' '}
                  <i className="myhealth"></i>
                  <span className="menu_txt">Myhealth</span>
                </li>
                <li className="menu_tap">
                  {' '}
                  <i className="resources"></i>
                  <span className="menu_txt">IHealthOX Resources </span>
                </li>
                <li className="menu_tap">
                  {' '}
                  <i className="account"></i>
                  <span className="menu_txt">Profile </span>
                </li>
                <li className="menu_tap">
                  {' '}
                  <i className="contact"></i>
                  <span className="menu_txt">Community </span>
                </li>
                <li className="menu_tap absbtm" onClick={signOut}>
                  {' '}
                  <i className="logout"></i>
                  <span className="menu_txt">Logout </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="middel_sec">
            <div className="noti_box">
              <h4>Care plan name </h4>
              <p>
                This text informs user of an upcoming session or assessment.
              </p>
              <button>Go to assessment</button>
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
                <h4>Mood score</h4>
                <p>Your latest mood score </p>
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
                <h4>Sleep score</h4>
                <p>Your latest sleep score </p>
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
                <h4>Anxiety score</h4>
                <p>Your latest anxiety score</p>
              </div>
            </div>

            <div className="care_box">
              <div className="tittle">
                <h4>My care plans</h4>
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
                  <strong>Last therapy session: </strong> 02/03/22
                </span>
                <span>
                  <strong>Next therapy session: </strong> 04/04/22
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
                <h4>My care team</h4>
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
          <div className="right_sec">
            <div className="wnotibell">
              <div className="tab actvtab">
                {' '}
                <img src={bellGreyIcon} /> <span>Notifications</span>
              </div>
              <div className="tab">
                {' '}
                <img src={chatIcon} /> <span>Inbox</span>
              </div>
            </div>
            <div className="notification">
              <div className="inner_box">
                <h4>Today</h4>
                <div className="noti_card">
                  <div className="utyp">AP</div>
                  <div className="smsdtl">
                    <div className="noti_text">
                      Lorem Ipsum notification version one:{' '}
                    </div>
                    <div className="time">23m ago</div>
                  </div>
                  <div className="status"></div>
                </div>
                <div className="noti_card">
                  <div className="utyp">AP</div>
                  <div className="smsdtl">
                    <div className="noti_text">
                      Lorem Ipsum notification version one:{' '}
                    </div>
                    <div className="time">23m ago</div>
                  </div>
                  <div className="status"></div>
                </div>
                <div className="noti_card">
                  <div className="utyp">AP</div>
                  <div className="smsdtl">
                    <div className="noti_text">
                      Lorem Ipsum notification version one:{' '}
                    </div>
                    <div className="time">23m ago</div>
                  </div>
                  <div className="status"></div>
                </div>
                <div className="noti_card">
                  <div className="utyp">AP</div>
                  <div className="smsdtl">
                    <div className="noti_text">
                      Lorem Ipsum notification version one:{' '}
                    </div>
                    <div className="time">23m ago</div>
                  </div>
                  <div className="status"></div>
                </div>
              </div>
              <div className="inner_box">
                <h4>Yesterday</h4>
                <div className="noti_card">
                  <div className="utyp">AP</div>
                  <div className="smsdtl">
                    <div className="noti_text">
                      Lorem Ipsum notification version one:{' '}
                    </div>
                    <div className="time">23m ago</div>
                  </div>
                  <div className="status"></div>
                </div>
                <div className="noti_card">
                  <div className="utyp">AP</div>
                  <div className="smsdtl">
                    <div className="noti_text">
                      Lorem Ipsum notification version one:{' '}
                    </div>
                    <div className="time">23m ago</div>
                  </div>
                  <div className="status"></div>
                </div>
                <div className="noti_card">
                  <div className="utyp">AP</div>
                  <div className="smsdtl">
                    <div className="noti_text">
                      Lorem Ipsum notification version one:{' '}
                    </div>
                    <div className="time">23m ago</div>
                  </div>
                  <div className="status"></div>
                </div>
                <div className="noti_card">
                  <div className="utyp">AP</div>
                  <div className="smsdtl">
                    <div className="noti_text">
                      Lorem Ipsum notification version one:{' '}
                    </div>
                    <div className="time">23m ago</div>
                  </div>
                  <div className="status"></div>
                </div>
              </div>
              <div className="inner_box">
                <h4>This week</h4>
                <div className="noti_card">
                  <div className="utyp">AP</div>
                  <div className="smsdtl">
                    <div className="noti_text">
                      Lorem Ipsum notification version one:{' '}
                    </div>
                    <div className="time">23m ago</div>
                  </div>
                  <div className="status"></div>
                </div>
                <div className="noti_card">
                  <div className="utyp">AP</div>
                  <div className="smsdtl">
                    <div className="noti_text">
                      Lorem Ipsum notification version one:{' '}
                    </div>
                    <div className="time">23m ago</div>
                  </div>
                  <div className="status"></div>
                </div>
                <div className="noti_card">
                  <div className="utyp">AP</div>
                  <div className="smsdtl">
                    <div className="noti_text">
                      Lorem Ipsum notification version one:{' '}
                    </div>
                    <div className="time">23m ago</div>
                  </div>
                  <div className="status"></div>
                </div>
                <div className="noti_card">
                  <div className="utyp">AP</div>
                  <div className="smsdtl">
                    <div className="noti_text">
                      Lorem Ipsum notification version one:{' '}
                    </div>
                    <div className="time">23m ago</div>
                  </div>
                  <div className="status"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
