import axios from 'axios';
import Constants from '../constants/';

const API_KEY = "2a15bf2f02239e2fcc566ad41e8b46b3";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},pe`;
  const request = axios({
    method: 'get',
    url
  });
  return {
    type: Constants.FETCH_WEATHER,
    payload: request
  }
}