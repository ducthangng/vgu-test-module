import React from 'react';
import MockTest from '../components/MockTest';
import { Row, Col, Divider } from 'antd';
import { Pagination } from 'antd';
import { MockTestData } from '../utils/models/MockTestData';

const defaultData: MockTestData[] = [
  {
    groupId: 1,
    description: 'this is the new group',
  },
  {
    groupId: 1,
    description: 'this is the new group',
  },
  {
    groupId: 1,
    description: 'this is the new group',
  },
  {
    groupId: 1,
    description: 'this is the new group',
  },
  {
    groupId: 1,
    description: 'this is the new group',
  },
  {
    groupId: 1,
    description: 'this is the new group',
  },
  {
    groupId: 1,
    description: 'this is the new group',
  },
  {
    groupId: 1,
    description: 'this is the new group',
  },
];

function MockTestSelection() {
  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <body>
        <Divider orientation="left">Choose the topic</Divider>
        <Row gutter={[20, 20]} justify="space-around">
          {defaultData.map((item) => {
            return (
              <MockTest groupId={item.groupId} description={item.description} />
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
      </body>
    </div>
  );
}

export default MockTestSelection;
