import React from 'react';
import TestCard from '../components/TestCard';

import { Pagination } from 'antd';
import { TestCardData } from '../models/TestCardData';

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
    <div className="w-5/6 text-xl font-black">
      <div>Choose the test</div>

      <div>
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
      </div>
      <div className="flex justify-center">
        <Pagination
          defaultCurrent={1}
          total={50}
          style={{ color: '#8172D5' }}
        />
      </div>
    </div>
  );
}

export default TestSelection;
