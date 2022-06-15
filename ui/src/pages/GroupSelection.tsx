import React, { useState, useEffect } from 'react';
import GroupCard from '../components/GroupCard';
import { Row, Divider } from 'antd';
import { Pagination } from 'antd';
import { Class } from '../models/Class';
import { classApi } from '../api/classApi';
import { userApi } from '../api/userApi';
import { authApi } from '../api/authApi';

// const defaultData: Class[] = [
//   {
//     id: 1,
//     className: 'BASIC IELTS CLASS',
//     info: 'Book unique camping experiences on over 300,000 campsites.',
//     announcement: '',
//     roomCode: '',
//     level: '',
//   },
//   {
//     id: 2,
//     className: 'ADVANCED IELTS CLASS',
//     info: 'Book unique camping experiences on over 300,000 campsites.',
//     announcement: '',
//     roomCode: '',
//     level: '',
//   },
//   {
//     id: 3,
//     className: 'ADVANCED IELTS CLASS',
//     info: 'Book unique camping experiences on over 300,000 campsites.',
//     announcement: '',
//     roomCode: '',
//     level: '',
//   },
//   {
//     id: 4,
//     className: 'ADVANCED IELTS CLASS',
//     info: 'Book unique camping experiences on over 300,000 campsites.',
//     announcement: '',
//     roomCode: '',
//     level: '',
//   },
// ];

function GroupSelection() {
  const [data, setData] = React.useState<Class[]>([] as Class[]);

  const getClasses = async () => {
    const id = (await authApi.getId()) as number;
    const classes = (await userApi.getClass(id)) as Class[];

    setData(classes);
  };

  useEffect(() => {
    getClasses();
  }, []);

  return (
    <div
      style={{
        backgroundColor: '#fff',
        width: '60%',
      }}
    >
      <Divider
        orientation="left"
        style={{ fontSize: '25px', fontFamily: 'Roboto' }}
      >
        Choose the class
      </Divider>
      <Row
        gutter={[20, 20]}
        justify="space-evenly"
        style={{ marginBottom: '5em' }}
      >
        {data.map((item) => {
          return (
            <div
              style={{
                borderColor: '#d4d4d6',
                borderWidth: '1px',
                borderRadius: '20px',
              }}
            >
              <GroupCard
                id={item.id}
                className={item.className}
                info={item.info}
                announcement={item.announcement}
                roomCode={item.roomCode}
                level={item.level}
              />
            </div>
          );
        })}
      </Row>
      <Row justify="center">
        <Pagination defaultCurrent={1} total={5} style={{ color: '#8172D5' }} />
      </Row>
    </div>
  );
}

export default GroupSelection;
