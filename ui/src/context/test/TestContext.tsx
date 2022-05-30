import React, { useReducer, useContext, createContext } from 'react';
import reducer from './reducer';
import * as types from './constants';

// import interfaces
import TestData from '../../interfaces/test/TestData.interface';
import SubmitData from '../../interfaces/test/SubmitData.interface';

interface InitialStateType {
  testData: TestData;
  submitData: SubmitData;
  setTestData: (testData: TestData) => void;
  setSubmitData: (submitData: SubmitData) => void;
}

const initialState: InitialStateType = {
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
};

const TestContext = createContext<InitialStateType>(initialState);

const TestProvider = (parameter: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSetTestData = (testData: TestData) => {
    console.log('handlesettestdata');
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

  return (
    <TestContext.Provider
      value={{
        ...state,
        setTestData: handleSetTestData,
        setSubmitData: handleSetSubmitData,
      }}
    >
      {parameter.children}
    </TestContext.Provider>
  );
};

const useTestContext = () => useContext(TestContext);

export { TestContext, TestProvider, useTestContext };
