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

    componentDidMount() {
        ApiWeather().then(res => {
            console.log(res);
            this.setState({
                weatherDaily: res.data.daily,
                weatherHourly: res.data.hourly,
            });
        }).catch(err => {
            console.log(err);
        });
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/:day" component={WeatherDetail} />
                    <Route exact path="/" component={WeatherApp} />
                </Switch>
            </Router>
        );
    }
}

export default App;