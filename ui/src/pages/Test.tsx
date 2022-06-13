/* IMPORTS */
import React, { useEffect, useState, useRef } from 'react';
// components
import LoadingOverlay from 'react-loading-overlay-ts';
import TestHeader from '../components/test/TestHeader';
import ListeningTest from '../components/test/ListeningTest';
import ReadingTest from '../components/test/ReadingTest';
import RetakeTestModal from '../components/test/RetakeTestModal';
import ResultModal from '../components/test/ResultModal';
// interfaces
import SectionAnswer from '../models/test/SectionAnswer.interface';
import SubmitData from '../models/test/SubmitData.interface';
// routing
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
// context
import { useTestContext } from '../context/test/TestContext';
// fake data
import data from '../api/mockListeningData.json';
// import data from '../api/mockReadingData.json';
import mockPreTestData from '../api/mockPreTestData.json';

/* COMPONENT */
export default function Test(props: { reviewMode: boolean }) {
  // routing
  const navigate = useNavigate();
  // context
  const {
    reviewMode,
    setReviewMode,
    isLoading,
    setIsLoading,
    waitModal,
    setWaitModal,
    testData,
    submitData,
    setTestData,
    setSubmitData,
  } = useTestContext();

  // test data
  let totalTime: number | undefined = undefined;
  const [submitted, setSubmitted] = useState(false);
  const [isDone, setIsDone] = useState(true);
  const [timeLeft, setTimeLeft] = useState<string>('');
  const [intervalId, setIntervalId] = useState<number | undefined>(undefined);
  const [userAnswers, setUserAnswers] = useState<SectionAnswer[]>([]);
  const submitDataRef = useRef<SubmitData>();
  const waitModalRef = useRef(waitModal);

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
    setIsDone(mockPreTestData.isDone);
    setWaitModal(isDone);
    // somehow totalTime only works as a normal variable, rather than a state or context state
    totalTime = reviewMode ? 0 : 60;
  };

  useEffect(() => {
    setReviewMode(props.reviewMode);
    fetchData();
    setIsLoading(true);
  }, []);

  // update waitModalRef when waitModal changes
  useEffect(() => {
    waitModalRef.current = waitModal;
  }, [waitModal]);

  // update submitDataRef when submitData changes
  useEffect(() => {
    submitDataRef.current = submitData;
  }, [submitData]);

  //countdown function
  const countdown = () => {
    if (totalTime == undefined || isLoading || waitModalRef.current) {
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
  }, [isLoading, timeLeft, totalTime]);

  //submit test function
  const handleSubmit = reviewMode
    ? (event?: React.MouseEvent<HTMLElement>) => {}
    : (event?: React.MouseEvent<HTMLElement>) => {
        event?.preventDefault();
        setIsLoading(false);
        console.log('submit!');
        console.log(submitDataRef.current);
        // send submitted data to server here, instead of just console log
        setSubmitted(true);
        setWaitModal(true);
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
        <Route index element={<Navigate to="1" replace={true} />} />
        <Route
          path=":id"
          element={
            <LoadingOverlay
              active={isLoading}
              spinner
              text="Your test is loading. Please be patient..."
            >
              <div>
                {submitted && !reviewMode && <ResultModal />}
                {isDone && !reviewMode && <RetakeTestModal />}
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
            </LoadingOverlay>
          }
        />
      </Routes>
    </div>
  );
}
