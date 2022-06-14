import { Card, Form, Button } from 'antd';
import React from 'react';
import test from '../assets/images/test-cover.jpg';
import mail from '../assets/images/ic_contact_mail_24px.png';
import calendar from '../assets/images/ic_event_available_24px.png';
import { TestCardData } from '../models/TestCardData';

import { TeamOutlined, CalendarOutlined } from '@ant-design/icons';

// TODO: CSS need to be changed to /src/assets/css.
// Change the CSS file to module.
// See GroupCard for more info.
const TestCard: React.FC<TestCardData> = ({
  testId,
  groupId,
  deadline,
  description,
  imageLink,
}) => {
  return (
    <div className="my-3">
      <Card hoverable className="h-40 rounded rounded-xl">
        <div className="grid grid-cols-9">
          <div className="col-span-2 overflow-y-hidden">
            <img
              alt="example"
              src={test}
              className="w-3/4 p-0 rounded rounded-lg"
            />
          </div>

          <div className="col-span-3 grid grid-rows-2 flex justify-center items-center">
            <div className="text-2xl font-bold"> Test {testId}</div>
            <p className="font-medium"> {description} </p>
          </div>

          <div className="col-span-3 grid grid-rows-2 flex justify-center items-center">
            <div className="inline-flex">
              <TeamOutlined style={{ color: '#8172D5' }} className="mr-3" />
              Group {groupId}
            </div>
            <div className="inline-flex">
              <CalendarOutlined style={{ color: '#8172D5' }} className="mr-3" />
              {deadline}
            </div>
          </div>

          <div className="col-span-1 flex flex-col justify-center">
            <button className="bg-primary px-1 py-2 rounded rounded-lg font-bold text-white">
              Take
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TestCard;
