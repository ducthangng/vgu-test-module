import React from 'react';
import GroupCard from '../components/GroupCard';
import { Row, Divider, Button } from 'antd';
import { Pagination } from 'antd';
import { Class } from '../models/Class';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';

const defaultData: Class[] = [
  {
    id: 1,
    className: 'BASIC IELTS CLASS',
    info: 'Book unique camping experiences on over 300,000 campsites.',
    announcement: '',
    roomCode: '',
    level: '',
  },
  {
    id: 2,
    className: 'ADVANCED IELTS CLASS',
    info: 'Book unique camping experiences on over 300,000 campsites.',
    announcement: '',
    roomCode: '',
    level: '',
  },
  {
    id: 3,
    className: 'ADVANCED IELTS CLASS',
    info: 'Book unique camping experiences on over 300,000 campsites.',
    announcement: '',
    roomCode: '',
    level: '',
  },
  {
    id: 4,
    className: 'ADVANCED IELTS CLASS',
    info: 'Book unique camping experiences on over 300,000 campsites.',
    announcement: '',
    roomCode: '',
    level: '',
  },
];

function GroupSelection() {
  return (
    <body>
      <Divider
        orientation="right"
        style={{
          color: '#8172d5',
          fontSize: '56px',
          fontFamily: 'Roboto-bold',
        }}
      >
        <Button type="primary"> Create new group </Button>
      </Divider>

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
          Classroom
        </Divider>

        <Row
          gutter={[20, 20]}
          justify="space-between"
          style={{ marginBottom: '5em' }}
        >
          {defaultData.map((item) => {
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
          <Pagination
            defaultCurrent={1}
            total={5}
            style={{ color: '#8172D5' }}
          />
        </Row>
      </div>
    </body>
  );
}

export default GroupSelection;
