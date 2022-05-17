import React, { useEffect, useState, useRef } from 'react';
import { Button, Popover, Modal } from 'antd';
import TestNav from './TestNav';
import MultipleChoiceTest from './MultipleChoiceTest';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';

const mockTestQuestions = [
  {
    id: 1,
    content: " I haven't heard from Maria _____",
    choiceA: 'since many months before',
    choiceB: 'for many months',
    choiceC: 'for many months ago',
    choiceD: 'since a long time',
    answer: 'B',
  },
  {
    id: 2,
    content: 'This book is so long that I _____.',
    choiceA: "haven't finished it yet ",
    choiceB: "haven't finished it already",
    choiceC: 'still have finished it',
    choiceD: "still haven't finished it already",
    answer: 'A',
  },
  {
    id: 3,
    content: 'Spain _____ at one time a very powerful country.',
    choiceA: 'was',
    choiceB: 'has been',
    choiceC: 'is',
    choiceD: 'was being',
    answer: 'A',
  },
  {
    id: 4,
    content: 'The longest fish in the contest _____ by Thelma Rivers.',
    choiceA: 'was catching',
    choiceB: 'caught',
    choiceC: 'was caught',
    choiceD: 'catch',
    answer: 'C',
  },
  {
    id: 5,
    content: 'New opportunities will emerge as the _____ climate improves.',
    choiceA: 'economics',
    choiceB: 'economic',
    choiceC: 'economical',
    choiceD: 'economy',
    answer: 'B',
  },
];

export default function TestLayout() {
  //interface
  interface TestQuestion {
    id: number;
    content: string;
    choiceA: string;
    choiceB: string;
    choiceC: string;
    choiceD: string;
    answer: string;
  }

  //student data
  const [fullName, setFullName] = useState<string>('');
  const [studentId, setStudentId] = useState<string>('');

  // test data
  let totalTime: number | undefined = undefined;
  const [testPart, setTestPart] = useState<string>('');
  const [timeLeft, setTimeLeft] = useState<string>('');
  const [intervalId, setIntervalId] = useState<number | undefined>(undefined);
  const [testQuestions, setTestQuestions] = useState<TestQuestion[]>();

  //other data
  const [openNav, setOpenNav] = useState<boolean>(true);

  //fetch data function, currently it only sets mock data
  const fetchData = () => {
    totalTime = 10;
    setFullName('Hua Nhat Gia Nghi');
    setStudentId('18242');
    setTestPart('Listening');
    setTestQuestions(mockTestQuestions);
  };
  useEffect(() => {
    fetchData();
  }, []);

  //countdown function
  const countdown = () => {
    if (totalTime == undefined) {
      return;
    }

    if (totalTime <= 0) {
      totalTime = totalTime - 1;
      submitTest();
      return;
    }

    totalTime = totalTime - 1;
    const minutes = Math.floor(totalTime / 60);
    const seconds = totalTime - minutes * 60;
    const minutesString = minutes.toString().padStart(2, '0');
    const secondsString = seconds.toString().padStart(2, '0');
    setTimeLeft(minutesString + ':' + secondsString);
  };
  useEffect(() => {
    if (!intervalId) {
      setIntervalId(
        window.setInterval(() => {
          if (totalTime == undefined) {
            return;
          }
          if (totalTime >= 0) {
            countdown();
          }
        }, 1000)
      );
    }
    return () => clearTimeout(intervalId);
  }, [timeLeft, totalTime]);

  //submit test function
  const submitTest = (event?: React.MouseEvent<HTMLElement>) => {
    event?.preventDefault();
    console.log('submit!');
  };

  return (
    <div style={{ padding: 30, backgroundColor: 'gray' }}>
      <div
        style={{
          position: 'fixed',
          top: '15vh',
          zIndex: 500,
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        {openNav && (
          <>
            <nav>
              <TestNav
                fullName={fullName}
                studentId={studentId}
                testPart={testPart}
                timeLeft={timeLeft}
                submitTest={submitTest}
              />
            </nav>
            <Button
              style={{
                position: 'fixed',
                left: '10',
              }}
              onClick={() => setOpenNav(!openNav)}
            >
              <CloseOutlined />
            </Button>
          </>
        )}

        {!openNav && (
          <Button onClick={() => setOpenNav(!openNav)}>
            <MenuOutlined />
          </Button>
        )}
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <MultipleChoiceTest testQuestions={testQuestions} />
      </div>
    </div>
  );
}
