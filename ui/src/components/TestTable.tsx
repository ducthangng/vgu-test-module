import React from 'react';
import { useState, useEffect } from 'react';

//import library from antd
import { Table, Button, Popconfirm } from 'antd';

//import Component from components
// import { Test } from '../models/Test';

interface Test {
  key: string;
  nameTest: string;
  testId: number;
  testDate: string;
}

const TestTable: React.FC<Test> = () => {
  const [dataSource, setDataSource] = React.useState<any>([]);

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
      return pre.filter(
        (user: { userId: any }) => user.userId !== record.userId
      );
    });
  };

  //create title of columns in test table information
  const columns = [
    {
      title: 'Key',
      dataIndex: 'key',
      key: 'key',
    },
    {
      title: 'Test Name',
      dataIndex: 'nameTest',
      key: 'nameTest',
    },
    {
      title: 'Test ID',
      dataIndex: 'testId',
      key: 'testId',
    },
    {
      title: 'Test Date',
      dataIndex: 'testDate',
      key: 'testDate',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      // Button to delete test information
      render: (record: any) => (
        <Popconfirm
          title=" You want to delete this test?"
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

export default TestTable;
