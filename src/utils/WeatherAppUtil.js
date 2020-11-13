import Sunny from '../components/image/sunny.PNG';
import Cloudy from '../components/image/cloudy.PNG';
import Rainy from '../components/image/rainy.PNG';
import Snowy from '../components/image/snowy.PNG';

const getImageWeather = mainWeather => {
    let image = '';
    if (mainWeather === 'Clear') {
        image = Sunny;
    } else if (mainWeather === 'Clouds') {
        image = Cloudy;
    } else if (mainWeather === 'Snow') {
        image = Snowy;
    } else if (mainWeather === 'Rain') {
        image = Rainy;
    }
    return image;
}

const getHourForOneDay = (hourly, date) => {
    const day = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    let hourOneDay = [];
    hourly.map((value) => {
        let dayHour = new Date(value.dt * 1000);
        const oneDayHour = `${dayHour.getFullYear()}-${dayHour.getMonth() + 1}-${dayHour.getDate()}`;
        if (oneDayHour === day) {
            hourOneDay.push(value);
        }
    })
    return hourOneDay;
}

const WeatherAppUtil = {
    getImageWeather,
    getHourForOneDay,
}

export default WeatherAppUtil;