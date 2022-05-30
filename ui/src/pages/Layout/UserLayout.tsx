import { Layout, Menu } from 'antd';
import React, { Children } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import {
  HomeOutlined,
  AppstoreOutlined,
  BellOutlined,
  UserOutlined,
  LogoutOutlined,
  BookOutlined,
} from '@ant-design/icons';
import '../../App.scss';

const { Content, Header } = Layout;

const UserLayout = () => {
  let navigate = useNavigate();

  const defaultSelectedKeys = () => {
    let pathname = window.location.pathname;
    if (pathname === '/') {
      return ['1'];
    } else if (pathname === '/classroom') {
      return ['2'];
    } else if (pathname === '/account') {
      return ['3'];
    } else {
      return ['1'];
    }
  };

  return (
    <>
      <Layout className="App">
        <Header
          className="AppHeader"
          style={{
            width: '100%',
            position: 'fixed',
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            padding: '0',
            zIndex: 2,
            backgroundColor: 'white',
            boxShadow: '0px 2px 5px #ccc',
            top: '0',
            paddingLeft: '8vw',
          }}
        >
          <a onClick={() => navigate('/')}>
            <img src="https://picsum.photos/200" width="30px"></img>
          </a>
          <div className="ItemMenu">
            <Menu
              defaultSelectedKeys={defaultSelectedKeys()}
              defaultOpenKeys={['sub1']}
              mode={'horizontal'}
              _internalDisableMenuItemTitleTooltip={true}
            >
              <Menu.Item key="1" onClick={() => navigate('dashboard')}>
                <HomeOutlined />
              </Menu.Item>

              <Menu.Item key="2" onClick={() => navigate('classroom')}>
                <AppstoreOutlined />
              </Menu.Item>

              <Menu.Item key="3" onClick={() => navigate('account')}>
                <UserOutlined />
              </Menu.Item>
            </Menu>
          </div>
        </Header>
        <Layout>
          <Content>
            <div className="Layout">
              <Outlet />
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default UserLayout;
