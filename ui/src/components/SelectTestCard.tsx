import { Card, Form, Button } from 'antd';
import React from 'react';
import './SelectTestCard.css';

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
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            className="cover"
            style={{ alignItems: 'center' }}
          />
        }
      >
        <div className="wrapper">
          <Meta
            title="ADVANCE IELTS TEST"
            description="Book unique camping experiences on over 300,000 campsites."
            className="content"
            style={{ textAlign: 'center' }}
          />
          <Button className="btn" style={{ alignItems: 'center' }}>
            Take
          </Button>
        </div>
      </Card>
    </Form>
  );
}

export default SelectTestCard;
