import React from 'react';

//import library from antd
import { Divider, Row } from 'antd';
import { Pagination } from 'antd';

//import Component from components
import TestTable from '../components/TestTable';
import { TestInformation } from '../utils/models/TestInformation';

// Language: typescript
// Path: ui\src\pages\TestManagement.tsx
const defaultData: TestInformation[] = [
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

function TestInformation() {
  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <body>
        <Divider orientation="left"> Test Management </Divider>
        <Row gutter={[20, 20]} justify="space-around">
          {defaultData.map((items) => {
            return (
              <TestTable
                key={items.key}
                nameTest={items.nameTest}
                testId={items.testId}
                testDate={items.testDate}
              />
            );
          })}
        </Row>
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
export default TestInformation;
