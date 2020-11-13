import axios from 'axios';

const getDailyWeather = () => {
  return axios({
    method: 'get',
    url: 'https://api.openweathermap.org/data/2.5/onecall',
    params: {
      'lat': 21.028511,
      'lon': 105.804817,
      'appid': 'f19a32c6273ddf2b13817cfb1b8a2d11',
      'units': 'metric',
      'exclude': 'hourly,current,minutely'
    },
    responseType: 'json'
  })
}

const getHourlyWeather = () => {
  return axios({
    method: 'get',
    url: 'https://api.openweathermap.org/data/2.5/forecast',
    params: {
      'appid': 'f19a32c6273ddf2b13817cfb1b8a2d11',
      'q': 'Hanoi,vn',
      'mode': 'json',
      'units': 'metric',
    },
    responseType: 'json'
  });
}

const ApiWeather = {
  getDailyWeather,
  getHourlyWeather,
}

export default ApiWeather;