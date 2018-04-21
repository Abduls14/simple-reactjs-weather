import axios from "axios";
import {
  FETCHED_LOCAL_WEATHER,
  FETCHED_SEARCHED_WEATHER,
  SERVER_ERROR,
  SEARCH_IS_LOADING,
  LOCAL_IS_LOADING
} from "./types";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const ROOT_WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric`;
const ROOT_LOCATION_URL = "https://freegeoip.net/json/";

export const getCityWeather = city => async dispatch => {
  dispatch({ type: SEARCH_IS_LOADING });
  try {
    const url = `${ROOT_WEATHER_URL}&q=${city}`;
    const request = await axios.get(url);

    return dispatch({
      type: FETCHED_SEARCHED_WEATHER,
      payload: request
    });
  } catch (error) {
    dispatch({
      type: SERVER_ERROR,
      payload: error
    });
  }
};

export const getLocalWeather = () => async dispatch => {
  dispatch({ type: LOCAL_IS_LOADING });
  try {
    const location = await axios.get(ROOT_LOCATION_URL);
    const url = `${ROOT_WEATHER_URL}&q=${location.data.city}`;
    const request = await axios.get(url);

    return dispatch({
      type: FETCHED_LOCAL_WEATHER,
      payload: request
    });
  } catch (error) {
    dispatch({
      type: SERVER_ERROR,
      payload: error
    });
  }
};
