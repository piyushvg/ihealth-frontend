import React from 'react';

import { useTranslation } from 'react-i18next';

import { Select, Dropdown, Menu, Space, Avatar, Typography } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import bellIcon from '../assets/img/bell-icon.svg';
import chatIcon from '../assets/img/chat-icon.svg';

const { Option } = Select;
const { Text } = Typography;

const InfoSec = ({ user, screen, handleClickNotification }) => {
  const { i18n } = useTranslation();

  const handleChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <Space>
              <Text strong>
                {user && user.name
                  ? user.name.charAt(0).toUpperCase() + user.name.slice(1)
                  : ''}
              </Text>
              <Text strong>
                {user && user.family_name
                  ? user.family_name.charAt(0).toUpperCase() +
                    user.name.slice(1)
                  : ''}
              </Text>
            </Space>
          ),
        },
      ]}
    />
  );
  return (
    <div className="info_sec">
      <div className={screen.xs ? 'custom-ic' : 'sec_15'}>
        <img
          src={bellIcon}
          onClick={() => handleClickNotification()}
          className={screen.xs ? 'custom-ic-img' : ''}
        />
      </div>
      <div className={screen.xs ? 'custom-ic' : 'sec_15'}>
        <img src={chatIcon} className={screen.xs ? 'custom-ic-img' : ''} />
      </div>
      <Dropdown className="sec_15" overlay={menu}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            <Avatar
              style={{
                color: '#fff',
                backgroundColor: '#645CFA',
              }}
            >
              {user && user.name ? user.name.charAt(0).toUpperCase() : ''}
              {user && user.family_name
                ? user.family_name.charAt(0).toUpperCase()
                : ''}
            </Avatar>
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
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
  );
};

export default InfoSec;
