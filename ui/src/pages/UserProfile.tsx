import React, { useEffect, useState } from 'react';
// import {useHistory} from 'react-router-dom';

import UserChart from '../components/UserProfile/UserChart';
import UserProfileCard from '../components/UserFrofile/UserProfileCard';

import { Layout, Divider } from 'antd';

const { Sider, Content } = Layout;

function UserProfile() {
  return (
    <div style={{ width: '65%', display: 'flex', justifyContent: 'center' }}>
      <body>
        <Divider
          orientation="left"
          style={{ fontSize: '25px', fontFamily: 'Roboto' }}
        >
          User Profile
        </Divider>
        <Layout>
          <Sider>
            <UserProfileCard
              id={0}
              fullname={''}
              email={''}
              phone={''}
              address={''}
              dob={''}
              avatar={undefined}
            ></UserProfileCard>
          </Sider>
          <Content>
            <UserChart></UserChart>
          </Content>
        </Layout>
      </body>
    </div>
  );
}

export default UserProfile;
