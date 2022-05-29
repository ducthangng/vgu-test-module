import React, { useReducer, useContext, createContext } from 'react';
import reducer from './reducer';
import * as types from './constants';

// import interfaces
import Section from '../../interfaces/test/Section.interface';

// interfaces
interface TrackType {
  title: string;
  artist: string;
  link: string;
}

interface InitialStateType {
  track: TrackType;
  setTitle: (title: string) => void;
  setArtist: (artist: string) => void;
  setLink: (link: string) => void;
}

const initialState: InitialStateType = {
  track: {
    title: 'None',
    artist: 'N/A',
    link: '',
  },
  setTitle: () => {},
  setArtist: () => {},
  setLink: () => {},
};

const TestContext = createContext<InitialStateType>(initialState);

const GlobalProvider = (parameter: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSetTitle = (title: string) => {
    dispatch({
      type: types.SET_TITLE,
      payload: title,
    });
  };

  const handleSetArtist = (artist: string) => {
    dispatch({
      type: types.SET_ARTIST,
      payload: artist,
    });
  };

  /**
   *
   * @param link string link to the next pages
   */
  const handleSetLink = (link: string) => {
    dispatch({
      type: types.SET_LINK,
      payload: link,
    });
  };

  return (
    <TestContext.Provider
      value={{
        ...state,
        setTitle: handleSetTitle,
        setArtist: handleSetArtist,
        setLink: handleSetLink,
      }}
    >
      {parameter.children}
    </TestContext.Provider>
  );
};

const useTestContext = () => useContext(TestContext);

export { TestContext, GlobalProvider, useTestContext };
