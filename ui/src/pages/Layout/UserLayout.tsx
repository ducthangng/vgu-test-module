import { Layout, Menu, Dropdown } from 'antd';
import React, { Children } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import {
  HomeOutlined,
  AppstoreOutlined,
  UserOutlined,
  DownOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import '../../App.scss';

import { authApi } from '../../api/authApi';

const { Content, Header } = Layout;

const UserLayout = () => {
  let navigate = useNavigate();

  const defaultSelectedKeys = () => {
    let pathname = window.location.pathname;
    if (pathname === 'classroom') {
      return ['2'];
    } else {
      return ['1'];
    }
  };

  return (
    <>
      <Layout className="App">
        {/* <UserLayoutHeader/> */}
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
          <Menu
            defaultSelectedKeys={defaultSelectedKeys()}
            defaultOpenKeys={['sub1']}
            mode={'horizontal'}
            _internalDisableMenuItemTitleTooltip={true}
            disabledOverflow={true}
          >
            <Menu.Item key="1">
              <Dropdown
                placement="bottom"
                overlay={
                  <Menu>
                    <Menu.Item key="1" onClick={() => navigate('account')}>
                      <div className="flex justify-center items-center">
                        <UserOutlined className="mr-2" />
                        Profile
                      </div>
                    </Menu.Item>
                    <Menu.Item
                      key="2"
                      onClick={async () => {
                        await authApi.logout();
                      }}
                    >
                      <div className="flex justify-center items-center">
                        <LogoutOutlined className="mr-2" />
                        Logout
                      </div>
                    </Menu.Item>
                  </Menu>
                }
              >
                <div className="flex justify-center items-center">
                  <UserOutlined className="mr-2" />
                  User
                  <DownOutlined className="ml-2" />
                </div>
              </Dropdown>
            </Menu.Item>

            <Menu.Item key="2" onClick={() => navigate('classroom')}>
              <div className="flex justify-center items-center">
                <AppstoreOutlined className="mr-2" />
                Class
              </div>
            </Menu.Item>
          </Menu>
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
