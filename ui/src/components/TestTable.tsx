import React from 'react';

//import library from antd
import { Table, Button, Popconfirm } from 'antd';

//import Component from components
import { TestInformation } from '../utils/models/TestInformation';

const TestTable: React.FC<TestInformation> = () => {
  //GOTO: Call to delete test information from database
  const onDelete = (testId: number) => {
    console.log('Delete Test:', testId);
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
      render: (testId: number) => (
        <Popconfirm
          title=" You want to delete this test?"
          onConfirm={() => onDelete(testId)}
        >
          <Button type="primary" icon="DeleteOutlined">
            Delete
          </Button>
        </Popconfirm>
      ),
    },
  ];

  return (
    <div style={{ padding: 200, background: '#fff', minHeight: '360' }}>
      <span>
        <Table columns={columns}></Table>
      </span>
    </div>
  );
};

export default TestTable;
