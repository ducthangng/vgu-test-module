import * as types from './constants';

// import interfaces
import TestData from '../../interfaces/test/TestData.interface';
import SubmitData from '../../interfaces/test/SubmitData.interface';

const reducer = (
  state: { testData: TestData; submitData: SubmitData },
  { type, payload }: any
) => {
  switch (type) {
    case types.SET_TEST_DATA: {
      return {
        ...state,
        testData: payload,
      };
    }
    case types.SET_SUBMIT_DATA: {
      return {
        ...state,
        submitData: payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
