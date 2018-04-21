import {
  LOCAL_IS_LOADING,
  FETCHED_LOCAL_WEATHER,
  FETCHED_SEARCHED_WEATHER,
  SERVER_ERROR,
  SEARCH_IS_LOADING
} from "../actions/types";

const DEFAULT_STATE = {
  localLoading: false,
  searchLoading: false,
  error: ""
};

export default function(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case FETCHED_LOCAL_WEATHER:
      return {
        ...state,
        localLoading: false,
        localWeather: action.payload.data
      };
    case FETCHED_SEARCHED_WEATHER:
      return {
        ...state,
        searchLoading: false,
        searchedWeather: action.payload.data
      };
    case LOCAL_IS_LOADING:
      return { ...state, localLoading: true };
    case SEARCH_IS_LOADING:
      return { ...state, searchLoading: true };
    case SERVER_ERROR:
      return { ...state, localLoading: false, error: action.payload };
    default:
      return state;
  }
}
