import React from 'react';
import GroupCard from '../components/GroupCard';
import { Row, Divider } from 'antd';
import { Pagination } from 'antd';
import { GroupCardData } from '../models/GroupCardData';

const defaultData: GroupCardData[] = [
  {
    // id: 1,
    title: 'BASIC IELTS CLASS',
    description: 'Book unique camping experiences on over 300,000 campsites.',
  },
  {
    title: 'ADVANCED IELTS CLASS',
    description: 'Book unique camping experiences on over 300,000 campsites.',
  },
  {
    title: 'ADVANCED IELTS CLASS',
    description: 'Book unique camping experiences on over 300,000 campsites.',
  },
  {
    title: 'ADVANCED IELTS CLASS',
    description: 'Book unique camping experiences on over 300,000 campsites.',
  },
];

function GroupSelection() {
  return (
    <div
      style={{
        backgroundColor: '#fff',
        width: '60%',
      }}
    >
      <Divider orientation="left">Choose the class</Divider>
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
                // marginRight: '60px',
              }}
            >
              <GroupCard title={item.title} description={item.description} />
            </div>
          );
        })}
      </Row>
      <Row justify="center">
        <Pagination
          defaultCurrent={1}
          total={50}
          style={{ color: '#8172D5' }}
        />
      </Row>
    </div>
  );
}

export default GroupSelection;
