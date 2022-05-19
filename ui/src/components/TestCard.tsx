import { Card, Form, Avatar } from 'antd';
import React from 'react';
import test from '../assets/images/pexels-photo-1036644.png';
import mail from '../assets/images/ic_contact_mail_24px.png';
import calendar from '../assets/images/ic_event_available_24px.png';
import { TestCardData } from '../utils/models/TestCardData';
import styles from '../assets/css/TestCard.module.css';

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
        className={styles.TestCard}
        cover={
          <img
            alt="example"
            src={test}
            className={styles.cover}
            style={{ alignItems: 'center', borderRadius: 10 }}
          />
        }
      >
        <div>
          <h1 className={styles.test_title}> Test {testId}</h1>
          <h2 className={styles.test_description}> {description} </h2>
          <p className={styles.test_group}>
            <img src={mail} className={styles.mail_icon} alt="mail" />
            Group {groupId}
          </p>
          <p className={styles.test_time}>
            <img
              src={calendar}
              className={styles.calendar_icon}
              alt="calendar"
            />
            {deadline}
          </p>
        </div>
      </Card>
    </Form>
  );
};

export default TestCard;
