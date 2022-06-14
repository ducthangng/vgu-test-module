import { Card, Form, Button } from 'antd';
import React from 'react';
import styles from '../assets/css/GroupCard.module.css';
import { GroupCardData } from '../models/GroupCardData';
const { Meta } = Card;

const GroupCard: React.FC<GroupCardData> = ({ title, description }) => {
  const handleClick = () => {};

  return (
    <Form>
      <Card
        hoverable
        // bordered={true}
        className={styles.card}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            className={styles.cover}
            style={{
              alignItems: 'center',
              borderTopLeftRadius: '20px',
              borderTopRightRadius: '20px',
            }}
          />
        }
      >
        <div className={styles.wrapper}>
          <Meta
            title={title}
            description={description}
            className={styles.content}
            style={{ textAlign: 'center' }}
          />
          <Button
            className={styles.btn}
            style={{ alignItems: 'center' }}
            onClick={() => handleClick()}
          >
            Visit
          </Button>
        </div>
      </Card>
    </Form>
  );
};

export default GroupCard;
