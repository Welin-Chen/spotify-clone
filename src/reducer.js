export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // Remove after finished developing
  // token:
  //   "BQDC4BFgCQx4ALojb4yOsxhtkdTLSV2wDCgQxzFbkbkqLCg1DU-OIcdpPq6g772TOv7GiBX1wGHrLc4MLcFwTO8jn1Lhj3Qj6hjwxveQSmA_hD8qt2aFrL8anE2ZxcBVghJcma1dSwLIKULF4BAw3GJWq4zDAKP9d66O2z7mbQXKVMIA",
};

const reducer = (state, action) => {
  console.log(action);

  // Action -> type, [payload]

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
