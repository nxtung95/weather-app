import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WeatherApp from './WeatherApp';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {
  const date = new Date();
  return (
    <Router>
      <Switch>
        <Route path="/Sunday">
          <WeatherApp day={date.getDay()} />
        </Route>
        <Route path="/Monday">
          <WeatherApp day={date.getDay()} />
        </Route>
        <Route path="/Tuesday">
          <WeatherApp day={date.getDay()} />
        </Route>
        <Route path="/Wednesday">
          <WeatherApp day={date.getDay()} />
        </Route>
        <Route path="/Thursday">
          <WeatherApp day={date.getDay()} />
        </Route>
        <Route path="/Friday">
          <WeatherApp day={date.getDay()} />
        </Route>
        <Route path="/Saturday">
          <WeatherApp day={date.getDay()} />
        </Route>
        <Route path="/">
          <WeatherApp day={date.getDay()} />
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