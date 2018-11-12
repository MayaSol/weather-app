import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WeatherCard from './Components/WeatherCard/WeatherCard';
import * as serviceWorker from './serviceWorker';


const locale = 'en-US';
const city = 'Moscow';
const weatherData = [
  {
    date: new Date(2018, 11, 10),
    temp: 21,
    fallout: 'sun',
    wind: 19,
    humidity: 0,
  },
  {
    date: new Date(2018, 11, 11),
    temp: 17,
    fallout: 'cloud',
    wind: 15,
    humidity: 25,
  },
]

class WeatherBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: weatherData,
    }
  };

  render() {
    const data = this.state.weatherData;
    console.log(data);
    const cards = data.map((obj,i) =>
        <WeatherCard
          city = {city}
          locale = {locale}
          data = {obj}
          key = {i}
        />
    );
      return(
            <section className="weather-board">
            {cards}
            </section>
      )
  }

}

class WeatherApp extends React.Component {
  render() {
    return(
        <WeatherBoard />
      );
  }
}

ReactDOM.render(<WeatherApp />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
