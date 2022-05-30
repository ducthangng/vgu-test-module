import React from 'react';
import TestCard from '../components/TestCard';
import { Row, Divider } from 'antd';
import { Pagination } from 'antd';
import { TestCardData } from '../utils/models/TestCardData';

const defaultData: TestCardData[] = [
  {
    testId: 1,
    deadline: 123123123,
    groupId: 1,
    description:
      'To be well-prepared for the IELTS test (both IELTS Academic & IELTS General Training Module)',
    imageLink: 'link',
  },
  {
    testId: 1,
    deadline: 123123123,
    groupId: 1,
    description:
      'To be well-prepared for the IELTS test (both IELTS Academic & IELTS General Training Module)',
    imageLink: 'link',
  },
  {
    testId: 1,
    deadline: 123123123,
    groupId: 1,
    description:
      'To be well-prepared for the IELTS test (both IELTS Academic & IELTS General Training Module)',
    imageLink: 'link',
  },
  {
    testId: 1,
    deadline: 123123123,
    groupId: 1,
    description:
      'To be well-prepared for the IELTS test (both IELTS Academic & IELTS General Training Module)',
    imageLink: 'link',
  },
  {
    testId: 1,
    deadline: 123123123,
    groupId: 1,
    description:
      'To be well-prepared for the IELTS test (both IELTS Academic & IELTS General Training Module)',
    imageLink: 'link',
  },
  {
    testId: 1,
    deadline: 123123123,
    groupId: 1,
    description:
      'To be well-prepared for the IELTS test (both IELTS Academic & IELTS General Training Module)',
    imageLink: 'link',
  },
];

function TestSelection() {
  return (
    <div
      style={{
        // display: 'flex',
        width: '60%',
      }}
    >
      <body>
        <Divider orientation="left">Choose the test</Divider>
        <Row gutter={[20, 20]} justify="space-around">
          {defaultData.map((item) => {
            return (
              <TestCard
                testId={item.testId}
                groupId={item.groupId}
                description={item.description}
                deadline={item.deadline}
                imageLink={item.imageLink}
              />
            );
          })}
        </Row>

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

export default TestSelection;
