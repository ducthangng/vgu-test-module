import { Card, Form, Avatar } from 'antd';
import React from 'react';
import './TestCard.css';
import test from '../assets/images/pexels-photo-1036644.png';
import mail from '../assets/images/ic_contact_mail_24px.png';
import calendar from '../assets/images/ic_event_available_24px.png';
import { TestCardData } from '../utils/models/TestCardData';

// TODO: CSS need to be changed to /src/assets/css.
// Change the CSS file to module.
// See GroupCard for more info.
const TestCard: React.FC<TestCardData> = ({
  testId,
  groupId,
  deadline,
  description,
  imageLink,
}) => {
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
          <h1 className="test_title"> Test {testId}</h1>
          <h2 className="test_description"> {description} </h2>
          <p className="test_group">
            <img src={mail} className="mail_icon" alt="mail" />
            Group {groupId}
          </p>
          <p className="test_time">
            <img src={calendar} className="calendar_icon" alt="calendar" />
            {deadline}
          </p>
        </div>
      </Card>
    </Form>
  );
};

export default TestCard;
