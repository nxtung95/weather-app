import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WeatherApp from './WeatherApp';
import WeatherDetail from './components/weather_detail/WeatherDetail';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/:day" component={WeatherDetail} />
        <Route exact path="/">
          <WeatherApp />
        </Route>
      </Switch>
    </Router>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);