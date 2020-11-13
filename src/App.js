import React from 'react';
import './index.css';
import WeatherApp from './WeatherApp';
import WeatherDetail from './components/weather_detail/WeatherDetail';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import ApiWeather from './service/ApiWeather';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            weatherDaily: [],
            weatherHourly: []
        };
    }

    async componentDidMount() {
        await Promise.all([
            ApiWeather.getDailyWeather(),
            ApiWeather.getHourlyWeather()
        ]).then(result => {
            this.setState({
                weatherDaily: result[0].data.daily,
                weatherHourly: result[1].data.list
            });
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/:day" component={WeatherDetail} />
                    <Route exact path="/" render={props => <WeatherApp {...props} daily={this.state.weatherDaily} hourly={this.state.weatherHourly} />} />
                </Switch>
            </Router>
        );
    }
}

export default App;