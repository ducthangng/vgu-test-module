import { Card, Form } from 'antd';
import React from 'react';
import './MockTest.css';
import mocktest from '../assets/images/MOCK-TEST-2022-Apr_1.png';
import { MockTestData } from '../utils/models/MockTestData';
const { Meta } = Card;

const MockTest: React.FC<MockTestData> = ({ groupId, description }) => {
  return (
    <Form>
      <Card
        hoverable
        className="card"
        cover={
          <img
            alt="example"
            src={mocktest}
            className="image_cover"
            style={{ alignItems: 'center', borderTop: 20 }}
          />
        }
      >
        <div className="wrapper">
          <Meta
            title={groupId}
            className="content"
            style={{ textAlign: 'center' }}
          />
        </div>
      </Card>
    </Form>
  );
};

export default MockTest;
