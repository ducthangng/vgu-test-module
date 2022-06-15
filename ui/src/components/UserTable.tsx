import React, { useEffect } from 'react';
import { useState } from 'react';
//import { isEmpty } from 'lodash';

//import library from antd
import { Table, Button, Popconfirm } from 'antd';

//import data from '..';
//import data from '../api/UserData.json';

// create interface for UserTable
type Props = {};

const UserTable: React.FC<Props> = () => {
  const [dataSource, setDataSource] = React.useState<any>([
    {
      key: '1',
      nameTest: 'Hai',
      testId: 1,
      testDate: '2020-01-01',
    },
    {
      key: '2',
      nameTest: 'IELTS Basic',
      testId: 2,
      testDate: '2020-01-02',
    },
    {
      key: '3',
      nameTest: 'IELTS Academic',
      testId: 3,
      testDate: '2020-01-03',
    },
  ]);

  const fetchData = async () => {
    const response = await fetch('http://localhost:8080/api/users');
    const json = await response.json();
    setDataSource(json);
  };

  useEffect(() => {
    fetchData();
  }, []);

  //GOTO: Call to delete test information from database
  const onDelete = (record: any) => {
    setDataSource((pre: any) => {
      return pre.filter((test: { key: any }) => test.key !== record.key);
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
      // Button to delete test information
      render: (record: any) => {
        return (
          <Popconfirm
            title=" You want to delete this test?"
            onConfirm={() => onDelete(record)}
          >
            <Button type="primary">Delete</Button>
          </Popconfirm>
        );
      },
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
