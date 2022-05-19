import { Card, Form, Button } from 'antd';
import React from 'react';
import styles from '../assets/css/GroupCard.module.css';

const { Meta } = Card;

function GroupCard() {
  return (
    <Form>
      <Card
        hoverable
        className={styles.card}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            className={styles.cover}
            style={{ alignItems: 'center' }}
          />
        }
      >
        <div className={styles.wrapper}>
          <Meta
            title="ADVANCE IELTS TEST"
            description="Book unique camping experiences on over 300,000 campsites."
            className={styles.content}
            style={{ textAlign: 'center' }}
          />
          <Button className={styles.btn} style={{ alignItems: 'center' }}>
            Take
          </Button>
        </div>
      </Card>
    </Form>
  );
}

export default GroupCard;
