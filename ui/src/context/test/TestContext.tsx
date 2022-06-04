import React, { useReducer, useContext, createContext } from 'react';
import reducer from './reducer';
import * as types from './constants';

// import interfaces
import TestData from '../../interfaces/test/TestData.interface';
import SubmitData from '../../interfaces/test/SubmitData.interface';

interface InitialStateType {
  isLoading: boolean;
  reviewMode: boolean;
  testData: TestData;
  submitData: SubmitData;
  setTestData: (testData: TestData) => void;
  setSubmitData: (submitData: SubmitData) => void;
  setIsLoading: (isLoading: boolean) => void;
  setReviewMode: (reviewMode: boolean) => void;
}

const initialState: InitialStateType = {
  isLoading: false,
  reviewMode: false,
  testData: {
    mediaURL: '',
    title: '',
    content: '',
    description: '',
    type: '',
    sections: [],
  },
  submitData: {
    id: '',
    sections: [],
  },
  setTestData: () => {},
  setSubmitData: () => {},
  setIsLoading: () => {},
  setReviewMode: () => {},
};

const TestContext = createContext<InitialStateType>(initialState);

const TestProvider = (parameter: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSetTestData = (testData: TestData) => {
    dispatch({
      type: types.SET_TEST_DATA,
      payload: testData,
    });
  };

  const handleSetSubmitData = (submitData: SubmitData) => {
    dispatch({
      type: types.SET_SUBMIT_DATA,
      payload: submitData,
    });
  };

  const handleSetIsLoading = (isLoading: boolean) => {
    dispatch({
      type: types.SET_IS_LOADING,
      payload: isLoading,
    });
  };

  const handleSetReviewMode = (reviewMode: boolean) => {
    dispatch({
      type: types.SET_REVIEW_MODE,
      payload: reviewMode,
    });
  };

  return (
    <TestContext.Provider
      value={{
        ...state,
        setTestData: handleSetTestData,
        setSubmitData: handleSetSubmitData,
        setIsLoading: handleSetIsLoading,
        setReviewMode: handleSetReviewMode,
      }}
    >
      {parameter.children}
    </TestContext.Provider>
  );
};

const useTestContext = () => useContext(TestContext);

export { TestContext, TestProvider, useTestContext };
