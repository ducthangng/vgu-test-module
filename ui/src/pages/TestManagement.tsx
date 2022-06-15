import React from 'react';

//import library from antd
import { Divider, Button } from 'antd';

//import Component from components
import TestTable from '../components/TestTable';
// import { Test } from '../models/Test';

interface Test {
  key: string;
  nameTest: string;
  testId: number;
  testDate: string;
}

function TestManagement() {
  return (
    <body>
      <Divider
        orientation="right"
        style={{ fontSize: '20px', fontFamily: 'Roboto' }}
      >
        <Button type="primary"> User Information </Button>
      </Divider>

      <Divider
        orientation="left"
        style={{ fontSize: '26px', fontFamily: 'Roboto' }}
      >
        Test Management
      </Divider>

      <TestTable />
      <br></br>
    </body>
  );
}
export default TestManagement;
