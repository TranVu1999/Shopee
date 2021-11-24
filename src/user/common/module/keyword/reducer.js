import * as ActionTypes from "./constants";

let initialState = {
  isLoading: false,
  keysearch: "",
  listKeyword: [],
};

const keywordReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.FETCH_PEDING:
      state.isLoading = true;
      return { ...state };
    case ActionTypes.FETCH_FAIL:
      state.isLoading = false;
      state.listKeyword = [];
      return { ...state };

    case ActionTypes.FETCH_SUCCESS:
      state.isLoading = false;
      state.listKeyword = [...payload];
      return { ...state };

    case ActionTypes.CHANGE_KERSEARCH:
      state.keysearch = payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default keywordReducer;
