import React, { useEffect, useState } from 'react';
import UserChart from '../components/UserChart';
import UserProfileCard from '../components/UserFrofile/UserProfileCard';
import styles from '../assets/css/UserProfilePage.module.css';
import { Layout, Divider, Typography } from 'antd';
import { Test } from '../models/Test';

const { Title } = Typography;

const defaultData: Test[] = [
  {
    testClassId: 0,
    tagId: 1,
    testName: 'Test 1',
    createdUserId: 0,
    targetEntityCode: 0,
    title: 'Test 1',
    info: 'Test 1',
    duration: 0,
    dateAssigned: '',
    deadline: '',
    isDone: false,
  },
  {
    testClassId: 0,
    tagId: 0,
    testName: 'Test 2',
    createdUserId: 0,
    targetEntityCode: 0,
    title: 'Test 2',
    info: 'Test 2',
    duration: 0,
    dateAssigned: '',
    deadline: '',
    isDone: false,
  },
  {
    testClassId: 0,
    tagId: 0,
    testName: 'Test 2',
    createdUserId: 0,
    targetEntityCode: 0,
    title: 'Test 2',
    info: 'Test 2',
    duration: 0,
    dateAssigned: '',
    deadline: '',
    isDone: false,
  },
];

function UserProfile() {
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
            id={0}
            fullname={'Nguyen Duc Thang'}
            email={'ducthang@1.0.pe'}
            phone={'0911337845'}
            address={'1 Mountain View, California, USA'}
            dob={'18.01.2001'}
            avatar={undefined}
          />

          <div className={styles.userinfo}>
            <Title
              level={4}
              style={{ marginLeft: '100px', textDecoration: 'underline' }}
            >
              User Info
            </Title>
            <p style={{ marginLeft: '100px', fontWeight: 'bold' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni vel
              dignissimos ullam quo quas odio, autem error quam atque
              voluptatibus. Vel sed ab saepe sapiente ducimus repellat commodi
              ratione mollitia dolorem iusto velit illum doloribus hic unde
              veniam nobis, aut similique alias laborum beatae ipsum aperiam
              eligendi at esse. Distinctio adipisci praesentium nostrum maxime
              est molestias maiores ipsam, id cumque?
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
