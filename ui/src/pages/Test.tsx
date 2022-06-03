import React, { useEffect, useState, useRef } from 'react';
import TestHeader from '../components/test/TestHeader';
import ListeningTest from '../components/test/ListeningTest';
import ReadingTest from '../components/test/ReadingTest';
import SectionAnswer from '../interfaces/test/SectionAnswer.interface';
import SubmitData from '../interfaces/test/SubmitData.interface';

import { Routes, Route } from 'react-router-dom';

import { useTestContext } from '../context/test/TestContext';

// fake data
// import data from '../api/mockListeningData.json';
import data from '../api/mockReadingData.json';

export default function Test() {
  // context
  const { testData, submitData, setTestData, setSubmitData } = useTestContext();

  // test data
  let totalTime: number | undefined = undefined;
  const [timeLeft, setTimeLeft] = useState<string>('');
  const [intervalId, setIntervalId] = useState<number | undefined>(undefined);
  const [userAnswers, setUserAnswers] = useState<SectionAnswer[]>([]);
  const submitDataRef = useRef<SubmitData>();

  //fetch data function, currently it only sets mock data
  const fetchData = () => {
    let newTestData = {
      mediaURL: data.mediaURL,
      title: data.title,
      content: data.content,
      description: data.description,
      type: data.type,
      sections: data.sections,
    };

    let newSections = [];
    for (let i = 0; i < data.sections.length; i++) {
      let newSection = {
        startIndex: data.sections[i]?.startIndex,
        endIndex: data.sections[i]?.endIndex,
        answers: [],
      };
      newSections.push(newSection);
    }

    setTestData(newTestData);
    setSubmitData({
      id: data.id,
      sections: newSections,
    });
    // somehow totalTime only works as a normal variable, rather than a state or context state
    totalTime = 10;
  };

  useEffect(() => {
    fetchData();
  }, []);

  // update submitDataRef when submitData changes
  useEffect(() => {
    submitDataRef.current = submitData;
  }, [submitData]);

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
  const handleSubmit = (event?: React.MouseEvent<HTMLElement>) => {
    event?.preventDefault();
    console.log('submit!');
    console.log(submitDataRef.current);
  };

  // intialize userAnswer
  useEffect(() => {
    let newUserAnswers = [...userAnswers];
    testData.sections.forEach((section) => {
      let newAnswerSection: SectionAnswer = {
        startIndex: section.startIndex,
        endIndex: section.endIndex,
        answers: [],
      };
      newUserAnswers.push(newAnswerSection);
    });
    setUserAnswers(newUserAnswers);
  }, [testData.sections]);

  return (
    <div>
      <Routes>
        <Route
          path=":id"
          element={
            <div>
              <TestHeader timeLeft={timeLeft} handleSubmit={handleSubmit} />
              {testData.type === 'listening' && (
                <ListeningTest
                  sections={testData.sections}
                  audioSource={testData.mediaURL}
                />
              )}
              {testData.type === 'reading' && (
                <ReadingTest
                  sections={testData.sections}
                  title={testData.title}
                  passage={testData.content}
                  illustration={testData.mediaURL}
                  handleSubmit={handleSubmit}
                />
              )}
            </div>
          }
        />
      </Routes>
    </div>
  );
}
