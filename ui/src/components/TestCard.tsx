import { Card, Form, Avatar } from 'antd';
import React from 'react';
import './TestCard.css';
import test from '../assets/images/pexels-photo-1036644.png';
import mail from '../assets/images/ic_contact_mail_24px.png';
import calendar from '../assets/images/ic_event_available_24px.png';

const test_id = 1;
const test_date = '2/2/2017';
const group_id = 1;
const description =
  'To be well-prepared for the IELTS test (both IELTS Academic & IELTS General Training Module)';

function TestCard() {
  return (
    <Form>
      <Card
        hoverable
        className="TestCard"
        cover={
          <img
            alt="example"
            src={test}
            className="cover"
            style={{ alignItems: 'center', borderRadius: 10 }}
          />
        }
      >
        <div>
          <h1 className="test_title"> Test {test_id}</h1>
          <h2 className="test_description"> {description} </h2>
          <p className="test_group">
            <img src={mail} className="mail_icon" alt="mail" />
            Group {group_id}
          </p>
          <p className="test_time">
            <img src={calendar} className="calendar_icon" alt="calendar" />
            {test_date}
          </p>
        </div>
      </Card>
    </Form>
  );
}

export default TestCard;
