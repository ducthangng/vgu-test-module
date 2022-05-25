import React, { useEffect, useState, useRef } from 'react';
import { Button, Popover, Modal } from 'antd';
import TestNav from '../components/test/TestNav';
import TestHeader from '../components/test/TestHeader';
import ListeningTest from '../components/test/ListeningTest';
import AudioPlayer from '../components/test/AudioPlayer';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import Section from '../components/test/Section.interface';

// fake data
import mockListeningData from '../api/mockListeningData.json';

export default function Test() {
  // test data
  let totalTime: number | undefined = undefined;
  const [mediaURL, setMediaURL] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [type, setType] = useState<string>('');
  const [sections, setSections] = useState<Section[]>([]);
  const [timeLeft, setTimeLeft] = useState<string>('');
  const [intervalId, setIntervalId] = useState<number | undefined>(undefined);
  // const [testQuestions, setTestQuestions] = useState<TestQuestion[]>();
  // const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  // const userAnswersRef = useRef<UserAnswer[]>([]); //make a copy of userAnswers state to deal with setInterval closure

  //other data
  const [openNav, setOpenNav] = useState<boolean>(true);

  //fetch data function, currently it only sets mock data
  const fetchData = () => {
    setMediaURL(mockListeningData.mediaURL);
    setTitle(mockListeningData.title);
    setContent(mockListeningData.content);
    setDescription(mockListeningData.description);
    setType(mockListeningData.type);
    setSections(mockListeningData.sections);
    totalTime = 10;
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
  }, [timeLeft, totalTime]);

  //submit test function
  //   const submitTest = (event?: React.MouseEvent<HTMLElement>) => {
  //     event?.preventDefault();
  //     console.log('submit!');
  //     console.log(userAnswersRef.current);
  //   };
  const submitTest = () => {};

  //   useEffect(() => {
  //     userAnswersRef.current = userAnswers;
  //   }, [userAnswers]);

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
                <TestNav testType={type} submitTest={submitTest} />
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
          <ListeningTest sections={sections} />
        </div>
      </div>

      <AudioPlayer audioSource="https://www.dropbox.com/s/8cds18ri4qugdi4/guwei.mp3?dl=1" />
    </div>
  );
}
