import React from 'react';
import bellGreyIcon from '../../../assets/img/bell_grey.svg';
import chatIcon from '../../../assets/img/chat-icon.svg';

const RightSidebar = ({display}) => {
  return (
    <div className="right_sec" style={display && {display:'block'}} >
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
  );
};

export default RightSidebar;
