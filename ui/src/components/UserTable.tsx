import React, { useEffect } from 'react';
import { useState } from 'react';
//import { isEmpty } from 'lodash';

//import library from antd
import { Table, Button, Popconfirm } from 'antd';

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
  const [dataSource, setDataSource] = React.useState<any>([]);

  const fetchData = async () => {
    const response = await fetch('http://localhost:8080/api/users');
    const json = await response.json();
    setDataSource(json);
  };

  useEffect(() => {
    fetchData();
  }, []);

  //GOTO: Call to delete user information from database
  const onDelete = (record: any) => {
    setDataSource((pre: any) => {
      return pre.filter(
        (user: { userId: any }) => user.userId !== record.userId
      );
    });
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
      render: (record: any) => (
        <Popconfirm
          title=" You want to delete this user?"
          onConfirm={() => onDelete(record)}
        >
          <Button type="primary" icon="DeleteOutlined">
            Delete
          </Button>
        </Popconfirm>
      ),
    },
  ];

  return (
    <div style={{ padding: 20, background: '#fff', minHeight: '360' }}>
      <span>
        <Table columns={columns}> dataSource={dataSource}</Table>
      </span>
    </div>
  );
};

export default UserTable;
