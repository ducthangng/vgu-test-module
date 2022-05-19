import { Card, Form } from 'antd';
import React from 'react';
import './MockTest.css';
import mocktest from '../assets/images/MOCK-TEST-2022-Apr_1.png';

const { Meta } = Card;

function SelectTestCard() {
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
            style={{ alignItems: 'center', borderRadius: 10 }}
          />
        }
      >
        <div className="wrapper">
          <Meta
            title="GROUP 1"
            className="content"
            style={{ textAlign: 'center' }}
          />
        </div>
      </Card>
    </Form>
  );
}

export default SelectTestCard;
