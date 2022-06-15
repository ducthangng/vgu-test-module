import React, { useEffect, useState } from 'react';
import UserChart from '../components/UserChart';
import UserProfileCard from '../components/UserFrofile/UserProfileCard';
import styles from '../assets/css/UserProfilePage.module.css';
import { Layout, Divider, Typography } from 'antd';
import { userApi } from '../api/userApi';
import { authApi } from '../api/authApi';
import { TestDetails } from '../models/TestDetails';
import { User } from '../models/User';

const { Title } = Typography;

const defaultData: TestDetails[] = [
  {
    id: 1,
    testClassId: 0,
    tagId: 1,
    tagName: '',
    testName: 'Test 1',
    createdUserId: 0,
    targetEntityCode: 0,
    title: 'Test 1',
    info: 'Test 1',
    status: '',
    duration: 0,
    dateAssigned: 0,
    dateUpdated: 0,
    deadline: 0,
    isDone: false,
  },
  {
    id: 2,
    testClassId: 0,
    tagId: 1,
    tagName: '',
    testName: 'Test 2',
    createdUserId: 0,
    targetEntityCode: 0,
    title: 'Test 2',
    info: 'Test 2',
    status: '',
    duration: 0,
    dateAssigned: 0,
    dateUpdated: 0,
    deadline: 0,
    isDone: false,
  },
  {
    id: 3,
    testClassId: 0,
    tagId: 1,
    tagName: '',
    testName: 'Test 3',
    createdUserId: 0,
    targetEntityCode: 0,
    title: 'Test 3',
    info: 'Test 3',
    status: '',
    duration: 0,
    dateAssigned: 0,
    dateUpdated: 0,
    deadline: 0,
    isDone: false,
  },
];

function UserProfile() {
  const [user, setUser] = useState<User>();

  const getUser = async () => {
    const id = (await authApi.getId()) as number;
    const userData = (await userApi.getInfoById(id)) as User[];

    console.log('usedata');
    console.log(userData);

    setUser(userData[0]);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div
      style={{
        width: '80%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <body>
        <Divider
          orientation="left"
          style={{ fontSize: '25px', fontFamily: 'Roboto' }}
        >
          User Profile
        </Divider>
        <div className={styles.content}>
          <UserProfileCard
            id={user?.id as number}
            fullname={user?.fullname as string}
            username={user?.username as string}
            email={user?.mail as string}
            gender={user?.gender as string}
            avatar={undefined}
          />

          <div className={styles.userinfo}>
            <Title
              level={4}
              style={{ marginLeft: '100px', textDecoration: 'underline' }}
            >
              Welcome to Peekaboo
            </Title>
            <p style={{ marginLeft: '100px', fontWeight: 'bold' }}>
              Peekaboo is a magical application. It was a question of which of
              the two she preferred. On the one hand, the choice seemed simple.
              The more expensive one with a brand name would be the choice of
              most. It was the easy choice. The safe choice. But she wasn't sure
              she actually preferred it.
            </p>
            <UserChart />

            <div
              style={{
                marginLeft: '100px',
                fontWeight: 'bold',
                marginTop: '30px',
              }}
            >
              <Title level={4} style={{ textDecoration: 'underline' }}>
                Recent Tests Done
              </Title>

              <div className={styles.recent_test}>
                {defaultData.map((test) => {
                  return (
                    <div
                      style={{
                        width: 200,
                        height: 50,
                        border: '1px solid',
                        borderColor: '#8e9599',
                        borderRadius: '5px',
                        marginRight: '10px',
                      }}
                    >
                      <a
                        style={{ color: 'black' }}
                        href={`/test/${test.tagId}`}
                      >
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: '12px',
                            marginRight: '20px',
                            marginLeft: '20px',
                          }}
                        >
                          <p style={{ fontWeight: 'bold' }}>{test.testName}</p>
                          <p>90/100</p>
                        </div>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default UserProfile;
