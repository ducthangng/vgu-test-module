import * as types from './constants';

const reducer = (state: { track: any }, { type, payload }: any) => {
  switch (type) {
    case types.SET_TITLE: {
      return {
        ...state,
        track: {
          ...state.track,
          title: payload,
        },
      };
    }
    case types.SET_ARTIST: {
      return {
        ...state,
        track: {
          ...state.track,
          artist: payload,
        },
      };
    }
    case types.SET_LINK: {
      return {
        ...state,
        track: {
          ...state.track,
          link: payload,
        },
      };
    }
    default:
      return state;
  }
};

export default reducer;
