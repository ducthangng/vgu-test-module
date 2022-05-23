import React, { useEffect, useState, useRef } from 'react';
import { Button, Popover, Modal } from 'antd';
import TestNav from './TestNav';
import ListeningTest from './ListeningTest';
import TestHeader from './TestHeader';
import AudioPlayer from './AudioPlayer';
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

const mockUserAnswers = [
  { id: 1, answer: 'A' },
  { id: 2, answer: 'A' },
  { id: 3, answer: 'A' },
  { id: 4, answer: 'A' },
  { id: 5, answer: 'A' },
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
  interface UserAnswer {
    id: number;
    answer: string;
  }

  //student data
  const [fullName, setFullName] = useState<string>('');
  const [profilePicture, setProfilePicture] = useState<string>('');
  const [studentId, setStudentId] = useState<string>('');

  // test data
  let totalTime: number | undefined = undefined;
  const [testPart, setTestPart] = useState<string>('');
  const [timeLeft, setTimeLeft] = useState<string>('');
  const [intervalId, setIntervalId] = useState<number | undefined>(undefined);
  const [testQuestions, setTestQuestions] = useState<TestQuestion[]>();
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const userAnswersRef = useRef<UserAnswer[]>([]); //make a copy of userAnswers state to deal with setInterval closure

  //other data
  const [openNav, setOpenNav] = useState<boolean>(true);

  //fetch data function, currently it only sets mock data
  const fetchData = () => {
    totalTime = 10;
    setFullName('Hua Nhat Gia Nghi');
    setProfilePicture(
      'https://www.bethesdaheadshots.com/wp-content/uploads/2020/02/Jonathan-Business-Headshot.jpg'
    );
    setStudentId('18242');
    setTestPart('Listening');
    setTestQuestions(mockTestQuestions);
  };
  useEffect(() => {
    fetchData();
  }, []);

  //countdown function
  const countdown = () => {
    console.log('time is ' + totalTime);
    console.log(userAnswers);
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
    return () => clearInterval(intervalId);
  }, [timeLeft, totalTime, userAnswers]);

  //submit test function
  const submitTest = (event?: React.MouseEvent<HTMLElement>) => {
    event?.preventDefault();
    console.log('submit!');
    console.log(userAnswersRef.current);
  };

  useEffect(() => {
    userAnswersRef.current = userAnswers;
  }, [userAnswers]);

  return (
    <div>
      <TestHeader timeLeft={timeLeft} submitTest={submitTest} />

      <div style={{ padding: 30, backgroundColor: '#E5E5E5' }}>
        <div
          style={{
            zIndex: 500,
            display: 'flex',
            flexDirection: 'row',
          }}
          className="fixed top-40 lg:left-20"
        >
          {openNav && (
            <>
              <nav>
                <TestNav
                  fullName={fullName}
                  profilePicture={profilePicture}
                  studentId={studentId}
                  testPart={testPart}
                  submitTest={submitTest}
                />
              </nav>
              <button
                style={{
                  position: 'fixed',
                  left: '10',
                }}
                className="p-3 border md:hidden"
                onClick={() => setOpenNav(!openNav)}
              >
                <CloseOutlined />
              </button>
            </>
          )}

          {!openNav && (
            <button
              className="p-3 border bg-white rounded-md md:hidden"
              onClick={() => setOpenNav(!openNav)}
            >
              <MenuOutlined />
            </button>
          )}
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <ListeningTest
            testQuestions={testQuestions}
            userAnswers={userAnswers}
            setUserAnswers={setUserAnswers}
          />
        </div>
      </div>

      <AudioPlayer audioSource="https://www.dropbox.com/s/8cds18ri4qugdi4/guwei.mp3?dl=1" />
    </div>
  );
}
