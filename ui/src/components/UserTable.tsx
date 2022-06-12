import React, { useEffect } from 'react';
import axios from 'axios';
import { isEmpty } from 'lodash';

//import library from antd
import { Table, Button, Popconfirm } from 'antd';
// import { RouterComponentProps } from "react-router";

//fake data
//import data from '..';
//import data from '../api/UserData.json';

// create interface for UserTable
type Props = {
  name: string;
  Email: string;
  userId: number;
  action: React.ReactNode;
};

const UserTable: React.FC<Props> = () => {
  const [data, setData] = React.useState<any>([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/users')
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  //GOTO: Call to delete user information from database
  const onDelete = (userId: number) => {
    console.log('Delete Test:', userId);
  };

  //create title of columns in user table information
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'User ID',
      dataIndex: 'userId',
      key: 'userId',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      // Button to delete user information
      render: (userId: number) => (
        <Popconfirm
          title=" You want to delete this user?"
          onConfirm={() => onDelete(userId)}
        >
          <Button type="primary" icon="DeleteOutlined">
            Delete
          </Button>
        </Popconfirm>
      ),
    },
  ];

  return (
    <div style={{ padding: 24, background: '#fff', minHeight: '360' }}>
      <span>
        <Table columns={columns}></Table>
      </span>
    </div>
  );
};

export default UserTable;
