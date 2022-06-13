import { UserOutlined } from '@ant-design/icons';
import { Avatar, Card, Form } from 'antd';

import React from 'react';
//import { User } from '../utils/models/User';
import styles from '../assets/css/GroupCard.module.css';

interface UserCardProps {
  id: number;
  fullname: string;
  email: string;
  phone: string;
  address: string;
  dob: string;
  avatar: React.ReactNode;
}

const UserProfileCard: React.FC<UserCardProps> = ({
  id,
  fullname,
  email,
  phone,
  address,
  dob,
}) => {
  return (
    <Form>
      <Card hoverable className={styles.card}>
        <Avatar size="large" icon={<UserOutlined />} />

        <div className={styles.wrapper}>
          id={id}
          title={fullname}
          email={email}
          phone={phone}
          address={address}
          dob={dob}
          style={{ alignItems: 'center' }}
        </div>
      </Card>
    </Form>
  );
};

export default UserProfileCard;
