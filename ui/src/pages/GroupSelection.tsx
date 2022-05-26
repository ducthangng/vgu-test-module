import React from 'react';
import GroupCard from '../components/GroupCard';
import { Row, Divider } from 'antd';
import { Pagination } from 'antd';
import { GroupCardData } from '../utils/models/GroupCardData';

const defaultData: GroupCardData[] = [
  {
    title: 'BASIC IELTS TEST',
    description: 'Book unique camping experiences on over 300,000 campsites.',
  },
  {
    title: 'ADVANCED IELTS TEST',
    description: 'Book unique camping experiences on over 300,000 campsites.',
  },
];

function GroupSelection() {
  return (
    <div
      style={{
        backgroundColor: '#F2F5F8',
        width: '60%',
      }}
    >
      <Divider orientation="left">Choose the class</Divider>
      <Row gutter={[20, 20]} justify="space-around">
        {defaultData.map((item) => {
          return (
            <GroupCard title={item.title} description={item.description} />
          );
        })}
      </Row>
      <br></br>
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
