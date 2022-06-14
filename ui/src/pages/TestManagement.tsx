import React from 'react';

//import library from antd
import { Divider, Row, Table } from 'antd';
import { Pagination } from 'antd';

//import Component from components
import TestTable from '../components/TestTable';
// import { Test } from '../models/Test';

interface Test {
  key: string;
  nameTest: string;
  testId: number;
  testDate: string;
}

const defaultData: Test[] = [
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
];

function TestManagement() {
  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <body>
        <Divider
          orientation="left"
          style={{ fontSize: '26px', fontFamily: 'Roboto' }}
        >
          Test Management
        </Divider>
        <Table></Table>
        <br></br>
        <Row justify="center">
          <Pagination
            defaultCurrent={1}
            total={50}
            style={{ color: '#8172D5' }}
          />
        </Row>
      </body>
    </div>
  );
}
export default TestManagement;
