/* IMPORTS */
import React, { useEffect, useState, useRef } from 'react';
// components
import LoadingOverlay from 'react-loading-overlay-ts';
import TestHeader from '../components/test/TestHeader';
import ListeningTest from '../components/test/ListeningTest';
import ReadingTest from '../components/test/ReadingTest';
import ResultModal from '../components/test/ResultModal';
import ExitWarningModal from '../components/test/ExitWarningModal';
// interfaces
import SectionAnswer from '../models/test/SectionAnswer.interface';
import SubmitData from '../models/test/SubmitData.interface';
// routing
import {
  Routes,
  Route,
  useNavigate,
  Navigate,
  useParams,
} from 'react-router-dom';
// context
import { useTestContext } from '../context/test/TestContext';
// fake data
// import data from '../api/mockListeningData.json';
// import data from '../api/mockReadingData.json';
import mockPreTestData from '../api/mockPreTestData.json';
// fetches
import { testApi } from '../api/testApi';

/* COMPONENT */
export default function Test(props: { reviewMode: boolean }) {
  // routing
  const navigate = useNavigate();
  const { testId } = useParams();
  // context
  const {
    reviewMode,
    setReviewMode,
    isLoading,
    setIsLoading,
    waitModal,
    setWaitModal,
    testDetails,
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
  const [exitWarningModalVisible, setExitWarningModalVisible] = useState(false);
  const submitDataRef = useRef<SubmitData>();
  const waitModalRef = useRef(waitModal);

  //fetch data function, currently it only sets mock data
  const fetchData = async () => {
    try {
      let data = await testApi.doTest(testId as string);

      console.log('data:');
      console.log(data);

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

        setTestData(newTestData);
        setSubmitData({
          id: data.id,
          testClassId: testDetails.testClassId,
          sections: newSections,
        });
        setIsDone(mockPreTestData.isDone);
        // somehow totalTime only works as a normal variable, rather than a state or context state
        totalTime = reviewMode ? 0 : testDetails.duration * 60;
      }
    } catch (error) {
      console.log(error);
    }
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
    ? () => {}
    : async (event?: React.MouseEvent<HTMLElement> | BeforeUnloadEvent) => {
        event?.preventDefault();
        setIsLoading(false);
        try {
          let response = await testApi.submitTest(
            submitDataRef.current as SubmitData
          );
          console.log(response);
          setSubmitted(true);
          setWaitModal(true);
        } catch (error) {
          console.log(error);
        }
        // console.log('submit!');
        // console.log(submitDataRef.current);
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
                {exitWarningModalVisible && <ExitWarningModal />}
                {submitted && !reviewMode && <ResultModal />}
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
