import axios from 'axios';

const callApiWeather = param => {
    axios({
        method: 'get',
        url: 'http://bit.ly/2mTM3nY',
        params: {},
        responseType: 'json'
      })
}

export default callApiWeather;