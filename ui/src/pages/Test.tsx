import React, { useEffect, useState, useRef } from 'react';
import TestNav from '../components/test/TestNav';
import TestHeader from '../components/test/TestHeader';
import ListeningTest from '../components/test/ListeningTest';
import AudioPlayer from '../components/test/AudioPlayer';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import Section from '../interfaces/test/Section.interface';
import SectionAnswer from '../interfaces/test/SectionAnswer.interface';

import { Navigate, Routes, Route, useParams } from 'react-router-dom';

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
  const [userAnswers, setUserAnswers] = useState<SectionAnswer[]>([]);
  const userAnswersRef = useRef<SectionAnswer[]>([]); //make a copy of userAnswers state to deal with setInterval closure

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
      handleSubmit();
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
  const handleSubmit = () => {};

  //   useEffect(() => {
  //     userAnswersRef.current = userAnswers;
  //   }, [userAnswers]);

  // intialize userAnswer
  useEffect(() => {
    let newUserAnswers = [...userAnswers];
    sections.forEach((section) => {
      let newAnswerSection: SectionAnswer = {
        start_index: section.start_index,
        end_index: section.end_index,
        answers: [],
      };
      newUserAnswers.push(newAnswerSection);
    });
    setUserAnswers(newUserAnswers);
  }, [sections]);

  return (
    <div>
      <Routes>
        <Route
          path=":id"
          element={
            <div>
              {JSON.stringify(userAnswers)}
              <TestHeader
                sectionsLength={sections.length}
                timeLeft={timeLeft}
                handleSubmit={handleSubmit}
              />

              <div style={{ padding: 30, backgroundColor: '#E5E5E5' }}>
                <div className="flex content-center place-content-center">
                  {JSON.stringify(userAnswers)}
                  <ListeningTest sections={sections} />
                </div>
              </div>

              <AudioPlayer audioSource="https://www.dropbox.com/s/8cds18ri4qugdi4/guwei.mp3?dl=1" />
            </div>
          }
        />
      </Routes>
    </div>
  );
}
